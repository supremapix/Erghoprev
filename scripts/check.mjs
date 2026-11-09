import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
const read=f=>fs.readFileSync(f,'utf8');const manifest=JSON.parse(read('dist/build-manifest.json'));const all=manifest.pages;const htmls=[];
for(const p of all){const file=p.route==='/404.html'?'dist/404.html':`dist${decodeURI(p.route)}index.html`;const html=read(file);htmls.push(html);const label=p.route;
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${label}: exactly one H1`);
 for(const token of ['<html lang="pt-BR">','name="description"','rel="canonical"','property="og:image"','name="twitter:card"','application/ld+json','Pular para o conteúdo','Suprema Sites Express','https://supremasite.com.br','id="share-toggle"','aria-expanded','name="viewport"'])assert.ok(html.includes(token),`${label}: ${token}`);
 assert.ok(!html.includes('cdn.tailwindcss.com')&&!html.includes('importmap'),`${label}: no runtime CSS/React CDN`);
 for(const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))JSON.parse(m[1]);
 for(const m of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)){const href=m[1].split(/[?#]/)[0];if(!href)continue;let target=path.join('dist',decodeURI(href));if(href.endsWith('/'))target=path.join(target,'index.html');assert.ok(fs.existsSync(target),`${label}: missing ${href}`)}
 for(const m of html.matchAll(/<a [^>]*target="_blank"[^>]*>/g))assert.ok(m[0].includes('noopener noreferrer'),`${label}: safe blank link`);
 const ids=[...html.matchAll(/ id="([^"]+)"/g)].map(x=>x[1]);assert.equal(new Set(ids).size,ids.length,`${label}: unique IDs`);
 for(const m of html.matchAll(/<img ([^>]+)>/g)){assert.ok(m[1].includes('alt='),`${label}: image alt`);assert.ok(m[1].includes('width=')&&m[1].includes('height='),`${label}: image dimensions`)}
}
assert.equal(manifest.indexed,16);assert.equal(manifest.legacy,149);assert.equal(all.length,166);
const body=htmls.join('');for(const falseClaim of ['Ricardo Silva','30%','R$ 6.000','Diagnóstico Gratuito','Plantão Digital','Atendimento Online','Autoridade Absoluta','ABERGO','CREFITO','priceRange','aggregateRating'])assert.ok(!body.includes(falseClaim),`Unverified claim: ${falseClaim}`);
const js=read('assets/site.js');for(const token of ['15000','Escape','clipboard.writeText','reportValidity','encodeURIComponent','noopener,noreferrer','prefers-reduced-motion','scrollY<300'])assert.ok(js.includes(token),`JS contract: ${token}`);
assert.ok(!/(localStorage|sessionStorage|fetch\(|XMLHttpRequest|sendBeacon)/.test(js),'No personal persistence or tracking requests');
const png=fs.readFileSync('dist/assets/og-erghoprev.png');assert.equal(png.readUInt32BE(16),1200);assert.equal(png.readUInt32BE(20),630);
assert.equal((read('dist/sitemap.xml').match(/<url>/g)||[]).length,16);
assert.ok(!read('dist/sitemap.xml').includes('/local/'));assert.ok(read('assets/site.css').includes('prefers-reduced-motion:reduce'));
assert.ok(!fs.existsSync('dist/.env'));const config=JSON.parse(read('vercel.json'));assert.equal(config.outputDirectory,'dist');assert.ok(!config.rewrites,'Unknown paths must remain 404');
console.log(`PASS: ${all.length} HTML pages, internal links/assets, unique H1s/IDs, metadata/JSON-LD, 149 legacy routes, 16 sitemap URLs, form/share contracts, verified contact, OG 1200×630, no invented claims or leaked env.`);
