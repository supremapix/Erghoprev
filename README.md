# ErghoPrev · Suprema

Site público existente: https://www.erghoprev.com.br/
Repositório: supremapix/Erghoprev. Projeto Vercel: erghoprev.

## Desenvolvimento

Node.js 20 ou superior. Sem dependências de produção, sem chave de API.

- `npm run build`: gera `dist/` com HTML real para todas as páginas.
- `npm test`: verifica o build, links internos, assets, metadados, JSON-LD e contratos de interação.
- `npm run check`: build + testes.
- `npm run dev`: serve o build em desenvolvimento.

Fontes: `scripts/data.mjs` (conteúdo), `scripts/build.mjs` (templates), `assets/site.css` e `assets/site.js`.

## Conteúdo e contatos

Os seis serviços, nome, telefone (41) 99780-1951, e-mail contato@erghoprev.com.br e marca foram preservados do site público/repositório anterior. A foto do escritório é ilustrativa, proveniente do mesmo endereço Unsplash já usado no site. Não representa a equipe nem instalações da empresa.

Removidos depoimentos sem fonte, resultados numéricos, supostas filiações, horários, plantão, ofertas gratuitas e garantias legais sem comprovação. Conteúdo normativo foi reformulado para distinguir avaliação preliminar e AET. Não foram criadas promessas de conformidade, unidades físicas, credenciais, preços ou prazos.

Os 149 endereços locais antigos continuam acessíveis, com orientação honesta de consulta de disponibilidade. São `noindex, follow`, com canonical para `/atendimento/`, evitando republicar páginas de entrada duplicadas e alegações locais não verificadas. As 16 páginas principais têm metadados próprios, conteúdo no HTML, sitemap, robots e llms.txt.

## Interações e privacidade

Formulário abre mensagem revisável no WhatsApp, sem enviar automaticamente nem persistir dados. Telefone e e-mail continuam diretos. Compartilhamento inclui 6 redes, copiar link, 15 textos a cada 15 segundos, pausa, Escape e movimento reduzido. Abertura dos destinos depende da ação do visitante. Eventos `erghoprev:interaction` são locais, sem analytics remoto ou IDs inventados.

Nenhuma prova Google/Bing foi adicionada, pois exige confirmação específica da propriedade e conta. Nenhum perfil social não confirmado é declarado. Crédito e logo Suprema presentes em todas as páginas.

## Publicação

Vercel publica `dist/` com `npm run build`. Não há fallback de SPA que transforme URLs inexistentes em HTTP 200. Os redirecionamentos legados `.html` são mantidos. O Git preserva integralmente a versão anterior para reversão.
