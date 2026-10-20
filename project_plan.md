# Ponto Zero — Landing Page

## 1. Descrição do Projeto
Página de apresentação (landing page) oficial da aplicação de controlo financeiro **Ponto Zero**.
A app é **offline-first**: não cria contas, não recolhe dados pessoais e não sincroniza com bancos.
Público-alvo: pessoas reais que querem controlar receitas, despesas, poupanças e dívidas de forma simples e privada.

Objetivo da landing page: explicar o valor da app, mostrar "a app por dentro" e levar o utilizador a instalar a aplicação na Play Store.

## 2. Estrutura de Páginas
- `/` — Landing Page (todas as secções)
- `/suporte` — Suporte (conteúdo a introduzir depois)
- `/termos` — Termos e Condições (conteúdo a introduzir depois)
- `/cookies` — Política de Cookies (conteúdo a introduzir depois)
- `/privacidade` — Política de Privacidade (conteúdo a introduzir depois)
- `/funcionalidades` — Funcionalidades detalhadas (conteúdo a introduzir depois)
- `*` — Página 404

## 3. Funcionalidades Principais (da landing)
- [x] Navbar responsiva com menu hambúrguer
- [x] Botão flutuante "Voltar ao topo"
- [x] Botões "Instalar App" (CTA para Play Store) — link real ligado: https://play.google.com/store/apps/details?id=com.app.pontozero
- [x] Hero com logótipo oficial + mockup do telemóvel
- [x] Secções de conteúdo (Problema, Solução, Controlo, Funcionalidades)
- [x] Secção "A App por Dentro" com placeholders de ecrãs (Home, Receitas, Despesas, Património, Definições)
- [x] Secção de Privacidade
- [x] Como funciona + Para quem é
- [x] Planos (Gratuita vs Premium)
- [x] FAQ com acordeão expansível + Sobre a app
- [x] CTA final com QR code
- [x] Footer com copyright, desenvolvedor e contacto
- [x] Páginas secundárias ligadas no Navbar/Footer

## 4. Modelo de Dados
Não aplicável. É um site institucional (conteúdo estático). Não requer base de dados.

## 5. Backend / Integrações
- Base de dados: **não necessária** (conteúdo estático).
- Shopify / Stripe / Supabase: **não necessários**.
- Formulários: contacto por email (mailto) — sem formulário nesta fase.

## 6. Plano por Fases

### Fase 1: Estrutura visual + Landing completa ✅
- Objetivo: entregar a landing page completa, moderna e responsiva. **Concluída.**

### Fase 2: Páginas secundárias ✅
- Objetivo: ligar as rotas de Suporte, Termos, Cookies, Privacidade e Funcionalidades. **Concluída.**

### Fase 3: Conteúdo real e ligações finais (a fazer)
- Objetivo: preencher as páginas secundárias com conteúdo legal definitivo e ligar o URL real da Play Store (`src/config/app.ts` → `playStoreUrl`).
- Entregável: conteúdo definitivo + URL de instalação real.