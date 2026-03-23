# Planejamento — Site Mayim Carro Pipa RJ

## Visão Geral

Site institucional e de conversão para a **Mayim**, empresa de carro pipa no Rio de Janeiro.
Construído com **Next.js 15 (App Router)**, **Tailwind CSS v4**, **TypeScript** e otimizado para
**SEO semântico e ontológico**, priorizando posicionamento orgânico local no Google.

---

## 1. Stack Tecnológica

| Tecnologia | Versão | Justificativa |
|---|---|---|
| Next.js | 15+ (App Router) | SSG/ISR, Metadata API nativa, Server Components |
| React | 19 | Server Components, performance |
| TypeScript | 5+ | Tipagem estrita, manutenibilidade |
| Tailwind CSS | v4 | CSS-first config, bundles 70% menores, custom properties |
| next/image | nativo | Otimização automática de imagens (WebP/AVIF, lazy load) |
| JSON-LD | manual | Structured Data para SEO ontológico |
| Vercel | deploy | Edge network, analytics integrado |

---

## 2. Arquitetura de Páginas e Rotas

```
app/
├── layout.tsx                          # Layout raiz (header, footer, JSON-LD global)
├── page.tsx                            # Home — landing principal
├── globals.css                         # Estilos globais + Tailwind
├── sitemap.ts                          # Sitemap dinâmico
├── robots.ts                           # Robots.txt programático
├── manifest.ts                         # PWA manifest
├── not-found.tsx                       # Página 404 customizada
│
├── sobre/
│   └── page.tsx                        # Sobre a Mayim
│
├── servicos/
│   ├── page.tsx                        # Hub de serviços (overview)
│   ├── abastecimento-residencial/
│   │   └── page.tsx                    # Serviço: abastecimento residencial
│   ├── abastecimento-comercial/
│   │   └── page.tsx                    # Serviço: abastecimento comercial/industrial
│   ├── abastecimento-obras/
│   │   └── page.tsx                    # Serviço: abastecimento para obras
│   ├── abastecimento-piscinas/
│   │   └── page.tsx                    # Serviço: enchimento de piscinas
│   ├── lavagem-de-ruas/
│   │   └── page.tsx                    # Serviço: lavagem de ruas e pátios
│   └── umectacao-e-irrigacao/
│       └── page.tsx                    # Serviço: umectação de vias e irrigação
│
├── areas-atendidas/
│   ├── page.tsx                        # Hub de regiões
│   ├── zona-sul/
│   │   └── page.tsx                    # Carro pipa Zona Sul RJ
│   ├── zona-norte/
│   │   └── page.tsx                    # Carro pipa Zona Norte RJ
│   ├── zona-oeste/
│   │   └── page.tsx                    # Carro pipa Zona Oeste RJ
│   ├── barra-da-tijuca/
│   │   └── page.tsx                    # Carro pipa Barra da Tijuca
│   ├── centro/
│   │   └── page.tsx                    # Carro pipa Centro RJ
│   ├── niteroi/
│   │   └── page.tsx                    # Carro pipa Niterói
│   └── baixada-fluminense/
│       └── page.tsx                    # Carro pipa Baixada Fluminense
│
├── blog/
│   ├── page.tsx                        # Listagem de artigos
│   └── [slug]/
│       └── page.tsx                    # Artigo individual (ISR)
│
├── contato/
│   └── page.tsx                        # Formulário + mapa + WhatsApp
│
├── orcamento/
│   └── page.tsx                        # Solicitar orçamento (CTA principal)
│
└── faq/
    └── page.tsx                        # Perguntas frequentes (FAQPage schema)
```

---

## 3. SEO Semântico — Estratégia de Conteúdo

### 3.1 Cluster de Palavras-Chave (Pillar + Cluster)

**Pillar (página central):** Home — "Carro Pipa RJ"

**Clusters:**

| Cluster | Página | Palavra-chave principal | Variações semânticas |
|---|---|---|---|
| Serviços | /servicos/abastecimento-residencial | carro pipa residencial rj | caminhão pipa casa, água potável residência rio |
| Serviços | /servicos/abastecimento-comercial | carro pipa comercial rj | caminhão pipa empresa, abastecimento água escritório |
| Serviços | /servicos/abastecimento-obras | carro pipa obra rj | caminhão pipa construção, água para obra |
| Serviços | /servicos/abastecimento-piscinas | encher piscina carro pipa rj | caminhão pipa piscina, água piscina rio |
| Serviços | /servicos/lavagem-de-ruas | lavagem rua carro pipa rj | lavagem pátio caminhão pipa, limpeza via |
| Serviços | /servicos/umectacao-e-irrigacao | umectação vias rj | irrigação terreno, umectação solo |
| Localidade | /areas-atendidas/zona-sul | carro pipa zona sul rj | caminhão pipa ipanema, leblon, copacabana |
| Localidade | /areas-atendidas/zona-norte | carro pipa zona norte rj | caminhão pipa tijuca, méier, madureira |
| Localidade | /areas-atendidas/zona-oeste | carro pipa zona oeste rj | caminhão pipa campo grande, santa cruz |
| Localidade | /areas-atendidas/barra-da-tijuca | carro pipa barra da tijuca | caminhão pipa recreio, jacarepaguá |
| Localidade | /areas-atendidas/niteroi | carro pipa niterói | caminhão pipa são gonçalo, região oceânica |
| Localidade | /areas-atendidas/baixada-fluminense | carro pipa baixada fluminense | caminhão pipa nova iguaçu, duque de caxias |
| Educacional | /blog/* | água potável, falta d'água rj | dicas economia água, crise hídrica |
| Conversão | /orcamento | orçamento carro pipa rj | preço caminhão pipa, quanto custa carro pipa |
| FAQ | /faq | perguntas carro pipa | dúvidas caminhão pipa, como funciona |

> **Regra de silo para páginas de localidade:**
> - Atendem APENAS `kwROOT + região` (ex: "caminhão pipa zona sul rj")
> - NÃO criar sub-URLs por serviço dentro de áreas (`/areas-atendidas/zona-sul/residencial` **NÃO** deve existir)
> - Conteúdo específico de serviço vive EXCLUSIVAMENTE em `/servicos/*`
> - H1 da página de área: "Caminhão Pipa na {Região}" (genérico, sem menção a serviço)
> - **Bairros individuais** (Copacabana, Ipanema, etc.) são cobertos como seções `<h2>`/`<h3>` dentro da página de região, usando "Caminhão Pipa em {Bairro}" como heading. Expansão para URLs próprias (`/areas-atendidas/zona-sul/copacabana`) é fase futura.

### 3.2 HTML Semântico (por página)

Cada página deve utilizar as tags semânticas HTML5 corretamente:

```html
<header>      <!-- Cabeçalho do site -->
<nav>         <!-- Navegação principal + breadcrumbs -->
<main>        <!-- Conteúdo principal da página -->
<article>     <!-- Conteúdo autônomo (blog posts) -->
<section>     <!-- Seções temáticas com heading -->
<aside>       <!-- CTAs laterais, banners -->
<footer>      <!-- Rodapé com dados da empresa -->
<address>     <!-- Endereço da Mayim -->
```

### 3.3 Heading Hierarchy (H1-H6)

- Cada página tem exatamente **1 `<h1>`** único e descritivo
- Hierarquia lógica: H1 → H2 → H3 (sem pular níveis)
- H1 inclui a palavra-chave principal da página
- H2 para seções secundárias, H3 para sub-detalhes

---

## 4. SEO Ontológico — Structured Data (JSON-LD)

### 4.1 Ontologia do Domínio "Carro Pipa"

```
Mayim (Organization/LocalBusiness)
├── hasService → Abastecimento Residencial (Service)
├── hasService → Abastecimento Comercial (Service)
├── hasService → Abastecimento para Obras (Service)
├── hasService → Enchimento de Piscinas (Service)
├── hasService → Lavagem de Ruas (Service)
├── hasService → Umectação e Irrigação (Service)
├── areaServed → Zona Sul (Place/City)
├── areaServed → Zona Norte (Place/City)
├── areaServed → Zona Oeste (Place/City)
├── areaServed → Barra da Tijuca (Place/City)
├── areaServed → Centro (Place/City)
├── areaServed → Niterói (Place/City)
├── areaServed → Baixada Fluminense (Place/City)
├── hasOfferCatalog → Catálogo de Serviços (OfferCatalog)
├── review → Avaliações de Clientes (Review)
└── contactPoint → Telefone / WhatsApp (ContactPoint)
```

### 4.2 Schemas JSON-LD por Página

#### 4.2.1 Layout Global — `LocalBusiness`

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mayim.com.br/#organization",
  "name": "Mayim Carro Pipa",
  "alternateName": "Mayim",
  "description": "Empresa de carro pipa no Rio de Janeiro. Abastecimento de água potável 24h para residências, empresas, obras e piscinas.",
  "url": "https://mayim.com.br",
  "logo": "https://mayim.com.br/logo.png",
  "image": "https://mayim.com.br/og-image.jpg",
  "telephone": "+55-21-XXXX-XXXX",
  "email": "contato@mayim.com.br",
  "priceRange": "$$",
  "currenciesAccepted": "BRL",
  "paymentAccepted": "Dinheiro, PIX, Cartão, Boleto",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Endereço da Mayim",
    "addressLocality": "Rio de Janeiro",
    "addressRegion": "RJ",
    "postalCode": "XXXXX-XXX",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -22.9068,
    "longitude": -43.1729
  },
  "areaServed": [
    { "@type": "City", "name": "Rio de Janeiro" },
    { "@type": "City", "name": "Niterói" },
    { "@type": "City", "name": "Nova Iguaçu" },
    { "@type": "City", "name": "Duque de Caxias" },
    { "@type": "City", "name": "São Gonçalo" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/mayimcarropipa",
    "https://www.facebook.com/mayimcarropipa",
    "https://wa.me/5521XXXXXXXXX"
  ],
  "additionalType": "https://www.wikidata.org/wiki/Q1061324"
}
```

> `additionalType` aponta para o conceito "Water supply" no Wikidata, conectando a entidade à ontologia global.

#### 4.2.2 Páginas de Serviço — `Service`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Abastecimento de Água Residencial",
  "description": "Serviço de carro pipa para abastecimento de água potável em residências e condomínios no Rio de Janeiro.",
  "provider": { "@id": "https://mayim.com.br/#organization" },
  "areaServed": { "@type": "State", "name": "Rio de Janeiro" },
  "serviceType": "Abastecimento de Água Potável",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "BRL",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "200",
      "maxPrice": "500",
      "priceCurrency": "BRL"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Volumes disponíveis",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Carro Pipa 5.000 litros"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Carro Pipa 10.000 litros"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Caminhão Pipa 20.000 litros"
        }
      }
    ]
  }
}
```

#### 4.2.3 Páginas de Área Atendida — `Service` + `areaServed` (otimização local)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Caminhão Pipa Zona Sul RJ",
  "description": "Abastecimento de água potável por caminhão pipa na Zona Sul do Rio de Janeiro: Copacabana, Ipanema, Leblon, Botafogo, Flamengo e mais.",
  "provider": { "@id": "https://mayim.com.br/#organization" },
  "areaServed": {
    "@type": "Place",
    "name": "Zona Sul",
    "containedInPlace": {
      "@type": "City",
      "name": "Rio de Janeiro",
      "sameAs": "https://www.wikidata.org/wiki/Q8678"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -22.9711,
      "longitude": -43.1822
    },
    "containsPlace": [
      { "@type": "Neighborhood", "name": "Copacabana" },
      { "@type": "Neighborhood", "name": "Ipanema" },
      { "@type": "Neighborhood", "name": "Leblon" },
      { "@type": "Neighborhood", "name": "Botafogo" },
      { "@type": "Neighborhood", "name": "Flamengo" }
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços disponíveis na Zona Sul",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Caminhão Pipa 5.000 litros" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Caminhão Pipa 10.000 litros" } }
    ]
  }
}
```

**Sinais geo-locais adicionados:**
- `GeoCoordinates` por região (centroide)
- `containsPlace` com `Neighborhood` listando sub-bairros
- `sameAs` → Wikidata da cidade (Knowledge Graph)
- `hasOfferCatalog` genérico (volumes, não serviços específicos)

#### 4.2.4 FAQ — `FAQPage`

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto custa um carro pipa no Rio de Janeiro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O valor varia de R$200 a R$500, dependendo do volume e distância..."
      }
    },
    {
      "@type": "Question",
      "name": "A água do carro pipa é potável?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, toda água transportada pela Mayim possui laudo de potabilidade..."
      }
    }
  ]
}
```

#### 4.2.5 Blog — `Article` + `BreadcrumbList`

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Título do Artigo",
  "author": { "@id": "https://mayim.com.br/#organization" },
  "publisher": { "@id": "https://mayim.com.br/#organization" },
  "datePublished": "2026-03-01",
  "dateModified": "2026-03-01",
  "image": "https://mayim.com.br/blog/image.jpg"
}
```

#### 4.2.6 Breadcrumbs — `BreadcrumbList` (todas as páginas)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mayim.com.br" },
    { "@type": "ListItem", "position": 2, "name": "Serviços", "item": "https://mayim.com.br/servicos" },
    { "@type": "ListItem", "position": 3, "name": "Abastecimento Residencial" }
  ]
}
```

### 4.3 Conexão com Knowledge Graph (Google)

- **`sameAs`**: Links para redes sociais e perfis verificados
- **`additionalType`**: Link para Wikidata (conceito de "water supply")
- **Google Business Profile**: Vincular site ao perfil do Google Meu Negócio
- **Consistência NAP**: Nome, Endereço, Telefone iguais em todas as plataformas

---

## 5. Componentes do Site

### 5.1 Layout Global (`layout.tsx`)

- `<header>` com logo Mayim, navegação principal, botão WhatsApp/CTA
- `<footer>` com dados da empresa, links rápidos, redes sociais, endereço
- JSON-LD `LocalBusiness` injetado via `<script type="application/ld+json">`
- Metadata API: título padrão, descrição, Open Graph, Twitter Cards

### 5.2 Componentes Reutilizáveis

```
components/
├── layout/
│   ├── Header.tsx              # Navegação principal responsiva
│   ├── Footer.tsx              # Rodapé com NAP consistente
│   ├── MobileMenu.tsx          # Menu mobile (hamburger)
│   └── Breadcrumbs.tsx         # Breadcrumbs automáticos + JSON-LD
│
├── seo/
│   ├── JsonLd.tsx              # Wrapper genérico para JSON-LD
│   ├── LocalBusinessJsonLd.tsx # Schema LocalBusiness
│   ├── ServiceJsonLd.tsx       # Schema Service
│   ├── FaqJsonLd.tsx           # Schema FAQPage
│   ├── ArticleJsonLd.tsx       # Schema Article
│   └── BreadcrumbJsonLd.tsx    # Schema BreadcrumbList
│
├── ui/
│   ├── Button.tsx              # Botão reutilizável (CTA)
│   ├── Card.tsx                # Card de serviço/área
│   ├── InternalLink.tsx        # Link interno com title/aria-label automáticos (ver 7.2)
│   ├── WhatsAppButton.tsx      # Botão flutuante WhatsApp
│   ├── HeroSection.tsx         # Hero da home
│   ├── TestimonialCard.tsx     # Depoimento de cliente
│   └── ContactForm.tsx         # Formulário de contato/orçamento
│
├── sections/
│   ├── ServicesGrid.tsx        # Grid de serviços na home
│   ├── AreasGrid.tsx           # Grid de áreas atendidas
│   ├── WhyChooseUs.tsx         # Diferenciais da Mayim
│   ├── Testimonials.tsx        # Seção de depoimentos
│   ├── FAQ.tsx                 # Seção FAQ com accordion
│   └── CTABanner.tsx           # Banner de chamada para ação
│
└── blog/
    ├── BlogCard.tsx            # Card de artigo
    └── BlogList.tsx            # Listagem de artigos
```

#### `InternalLink.tsx` — Componente de Link Interno

Wrapper sobre `next/link` que gera `title` e `aria-label` automaticamente a partir do nome da região + kwROOT ("Caminhão Pipa").

**Uso:**
```tsx
<InternalLink href="/areas-atendidas/zona-sul" region="Zona Sul">
  Zona Sul
</InternalLink>
```

**Renderiza:**
```html
<a href="/areas-atendidas/zona-sul"
   title="Caminhão Pipa na Zona Sul RJ"
   aria-label="Saiba mais sobre caminhão pipa na Zona Sul do Rio de Janeiro">
  Zona Sul
</a>
```

**Props:**
- `href` — URL destino
- `region` (opcional) — nome da região; quando presente, gera `title` e `aria-label` com kwROOT
- Sem `region`, funciona como `next/link` normal

**Objetivo:** Garantir que todo link para área tenha anchor text limpo (só nome) + atributos semânticos, sem depender do dev lembrar de adicionar manualmente.

### 5.3 Home Page — Estrutura

```
┌─────────────────────────────────────────────┐
│ HEADER: Logo | Nav | WhatsApp CTA           │
├─────────────────────────────────────────────┤
│ HERO: "Carro Pipa no Rio de Janeiro 24h"    │
│ Subtítulo + CTA "Solicitar Orçamento"       │
│ Telefone em destaque                        │
├─────────────────────────────────────────────┤
│ SERVIÇOS: Grid 3x2 com ícones              │
│ [Residencial] [Comercial] [Obras]           │
│ [Piscinas]    [Lavagem]   [Irrigação]       │
├─────────────────────────────────────────────┤
│ SOBRE: Breve texto + imagem                 │
│ "Mayim — Água é vida"                       │
├─────────────────────────────────────────────┤
│ ÁREAS ATENDIDAS: Mapa/Grid das regiões      │
│ [Zona Sul] [Zona Norte] [Zona Oeste] [...]  │
├─────────────────────────────────────────────┤
│ DIFERENCIAIS: 4 cards                       │
│ [24h] [Água Certificada] [Frota] [Preço]    │
├─────────────────────────────────────────────┤
│ DEPOIMENTOS: Carousel de avaliações         │
├─────────────────────────────────────────────┤
│ FAQ: 5-6 perguntas frequentes               │
├─────────────────────────────────────────────┤
│ CTA BANNER: "Precisa de água? Ligue agora!" │
├─────────────────────────────────────────────┤
│ FOOTER: NAP + Links + Redes Sociais         │
└─────────────────────────────────────────────┘
```

---

## 6. SEO Técnico

### 6.1 Metadata API (Next.js)

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://mayim.com.br'),
  title: {
    default: 'Mayim | Carro Pipa RJ - Água Potável 24h no Rio de Janeiro',
    template: '%s | Mayim Carro Pipa RJ'
  },
  description: 'Carro pipa no Rio de Janeiro 24 horas. Abastecimento de água potável para residências, empresas, obras e piscinas. Solicite orçamento!',
  keywords: ['carro pipa rj', 'caminhão pipa rio de janeiro', 'água potável rj', 'carro pipa 24h'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Mayim Carro Pipa',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mayim.com.br',
  },
  verification: {
    google: 'GOOGLE_VERIFICATION_CODE',
  },
}
```

#### Padrão de Metadata para Páginas de Área (`/areas-atendidas/[area]`)

```typescript
// app/areas-atendidas/[area]/page.tsx
export function generateMetadata({ params }): Metadata {
  return {
    title: `Caminhão Pipa ${regiao.nome} - Entrega 24h | Mayim`,
    description: `Caminhão pipa na ${regiao.nome} do Rio de Janeiro. Entrega de água potável 24h em ${regiao.bairros.join(', ')}. Solicite orçamento!`,
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      title: `Caminhão Pipa ${regiao.nome} | Mayim`,
      description: `Caminhão pipa na ${regiao.nome} do Rio de Janeiro. Entrega de água potável 24h.`,
      images: [{ url: `/og/${regiao.slug}.jpg`, width: 1200, height: 630 }],
    },
  }
}
```

### 6.2 Sitemap Dinâmico

```typescript
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mayim.com.br'

  const staticPages = [
    '', '/sobre', '/servicos', '/contato', '/orcamento', '/faq',
    '/servicos/abastecimento-residencial',
    '/servicos/abastecimento-comercial',
    '/servicos/abastecimento-obras',
    '/servicos/abastecimento-piscinas',
    '/servicos/lavagem-de-ruas',
    '/servicos/umectacao-e-irrigacao',
    '/areas-atendidas',
    '/areas-atendidas/zona-sul',
    '/areas-atendidas/zona-norte',
    '/areas-atendidas/zona-oeste',
    '/areas-atendidas/barra-da-tijuca',
    '/areas-atendidas/centro',
    '/areas-atendidas/niteroi',
    '/areas-atendidas/baixada-fluminense',
  ]

  // Prioridades por tipo de página (SEO local)
  const getPriority = (path: string): number => {
    if (path === '') return 1.0                           // Home
    if (path === '/servicos') return 0.9                  // Hub serviços
    if (path === '/areas-atendidas') return 0.9           // Hub áreas
    if (path.startsWith('/servicos/')) return 0.8         // Serviço individual
    if (path.startsWith('/areas-atendidas/')) return 0.8  // Área individual
    if (path.startsWith('/blog')) return 0.7              // Blog
    return 0.6                                            // Orçamento, contato, FAQ
  }

  const getFrequency = (path: string): string => {
    if (path === '' || path.startsWith('/blog')) return 'weekly'
    return 'monthly'
  }

  return staticPages.map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: getFrequency(path),
    priority: getPriority(path),
  }))
}
```

### 6.3 Robots.txt

```typescript
// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://mayim.com.br/sitemap.xml',
  }
}
```

### 6.4 Performance e Core Web Vitals

- **Imagens**: `next/image` com `priority` no hero, formatos WebP/AVIF
- **Fontes**: `next/font/google` para evitar FOUT/FOIT
- **Lazy loading**: Componentes abaixo do fold carregados sob demanda
- **CSS**: Tailwind v4 gera ~6-12 KB gzipped
- **Prefetch**: Links internos com prefetch automático do `next/link`

---

## 7. Interlinking Semântico (Topical Authority)

### 7.1 Estrutura de Links Internos

> **Regra de silo**: Páginas de área são GENÉRICAS (kwROOT + região). NÃO contêm conteúdo específico de serviço. Conteúdo de serviço vive EXCLUSIVAMENTE em `/servicos/*`.

**Topologia hub-spoke:**
```
/areas-atendidas/ (HUB) → distribui PageRank para todas as áreas
    ├── zona-sul (SPOKE) → linka de volta ao hub + todos os serviços
    ├── zona-norte (SPOKE) → linka de volta ao hub + todos os serviços
    ├── zona-oeste (SPOKE) → linka de volta ao hub + todos os serviços
    ├── barra-da-tijuca (SPOKE) → linka de volta ao hub + todos os serviços
    ├── centro (SPOKE) → linka de volta ao hub + todos os serviços
    ├── niteroi (SPOKE) → linka de volta ao hub + todos os serviços
    └── baixada-fluminense (SPOKE) → linka de volta ao hub + todos os serviços
```

**Diagrama de interlinking:**
```
Home
├── → /servicos (link no texto + grid)
│   ├── → /servicos/abastecimento-residencial
│   │   └── → /areas-atendidas/zona-sul + zona-norte (âncora = nome da região)
│   ├── → /servicos/abastecimento-comercial
│   │   └── → /areas-atendidas/centro + barra-da-tijuca (âncora = nome da região)
│   ├── → /servicos/abastecimento-obras
│   │   └── → /areas-atendidas/baixada-fluminense + zona-oeste (âncora = nome da região)
│   ├── → /servicos/abastecimento-piscinas
│   │   └── → /areas-atendidas/barra-da-tijuca + zona-sul (âncora = nome da região)
│   ├── → /servicos/lavagem-de-ruas
│   │   └── → /areas-atendidas/centro + zona-norte (âncora = nome da região)
│   └── → /servicos/umectacao-e-irrigacao
│       └── → /areas-atendidas/zona-oeste + baixada-fluminense (âncora = nome da região)
│
├── → /areas-atendidas (link no texto + grid)
│   ├── → /areas-atendidas/zona-sul
│   │   └── → TODOS /servicos/* (âncoras variadas e descritivas)
│   ├── → /areas-atendidas/zona-norte
│   │   └── → TODOS /servicos/* (âncoras variadas e descritivas)
│   └── (idem para cada área)
│
├── → /blog (artigos linkam para serviços e áreas)
│   └── → /servicos/* + /areas-atendidas/* (âncora contextual natural)
│
├── → /faq → links para serviços específicos nas respostas
└── → /orcamento (CTA em todas as páginas)
```

### 7.2 Anchor Texts — Estratégia em 3 Camadas

#### Links serviço → área
- **Texto-âncora**: apenas o nome da região ("Zona Sul", "Barra da Tijuca")
- **`title`**: `"Caminhão Pipa na {Região} RJ"` (tooltip + sinal contextual)
- **`aria-label`**: `"Saiba mais sobre caminhão pipa na {Região} do Rio de Janeiro"` (acessibilidade + semântica)
- Cada página de serviço linka para 2-3 áreas atendidas relevantes

**Exemplo HTML:**
```html
<a href="/areas-atendidas/zona-sul"
   title="Caminhão Pipa na Zona Sul RJ"
   aria-label="Saiba mais sobre caminhão pipa na Zona Sul do Rio de Janeiro">
  Zona Sul
</a>
```

> **Nota técnica:** O atributo `alt` é válido apenas em `<img>`, `<area>` e `<input>`. Para `<a>`, usar `title` (tooltip + crawlers) e `aria-label` (acessibilidade + semântica).

#### Links área → serviço
- Âncora descritiva e **variada** por página ("abastecimento residencial", "água para sua casa", "serviço para condomínios")
- **Proibido** repetir a mesma âncora em múltiplas áreas
- Cada página de área linka para **todos** os serviços disponíveis

#### Links blog → área/serviço
- Âncora contextual natural no corpo do texto
- Variar os anchors para evitar over-optimization

---

## 8. Design e UX

### 8.1 Identidade Visual

- **Nome**: Mayim (מַיִם — "água" em hebraico)
- **Cores primárias**: Azul (água/confiança) + Branco (limpeza/pureza)
- **Cores de destaque**: Verde (ação/WhatsApp), Azul escuro (profissionalismo)
- **Tipografia**: Inter ou similar (boa legibilidade, moderna)

### 8.2 Paleta de Cores (Tailwind)

```css
@theme {
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;   /* Principal */
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;

  --color-accent: #22c55e;        /* Verde WhatsApp/CTA */
  --color-dark: #0f172a;          /* Textos */
  --color-light: #f8fafc;         /* Backgrounds */
}
```

### 8.3 Mobile-First

- Design responsivo com breakpoints Tailwind (sm, md, lg, xl)
- Menu hamburger em mobile
- Botão WhatsApp flutuante (fixo no canto inferior direito)
- Telefone clicável (`tel:`) no header mobile
- Touch-friendly: botões min 44x44px

---

## 9. Funcionalidades

### 9.1 Formulário de Orçamento

Campos:
- Nome completo
- Telefone / WhatsApp
- E-mail (opcional)
- Tipo de serviço (select)
- Volume aproximado (select)
- Bairro / Região
- Mensagem (textarea)

### 9.2 Botão WhatsApp Flutuante

- Sempre visível no canto inferior direito
- Ao clicar, abre o WhatsApp com mensagem pré-preenchida:
  "Olá! Gostaria de solicitar um orçamento de carro pipa."
- Tracking via URL params para analytics

### 9.3 Blog (futuro / ISR)

- Artigos sobre falta d'água, dicas de economia, manutenção de caixas d'água
- ISR com revalidação a cada 24h
- Schema `Article` em cada post
- Linkagem interna para serviços e áreas

---

## 10. Ordem de Implementação

### Fase 1 — Estrutura Base
1. Inicializar projeto Next.js 15 + TypeScript + Tailwind v4
2. Configurar `layout.tsx` raiz com Header e Footer
3. Criar componentes de SEO (JsonLd wrappers)
4. Implementar `sitemap.ts` e `robots.ts`
5. Configurar fontes com `next/font`

### Fase 2 — Páginas Principais
6. Home page com todas as seções
7. Página Sobre
8. Páginas de Serviços (hub + 6 subpáginas)
9. Páginas de Áreas Atendidas (hub + 7 subpáginas)

### Fase 3 — Conversão
10. Página de Contato com formulário
11. Página de Orçamento
12. Botão WhatsApp flutuante
13. CTAs distribuídos pelo site

### Fase 4 — Conteúdo Complementar
14. Página FAQ com FAQPage schema
15. Blog (estrutura + 2-3 artigos iniciais)
16. Página 404 customizada

### Fase 5 — Refinamento
17. Testes de Structured Data (Rich Results Test)
18. Otimização de Core Web Vitals (Lighthouse)
19. Testes de responsividade em múltiplos dispositivos
20. Revisão final de acessibilidade (WCAG)

---

## 11. Métricas de Sucesso

- **Lighthouse Score**: 90+ em todas as categorias (Performance, SEO, Accessibility, Best Practices)
- **Rich Results**: Validação sem erros no Google Rich Results Test
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Indexação**: Todas as páginas indexadas no Google Search Console
- **Conversão**: CTAs levando a WhatsApp e formulário de orçamento
