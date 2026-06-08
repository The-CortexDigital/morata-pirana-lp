# Cronograma de Tarefas: Landing Page 3IN Intermediações e Soluções Empresariais

Este documento serve para acompanhar o progresso do desenvolvimento da Landing Page de Regularização Empresarial da 3IN.

---

## Legenda de Status
* ⬜ **Pendente (Pending):** Não iniciado.
* ⏳ **Em Progresso (In Progress):** Sendo desenvolvido atualmente.
* ✅ **Concluído (Completed):** Finalizado e testado.

---

## 📋 Lista de Tarefas

### Fase 1: Planejamento, Configuração Inicial e Pivot
* [✅] **T-1.1:** Criar documento de planejamento detalhado (`PLANNING.md`) com a copy refinada baseada no PDF de conteúdo da 3IN.
* [✅] **T-1.2:** Criar documento de tarefas (`TASKS.md`) para acompanhamento do progresso.
* [✅] **T-1.3:** Criar regras do Cursor em `.cursor/rules/landing-page-rules.mdc` para garantir padrões de código e design da marca 3IN.
* [✅] **T-1.4:** Inicializar o projeto Next.js com Tailwind CSS, TypeScript e App Router.
* [✅] **T-1.5:** Configurar o logotipo oficial da 3IN em `public/assets/logo-3in.png`.

### Fase 2: Estrutura Básica e Layout Global (Rebrand 3IN)
* [✅] **T-2.1:** Configurar fontes elegantes (serifada para títulos e sans-serif para corpo) e estilos globais no Tailwind.
* [✅] **T-2.2:** Desenvolver o componente de Cabeçalho (`Header.tsx`) com o logotipo oficial da 3IN e botão de CTA.
* [✅] **T-2.3:** Desenvolver o componente de Rodapé (`Footer.tsx`) com informações institucionais, copyright e marca da 3IN.

### Fase 3: Desenvolvimento das Seções (Modular - Copy 3IN)
* [✅] **T-3.1:** Desenvolver a **Seção Hero** (`Hero.tsx`) com o título de impacto, bullets de destaque e o formulário de diagnóstico gratuito completo.
* [✅] **T-3.2:** Desenvolver a **Seção de Dores** (`Dores.tsx`) com os 6 cards interativos e ícones elegantes.
* [✅] **T-3.3:** Desenvolver a **Seção Como Funciona** (`ComoFunciona.tsx`) contendo a citação de Reginaldo Ortenzi à esquerda e os 4 passos numerados à direita.
* [✅] **T-3.4:** Desenvolver a **Seção Quem Somos** (`QuemSomos.tsx`) com o card visual de Reginaldo Ortenzi ("RO") e as estatísticas em destaque da 3IN.
* [✅] **T-3.5:** Desenvolver a **Seção Proposta de Valor** (`Entregas.tsx`) com os 4 cards numerados (01 a 04) de soluções da 3IN.
* [✅] **T-3.6:** Desenvolver a **Seção CTA Final** (`CtaFinal.tsx`) com o design centralizado, botões de WhatsApp e Telefone, e endereço físico.

### Fase 4: Integração, Responsividade e Deploy
* [✅] **T-4.1:** Integrar todas as seções na página principal (`app/page.tsx`).
* [✅] **T-4.2:** Garantir responsividade mobile-first impecável em todas as seções.
* [✅] **T-4.3:** Adicionar animações sutis de transição e efeitos hover nos botões/cards.
* [✅] **T-4.4:** Validar linter e erros de build.
* [✅] **T-4.5:** Realizar deploy da nova versão da Landing Page no Firebase Hosting.

### Fase 5: Aprovação e Publicação Final
* [⬜] **T-5.1:** Realizar ajustes e alterações solicitadas pelo cliente após revisão do link temporário.
* [⬜] **T-5.2:** Fazer o apontamento de DNS para configuração do domínio definitivo no Firebase Hosting.
