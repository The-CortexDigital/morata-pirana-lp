# Style Guide — 3IN Intermediações e Soluções Empresariais

Documento de referência para cores, tipografia, contato e uso de tokens CSS/Tailwind no projeto.

---

## Paleta de Cores

| Token CSS | Tailwind | Hex | RGB | Uso |
|---|---|---|---|---|
| `--color-primary` | `primary` | `#0E293E` | `14, 41, 62` | Fundos escuros, header, footer, hero, títulos em fundo claro |
| `--color-primary-light` | `primary-light` | `#283C50` | `40, 60, 80` | Destaques em fundo claro, bordas, badges, números, hover |
| `--color-charcoal` | `charcoal` | `#21242D` | `33, 36, 45` | Texto corrido em fundos claros |
| `--color-surface` | `surface` | `#F0F0F0` | `240, 240, 240` | Fundos alternados, destaques em fundo escuro |
| `--color-white` | `white` | `#FFFFFF` | `255, 255, 255` | Cards, texto em seções escuras, botões invertidos |
| `--color-whatsapp` | `whatsapp` | `#25D366` | — | Botões e links de WhatsApp |

### Regras de contraste

- **Seções escuras** (`bg-primary`): texto principal em branco; destaques com `text-surface` ou `text-white`.
- **Seções claras** (`bg-white`, `bg-surface`): texto em `text-charcoal`; títulos em `text-primary`; destaques em `text-primary-light`.
- **CTAs principais em fundo claro**: `bg-primary text-white`.
- **CTAs em fundo escuro**: borda branca ou botão WhatsApp verde.

---

## Tipografia

| Uso | Fonte | Tailwind | Pesos |
|---|---|---|---|
| Títulos | Playfair Display | `font-serif` | 700 (bold) |
| Textos, labels, botões | Inter / Roboto | `font-sans` | 400–600 |

Fallbacks configurados em `app/layout.tsx`:
- Serif: Playfair Display → Georgia → serif
- Sans: Inter → Roboto → system-ui → sans-serif

---

## Contato

| Campo | Valor |
|---|---|
| WhatsApp | `(11) 96104-4321` |
| WhatsApp (link) | `5511961044321` |
| Endereço | Rua José Versolato, 111 — 11º andar — Sala 1106 |
| Complemento | Torre B — Edifício DOMO Business |
| Bairro / Cidade | Centro, São Bernardo do Campo, SP |
| CEP | `09750-730` |

Constantes centralizadas em `lib/brand.ts` (`CONTACT`).

---

## Estrutura de arquivos

```
app/globals.css       → CSS variables (:root)
tailwind.config.js    → mapeamento Tailwind → variables
lib/brand.ts          → logos, contato, cores (referência TS)
STYLE.md              → este documento
```

---

## Tokens Tailwind disponíveis

```tsx
// Cores
bg-primary | bg-primary-light | bg-charcoal | bg-surface | bg-white | bg-whatsapp
text-primary | text-primary-light | text-charcoal | text-surface | text-white

// Tipografia
font-serif   // títulos
font-sans    // corpo e botões
```

---

## Componentes e padrões visuais

- **Badge de seção**: `bg-primary-light/10 border border-primary-light/30 text-primary-light` (claro) ou `bg-white/10 border border-white/20 text-surface` (escuro)
- **Card em fundo surface**: `bg-surface rounded-2xl border border-gray-100`
- **Card escuro (Reginaldo)**: `bg-primary border border-white/10`
- **Botão primário**: `bg-primary hover:bg-primary-light text-white`
- **Botão outline (header)**: `border border-white text-white hover:bg-white hover:text-primary`
