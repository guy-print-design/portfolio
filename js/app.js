const GEO={eddm:{vb:"0 0 720 522",bleed:[27,27,666,468],trim:[36,36,648,450],safe:[45,45,630,432]},
           p9x6:{vb:"0 0 720 504",bleed:[27,27,666,450],trim:[36,36,648,432],safe:[45,45,630,414]}};
const SP_EDDM=[["Trim size","9 \u00d7 6.25 in"],["Bleed","0.125 in all sides"],["Safe margin","0.125 in"],["Color","CMYK"],["Export","PDF/X-4"]];
const SP_96=[["Trim size","9 \u00d7 6 in"],["Bleed","0.125 in all sides"],["Safe margin","0.125 in"],["Color","CMYK"],["Export","PDF/X-4"]];
const WORKS=[
 {title:"Just Sold \u00b7 Off-Market",cat:"postcard",tag:"EDDM Postcard \u00b7 9 \u00d7 6.25\u2033",geo:"eddm",specs:SP_EDDM,desc:"Off-market Just Sold mailer, front and back.",preview:"assets/img/work/just-sold-off-market/preview.jpg",front:"assets/img/work/just-sold-off-market/front.jpg",back:"assets/img/work/just-sold-off-market/back.jpg"},
 {title:"Just Listed \u00b7 New Construction",cat:"postcard",tag:"EDDM Postcard \u00b7 9 \u00d7 6.25\u2033",geo:"eddm",specs:SP_EDDM,desc:"Just Listed luxury mailer with full property details.",preview:"assets/img/work/just-listed-new-construction/preview.jpg",front:"assets/img/work/just-listed-new-construction/front.jpg",back:"assets/img/work/just-listed-new-construction/back.jpg"},
 {title:"Open House Invite",cat:"postcard",tag:"EDDM Postcard \u00b7 9 \u00d7 6.25\u2033",geo:"eddm",specs:SP_EDDM,desc:"Open House invite, front and back.",preview:"assets/img/work/open-house-invite/preview.jpg",front:"assets/img/work/open-house-invite/front.jpg",back:"assets/img/work/open-house-invite/back.jpg"},
 {title:"Homes Sold Brand Mailer",cat:"postcard",tag:"Postcard \u00b7 9 \u00d7 6\u2033",geo:"p9x6",specs:SP_96,desc:"Agent brand mailer with a sold-homes wall and a home-value CTA.",preview:"assets/img/work/homes-sold-brand-mailer/preview.jpg",front:"assets/img/work/homes-sold-brand-mailer/front.jpg",back:"assets/img/work/homes-sold-brand-mailer/back.jpg"},
 {title:"Fence Seasonal Promo",cat:"postcard",tag:"EDDM Postcard \u00b7 9 \u00d7 6.25\u2033",geo:"eddm",specs:SP_EDDM,desc:"Seasonal promo mailer for a pet-containment brand.",preview:"assets/img/work/fence-seasonal-promo/preview.jpg",front:"assets/img/work/fence-seasonal-promo/front.jpg",back:"assets/img/work/fence-seasonal-promo/back.jpg"},
 {title:"Dog Food Direct Mail",cat:"postcard",tag:"Postcard \u00b7 9 \u00d7 6\u2033",geo:"p9x6",specs:SP_96,desc:"Direct-mail promo for a dog-food brand.",preview:"assets/img/work/dog-food-direct-mail/preview.jpg",front:"assets/img/work/dog-food-direct-mail/front.jpg",back:"assets/img/work/dog-food-direct-mail/back.jpg"},
 {title:"Just Sold \u00b7 Scotch Plains",cat:"postcard",tag:"EDDM Postcard \u00b7 9 \u00d7 6.25\u2033",geo:"eddm",specs:SP_EDDM,desc:"Just Sold off-market announcement, two sides.",preview:"assets/img/work/just-sold-scotch-plains/preview.jpg",front:"assets/img/work/just-sold-scotch-plains/front.jpg",back:"assets/img/work/just-sold-scotch-plains/back.jpg"}
];
const CATLABEL={postcard:"Postcards",business:"Business cards",menu:"Menus \u0026 brochures",sign:"Signs"};
const PER=4;const TABS=[["preview","Preview"],["front","Front"],["back","Back"]];
let cat="all",page=0,filtered=[],cur=0,tab="preview",guides=true;
const $=id=>document.getElementById(id);
function cats(){const s=[];WORKS.forEach(w=>{if(!s.includes(w.cat))s.push(w.cat)});return s}
function listFor(c){const o=[];WORKS.forEach((w,i)=>{if(c==="all"||w.cat===c)o.push(i)});return o}
function renderFilters(){$("wfilters").innerHTML=["all",...cats()].map(c=>`<button class="filt" aria-pressed="${c===cat}" onclick="setCat('${c}')">${c==="all"?"All":(CATLABEL[c]||c)}</button>`).join('')}
function setCat(c){cat=c;page=0;renderFilters();renderGrid()}
function renderGrid(){const ids=listFor(cat),pages=Math.max(1,Math.ceil(ids.length/PER));if(page>=pages)page=pages-1;
 const sl=ids.slice(page*PER,page*PER+PER);
 $("wgrid").innerHTML=sl.map(i=>{const w=WORKS[i];return `<button class="wcard" onclick="openWork(${i})"><div class="wthumb"><img src="${w.preview}" alt="${w.title}"><span class="view">View files</span></div><div class="wmeta"><b>${w.title}</b><span>${w.tag}</span></div></button>`}).join('');
 $("wpager").innerHTML=pages>1?`<button class="pbtn" ${page==0?'disabled':''} onclick="pageBy(-1)" aria-label="Previous page"><svg viewBox="0 0 24 24"><path d="M15 5 8 12l7 7"/></svg></button><span class="pcount">${page+1} / ${pages}</span><button class="pbtn" ${page>=pages-1?'disabled':''} onclick="pageBy(1)" aria-label="Next page"><svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button>`:''}
function pageBy(d){page+=d;renderGrid()}
function guidesSVG(g){const G=GEO[g],r=(c,a)=>`<rect class="${c}" x="${a[0]}" y="${a[1]}" width="${a[2]}" height="${a[3]}"/>`;return `<svg class="g" viewBox="${G.vb}" preserveAspectRatio="xMidYMid meet">${r('bleed',G.bleed)}${r('trim',G.trim)}${r('safe',G.safe)}</svg>`}
function openWork(i){filtered=listFor(cat);cur=filtered.indexOf(i);if(cur<0){filtered=[i];cur=0}tab="preview";$("viewer").hidden=false;document.body.style.overflow='hidden';paint()}
function closeWork(){$("viewer").hidden=true;document.body.style.overflow=''}
function setTab(x){tab=x;paint()}
function toggleGuides(){guides=$("vg").checked;paint()}
function cycleTab(d){const i=TABS.findIndex(x=>x[0]===tab);tab=TABS[(i+d+TABS.length)%TABS.length][0];paint()}
function navWork(d){cur=(cur+d+filtered.length)%filtered.length;tab="preview";paint()}
function paint(){const w=WORKS[filtered[cur]],sheet=(tab==="front"||tab==="back"),many=filtered.length>1;
 $("vtitle").textContent=w.title;$("vtype").textContent=w.tag;
 $("vtabs").innerHTML=TABS.map(([k,l])=>`<button class="vtab" role="tab" aria-selected="${k===tab}" onclick="setTab('${k}')">${l}</button>`).join('');
 let inner="";
 if(tab==="preview")inner=`<div class="vframe free"><img src="${w.preview}" alt="${w.title} preview"></div>`;
 else if(sheet)inner=`<div class="vframe sheet"><img src="${tab==='front'?w.front:w.back}" alt="${w.title} ${tab}">${guides?guidesSVG(w.geo):''}</div>`;
 $("vstageInner").innerHTML=inner;
 $("vtoggle").classList.toggle('off',!sheet);$("vg").checked=guides;
 $("vlegend").style.display=(sheet&&guides)?'flex':'none';
 $("vspecs").innerHTML=w.specs.map(([a,b])=>`<div class="specrow">${a}<span>${b}</span></div>`).join('');
 $("vdesc").textContent=w.desc;
 $("vworknav").style.display=many?'flex':'none';
}
document.addEventListener('keydown',e=>{if($("viewer").hidden)return;if(e.key==="Escape")closeWork();else if(e.key==="ArrowRight")cycleTab(1);else if(e.key==="ArrowLeft")cycleTab(-1)});
renderFilters();renderGrid();
