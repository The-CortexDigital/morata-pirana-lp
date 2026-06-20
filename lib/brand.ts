export const COLORS = {
  primary: "#1B3E63",
  primaryLight: "#2C5687",
  accent: "#1C5FA8",
  charcoal: "#21242D",
  surface: "#F0F0F0",
  white: "#FFFFFF",
  whatsapp: "#25D366",
} as const;

export const LOGOS = {
  /** Fundos escuros (header, footer, hero) */
  branco: "/assets/logo-3in-branco.png",
  /** Fundos claros */
  azul: "/assets/logo-3in-azul.png",
  preto: "/assets/logo-3in-preto.png",
  /** Arquivo legado / fallback */
  default: "/assets/logo-3in.png",
} as const;

export const CONTACT = {
  whatsapp: "5511961044321",
  whatsappDisplay: "(11) 96104-4321",
  phoneTel: "+5511961044321",
  email: "reginaldo@3incontabil.com.br",
  address: {
    street: "Rua José Versolato, 111",
    floor: "11º andar, Sala 1106",
    building: "Torre B, Edifício DOMO Business",
    district: "Centro, São Bernardo do Campo, SP",
    cep: "09750-730",
    full: "Rua José Versolato, 111, 11º andar, Sala 1106, Torre B, Edifício DOMO Business, Centro, São Bernardo do Campo, SP, CEP 09750-730",
    short: "São Bernardo do Campo, SP, Edifício DOMO Business, Torre B, 11º andar",
  },
} as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/3in.contabilidade/",
  linkedin: "#",
  facebook: "#",
} as const;

export type LogoVariant = keyof typeof LOGOS;
