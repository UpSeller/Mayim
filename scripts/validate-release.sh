#!/usr/bin/env bash
set -u
set -o pipefail

RESULT=0

GATE_INSTALL="not_run"
GATE_LINT="not_run"
GATE_BUILD="not_run"
GATE_TYPECHECK="not_run"
GATE_TEST="not_run"
GATE_NETWORK="not_run"
ROOT_CAUSE="none"

printf "==> preflight: npm registry\n"
if curl -IsS --max-time 10 https://registry.npmjs.org >/dev/null; then
  echo "[PASS] network_registry"
  GATE_NETWORK="pass"
else
  echo "[FAIL] network_registry"
  GATE_NETWORK="fail"
  ROOT_CAUSE="network_registry_unreachable"
  RESULT=1
fi

install_output_file="$(mktemp)"
printf "\n==> install\n"
echo "$ npm install --no-audit --no-fund"
if npm install --no-audit --no-fund | tee "$install_output_file"; then
  echo "[PASS] install"
  GATE_INSTALL="pass"
else
  echo "[FAIL] install"
  GATE_INSTALL="fail"
  if [[ "$ROOT_CAUSE" == "none" ]]; then
    ROOT_CAUSE="install_failed"
  fi
  RESULT=1
fi

if [[ "$GATE_INSTALL" == "pass" ]]; then
  printf "\n==> lint\n"
  echo "$ npm run lint"
  if npm run lint; then GATE_LINT="pass"; else GATE_LINT="fail"; RESULT=1; fi

  printf "\n==> build\n"
  echo "$ npm run build"
  if npm run build; then GATE_BUILD="pass"; else GATE_BUILD="fail"; RESULT=1; fi

  printf "\n==> typecheck\n"
  echo "$ npm run typecheck"
  if npm run typecheck; then GATE_TYPECHECK="pass"; else GATE_TYPECHECK="fail"; RESULT=1; fi
else
  printf "\n==> lint\n"
  echo "[SKIP] lint (dependências não instaladas)"
  GATE_LINT="skipped"

  printf "\n==> build\n"
  echo "[SKIP] build (dependências não instaladas)"
  GATE_BUILD="skipped"

  printf "\n==> typecheck\n"
  echo "[SKIP] typecheck (dependências não instaladas)"
  GATE_TYPECHECK="skipped"
fi

printf "\n==> test\n"
echo "$ npm run test"
if npm run test; then
  echo "[PASS] test"
  GATE_TEST="pass"
else
  echo "[FAIL] test"
  GATE_TEST="fail"
  RESULT=1
fi

rm -f "$install_output_file"

printf "\nResumo de gates:\n"
printf -- "- network_registry: %s\n" "$GATE_NETWORK"
printf -- "- install: %s\n" "$GATE_INSTALL"
printf -- "- lint: %s\n" "$GATE_LINT"
printf -- "- build: %s\n" "$GATE_BUILD"
printf -- "- typecheck: %s\n" "$GATE_TYPECHECK"
printf -- "- test: %s\n" "$GATE_TEST"
printf -- "- root_cause: %s\n" "$ROOT_CAUSE"

release_ready=false
if [[ "$RESULT" -eq 0 ]]; then
  release_ready=true
fi

report_dir="reports"
report_json="$report_dir/release-gate.json"
report_md="$report_dir/release-gate.md"
mkdir -p "$report_dir"

generated_at="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"

cat > "$report_json" <<JSON
{
  "generated_at_utc": "$generated_at",
  "network_registry": "$GATE_NETWORK",
  "install": "$GATE_INSTALL",
  "lint": "$GATE_LINT",
  "build": "$GATE_BUILD",
  "typecheck": "$GATE_TYPECHECK",
  "test": "$GATE_TEST",
  "root_cause": "$ROOT_CAUSE",
  "release_ready": $release_ready
}
JSON

cat > "$report_md" <<MD
# Release Gate Report

- generated_at_utc: $generated_at
- network_registry: $GATE_NETWORK
- install: $GATE_INSTALL
- lint: $GATE_LINT
- build: $GATE_BUILD
- typecheck: $GATE_TYPECHECK
- test: $GATE_TEST
- root_cause: $ROOT_CAUSE
- release_ready: $release_ready
MD

printf "Relatórios salvos em: %s e %s\n" "$report_json" "$report_md"

if [[ "$RESULT" -eq 0 ]]; then
  printf "\n✅ RELEASE READY: todos os gates obrigatórios passaram.\n"
else
  printf "\n❌ RELEASE BLOCKED: um ou mais gates falharam.\n"
fi

exit "$RESULT"
