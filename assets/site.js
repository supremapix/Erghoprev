'use strict';
document.documentElement.classList.add('js');
const $=s=>document.querySelector(s);
const menu=$('.menu-toggle'),nav=$('#main-nav');
menu.hidden=false;
const setMenu=open=>{menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.classList.toggle('is-open',open)};
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))setMenu(false)});
window.addEventListener('resize',()=>{if(innerWidth>800)setMenu(false)});
const topButton=$('#back-top');
const showTop=()=>{topButton.hidden=scrollY<300};
window.addEventListener('scroll',showTop,{passive:true});showTop();
topButton.addEventListener('click',()=>{window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});$('.brand').focus({preventScroll:true})});
// Local, non-networking events provide a future analytics integration point without identifiers or personal fields.
function track(name,detail={}){window.dispatchEvent(new CustomEvent('erghoprev:interaction',{detail:{event:name,...detail}}))}
document.querySelectorAll('[data-event]').forEach(a=>a.addEventListener('click',()=>track(a.dataset.event)));
const form=$('#contact-form');
if(form)form.addEventListener('submit',e=>{
 e.preventDefault();if(!form.reportValidity())return;
 const data=new FormData(form),name=String(data.get('name')||'').trim(),message=String(data.get('message')||'').trim();
 if(!name||!message){$('#form-status').textContent='Preencha seu nome e uma breve mensagem.';return}
 const text=`Olá! Conheci a ErghoPrev pelo site.\n\nNome: ${name}\n${data.get('company')?`Empresa: ${String(data.get('company')).trim()}\n`:''}Serviço: ${data.get('service')}\nMensagem: ${message}`;
 const url='https://wa.me/5541997801951?text='+encodeURIComponent(text);
 const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.textContent='Abrir mensagem no WhatsApp';
 $('#form-status').replaceChildren('Mensagem preparada. Revise e confirme o envio no WhatsApp. Se a janela não abrir, ',link,'.');
 window.open(url,'_blank','noopener,noreferrer');track('contact_message_prepared');
});
const panel=$('#share-panel'),toggle=$('#share-toggle'),pause=$('#share-pause'),caption=$('#share-caption');
const captions=['Um olhar atento às condições de trabalho.','Ergonomia começa com informação.','Conheça os serviços da ErghoPrev.','O trabalho real merece atenção.','Pessoas, atividades e ambientes em conexão.','Informação para decisões mais conscientes.','Uma conversa pode orientar o próximo passo.','Conheça a análise ergonômica do trabalho.','Entenda melhor o papel da NR-17.','Orientação para a realidade da sua empresa.','Projetos que consideram as pessoas.','Saiba mais sobre ergonomia no trabalho.','Compartilhe conhecimento sobre ergonomia.','Do posto à organização das atividades.','Converse com a equipe da ErghoPrev.'];
let captionIndex=0,paused=matchMedia('(prefers-reduced-motion: reduce)').matches,timer;
const updatePause=()=>{pause.setAttribute('aria-pressed',String(paused));pause.textContent=paused?'Retomar sugestões':'Pausar sugestões'};
updatePause();
function updateShare(){
 caption.textContent=captions[captionIndex];const u=new URL(location.href);u.hash='';
 const url=encodeURIComponent(u.href),title=encodeURIComponent(captions[captionIndex]),media=encodeURIComponent(location.origin+'/assets/og-erghoprev.png');
 const links={WhatsApp:`https://wa.me/?text=${title}%20${url}`,Facebook:`https://www.facebook.com/sharer/sharer.php?u=${url}`,X:`https://twitter.com/intent/tweet?text=${title}&url=${url}`,Pinterest:`https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${title}`,LinkedIn:`https://www.linkedin.com/sharing/share-offsite/?url=${url}`,Threads:`https://www.threads.net/intent/post?text=${title}%20${url}`};
 document.querySelectorAll('[data-share]').forEach(a=>a.href=links[a.dataset.share]);
}
function setShare(open,restore=false){panel.hidden=!open;toggle.setAttribute('aria-expanded',String(open));clearInterval(timer);if(open){setMenu(false);updateShare();$('#share-close').focus();timer=setInterval(()=>{if(!paused&&!document.hidden){captionIndex=(captionIndex+1)%captions.length;updateShare()}},15000)}else if(restore)toggle.focus()}
toggle.hidden=false;toggle.addEventListener('click',()=>setShare(panel.hidden));$('#share-close').addEventListener('click',()=>setShare(false,true));
pause.addEventListener('click',()=>{paused=!paused;updatePause()});
document.addEventListener('click',e=>{if(!panel.hidden&&!e.target.closest('.floating-share'))setShare(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!panel.hidden)setShare(false,true);if(menu.getAttribute('aria-expanded')==='true'){setMenu(false);menu.focus()}}});
$('#copy-link').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href.split('#')[0]);$('#share-status').textContent='Link copiado.'}catch{$('#share-status').textContent='Não foi possível copiar automaticamente. Copie o endereço na barra do navegador.'}});
window.addEventListener('pagehide',()=>clearInterval(timer));
