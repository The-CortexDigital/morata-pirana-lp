export const LOGOS = {
  /** Fundos escuros (header, footer, hero) */
  branco: "/assets/logo-3in-branco.png",
  /** Fundos claros */
  azul: "/assets/logo-3in-azul.png",
  preto: "/assets/logo-3in-preto.png",
  /** Arquivo legado / fallback */
  default: "/assets/logo-3in.png",
} as const;

export type LogoVariant = keyof typeof LOGOS;
