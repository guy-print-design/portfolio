const GEO={eddm:{vb:"0 0 720 522",bleed:[27,27,666,468],trim:[36,36,648,450],safe:[45,45,630,432]},
           p9x6:{vb:"0 0 720 504",bleed:[27,27,666,450],trim:[36,36,648,432],safe:[45,45,630,414]}};
const GEO_FLYER={vb:"0 0 630 810",bleed:[1,1,628,808],trim:[9,9,612,792],safe:[27,27,576,756]};
const GEO_TY={vb:"0 0 792 576",bleed:[27,27,738,522],trim:[36,36,720,504],safe:[45,45,702,486]};
const GEO_PW={vb:"0 0 682.016 484.016",bleed:[8.51,8.51,665,467],trim:[17.01,17.01,648,450],safe:[26.01,26.01,630,432]};
const GEO_TN={vb:"0 0 646.016 826.016",bleed:[8.51,8.51,629,809],trim:[17.01,17.01,612,792],safe:[35.01,35.01,576,756]};
const GEO_HV={vb:"0 0 629.516 875.516",bleed:[8.51,8.51,612.5,858.5],trim:[17.01,17.01,595.5,841.5],safe:[35.01,35.01,559.5,805.5]};
const GEO_EC={vb:"0 0 538.02 394.02",bleed:[8.51,8.51,521,377],trim:[17.01,17.01,504,360],safe:[26.01,26.01,486,342]};
const GEO_EF={vb:"0 0 684 864",bleed:[27,27,630,810],trim:[36,36,612,792],safe:[54,54,576,756]};
const GEO_MT={vb:"0 0 826.02 646.02",bleed:[8.51,8.51,809,629],trim:[17.01,17.01,792,612],safe:[35.01,35.01,756,576]};
const GEO_MM={vb:"0 0 1152 864",bleed:[27,27,1098,810],trim:[36,36,1080,792],safe:[54,54,1044,756]};
const GEO_BC={vb:"0 0 324 216",bleed:[27,27,270,162],trim:[36,36,252,144],safe:[45,45,234,126]};
const SP_MM=[["Trim size","15 \u00d7 11 in flat, tri-fold"],["Bleed","0.125 in all sides"],["Safe margin","0.25 in"],["Color","CMYK"],["Export","PDF, fonts embedded"]];
const SP_BC=[["Trim size","3.5 \u00d7 2 in"],["Bleed","0.125 in all sides"],["Safe margin","0.125 in"],["Color","CMYK"],["Export","PDF, fonts embedded"]];
const NOTE_DEFAULT="Real project, adapted for publication. Contact details, QR codes, prices and photos are replaced with placeholders.";
const SP_EC=[["Trim size","7 \u00d7 5 in"],["Bleed","0.125 in all sides"],["Safe margin","0.125 in"],["Color","CMYK"],["Export","PDF, fonts embedded"]];
const SP_EF=[["Trim size","8.5 \u00d7 11 in"],["Bleed","0.125 in all sides"],["Safe margin","0.25 in"],["Color","CMYK"],["Export","PDF/X-4, 300 ppi"]];
const SP_MT=[["Trim size","11 \u00d7 8.5 in flat, tri-fold"],["Bleed","0.125 in all sides"],["Safe margin","0.25 in"],["Color","CMYK"],["Export","PDF, fonts embedded"]];
const SP_TY=[["Trim size","10 \u00d7 7 in flat, folds to 5 \u00d7 7 in"],["Bleed","0.125 in all sides"],["Safe margin","0.125 in"],["Color","CMYK"],["Export","PDF/X-4"]];
const SP_PW=[["Trim size","9 \u00d7 6.25 in"],["Bleed","0.118 in (3 mm) all sides"],["Safe margin","0.125 in"],["Color","CMYK"],["Export","PDF/X-4"]];
const SP_TN=[["Trim size","8.5 \u00d7 11 in"],["Bleed","0.118 in (3 mm) all sides"],["Safe margin","0.25 in"],["Color","CMYK"],["Export","PDF/X-4, fonts embedded"]];
const SP_HV=[["Trim size","A4, 210 \u00d7 297 mm"],["Bleed","3 mm all sides"],["Safe margin","0.25 in"],["Color","CMYK"],["Export","PDF/X-4, fonts embedded"]];
const SP_FLYER=[["Trim size","8.5 \u00d7 11 in"],["Bleed","0.125 in all sides"],["Safe margin","0.25 in"],["Color","CMYK"],["Export","PDF, fonts embedded"]];
const SP_EDDM=[["Trim size","9 \u00d7 6.25 in"],["Bleed","0.125 in all sides"],["Safe margin","0.125 in"],["Color","CMYK"],["Export","PDF/X-4"]];
const SP_96=[["Trim size","9 \u00d7 6 in"],["Bleed","0.125 in all sides"],["Safe margin","0.125 in"],["Color","CMYK"],["Export","PDF/X-4"]];
const SP_BRAND=[["Format","Brand guidelines book"],["Page size","A4 landscape, 297 \u00d7 210 mm"],["Contents","Logo system, typography, color, usage, product mockups"],["Color","RGB screen + CMYK equivalents"],["Deliverables","Press-ready PDF + source"]];
const SP_POSTER=[["Format","Advertising poster"],["Media","Digital + print adaptation"],["Color","CMYK / RGB"],["Deliverables","Print-ready PDF + PNG"]];
const SP_LI_CAROUSEL=[["Format","LinkedIn carousel"],["Slide size","1080 × 1350 px, vertical"],["Slides","5 slides + closing"],["Use","Native LinkedIn post, PDF upload"]];
const SP_IG_CAROUSEL=[["Format","Instagram seamless carousel"],["Slide size","1080 × 1080 px, square"],["Slides","4 slides, seamless horizontal panorama"],["Use","Native Instagram post"]];
const SP_WEB_BANNERS=[["Format","Web banners, campaign set"],["Banners","3 visuals: deadline, savings, payback"],["Built in","Canva"],["Use","Website hero + content strips"]];
const NOTE_PUBLISHED="Real client project, published with permission.";
const NOTE_CONCEPT="Concept project for the portfolio.";
const WORKS=[
 {title:"Virtua Brand Guidelines",cat:"brand",tag:"Brand Guidelines \u00b7 SaaS",digital:true,specs:SP_BRAND,note:NOTE_PUBLISHED,labels:{front:"Contents",back:"About"},desc:"Full brand guidelines for Virtua, a SaaS company: logo system, typography, color palette, usage rules and product mockups across digital and print. Delivered as a press-ready PDF with source files.",preview:"assets/img/work/virtua-brand-guidelines/preview.jpg",front:"assets/img/work/virtua-brand-guidelines/front.jpg",back:"assets/img/work/virtua-brand-guidelines/back.jpg"},
 {title:"BTT Seamless Carousel",cat:"social",tag:"Instagram Carousel \u00b7 Tech",digital:true,specs:SP_IG_CAROUSEL,note:NOTE_PUBLISHED,labels:{front:"Seamless layout",back:"Slides"},desc:"Four-slide seamless Instagram carousel for BTT, a tech brand: an elegant visual story that simplifies neural networks and AI into clear bite-size messages, built on a minimalist gradient and modern typography.",preview:"assets/img/work/btt-seamless-carousel/preview.jpg",front:"assets/img/work/btt-seamless-carousel/front.jpg",back:"assets/img/work/btt-seamless-carousel/back.jpg"},
 {title:"LinkedIn Carousel \u2014 Creativity",cat:"social",tag:"LinkedIn Carousel",digital:true,specs:SP_LI_CAROUSEL,note:NOTE_CONCEPT,labels:{front:"Slides"},desc:"Five-slide LinkedIn carousel on boosting creativity: a minimalist layout with detailed illustrations, a guiding dotted line and consistent typography that ties the slides into a single story and lands a clear call to action.",preview:"assets/img/work/linkedin-carousel/preview.jpg",front:"assets/img/work/linkedin-carousel/front.jpg"},
 {title:"Commercial Solar Web Banners",cat:"web",tag:"Web Banners \u00b7 Campaign Set",digital:true,specs:SP_WEB_BANNERS,note:NOTE_PUBLISHED,labels:{front:"Deadline banner",back:"Numbers banner"},desc:"Three web visuals for a commercial solar company, aligning design with their marketing goals and brand style: an urgency timeline with a \u201cdelayed\u201d stamp, a savings breakdown bar chart and a long-term payback line chart. Built in Canva.",preview:"assets/img/work/solar-web-banners/preview.jpg",front:"assets/img/work/solar-web-banners/front.jpg",back:"assets/img/work/solar-web-banners/back.jpg"},
 {title:"Rosemary Oil Promo Poster",cat:"poster",tag:"Advertising Poster",digital:true,specs:SP_POSTER,note:NOTE_PUBLISHED,desc:"Sale poster for a rosemary essential oil brand: 50% off headline, before-and-after insets and a product shot on a neutral stage. Built in Adobe Photoshop, adapted for social and print.",preview:"assets/img/work/rosemary-oil-poster/preview.jpg"},
 {title:"Power Washing Offer",cat:"postcard",tag:"EDDM Postcard \u00b7 9 \u00d7 6.25\u2033",geo:"pw",specs:SP_PW,desc:"Bundle-and-save mailer for a power-washing company, with a review, before/after photos and an EDDM indicia back.",preview:"assets/img/work/national-power-washing/preview.jpg",front:"assets/img/work/national-power-washing/front.jpg",back:"assets/img/work/national-power-washing/back.jpg"},
 {title:"Cleaning Service Flyer",cat:"flyer",tag:"Flyer \u00b7 8.5 \u00d7 11\u2033",geo:"tn",specs:SP_TN,desc:"Two-sided flyer for a home-cleaning service: bold offer on the front, four services on the back.",preview:"assets/img/work/cleaning-service-flyer/preview.jpg",front:"assets/img/work/cleaning-service-flyer/front.jpg",back:"assets/img/work/cleaning-service-flyer/back.jpg"},
 {title:"Pizzeria Tri-fold Menu",cat:"menu",tag:"Tri-fold Menu \u00b7 15 \u00d7 11\u2033",geo:"mm",specs:SP_MM,labels:{front:"Outside",back:"Inside"},note:"Real project, adapted for publication. Contact details, QR codes and prices are replaced with placeholders.",desc:"Two-sided tri-fold menu for a pizzeria: pizza, pasta and entr\u00e9es inside, offer, QR code and contacts on the outside.",preview:"assets/img/work/pizzeria-trifold-menu/preview.jpg",front:"assets/img/work/pizzeria-trifold-menu/front.jpg",back:"assets/img/work/pizzeria-trifold-menu/back.jpg"},
 {title:"Open House Invite",credit:{name:"MediaLoot",url:"https://medialoot.com/"},cat:"postcard",tag:"EDDM Postcard \u00b7 9 \u00d7 6.25\u2033",geo:"eddm",specs:SP_EDDM,desc:"Open House invite, front and back.",preview:"assets/img/work/open-house-invite/preview.jpg",front:"assets/img/work/open-house-invite/front.jpg",back:"assets/img/work/open-house-invite/back.jpg"},
 {title:"Just Listed \u00b7 New Construction",credit:{name:"MediaLoot",url:"https://medialoot.com/"},cat:"postcard",tag:"EDDM Postcard \u00b7 9 \u00d7 6.25\u2033",geo:"eddm",specs:SP_EDDM,desc:"Just Listed luxury mailer with full property details.",preview:"assets/img/work/just-listed-new-construction/preview.jpg",front:"assets/img/work/just-listed-new-construction/front.jpg",back:"assets/img/work/just-listed-new-construction/back.jpg"},
 {title:"Thank-You Card",cat:"card",tag:"Folded Card \u00b7 5 \u00d7 7\u2033",geo:"ty",specs:SP_TY,labels:{front:"Outside",back:"Inside"},desc:"Folded thank-you card for a pet-containment dealer, with a Google review QR code and a referral note.",preview:"assets/img/work/fence-thank-you-card/preview.jpg",front:"assets/img/work/fence-thank-you-card/front.jpg",back:"assets/img/work/fence-thank-you-card/back.jpg"},
 {title:"Electrician Promo Flyer",cat:"flyer",tag:"Flyer \u00b7 8.5 \u00d7 11\u2033",geo:"ef",specs:SP_FLYER,note:"Real project, adapted for publication. Contact details, QR codes and prices are replaced with placeholders.",desc:"Single-sided promo flyer for an electrical contractor: safety headline, four warning signs, a 10% offer and a contact bar with a QR code.",preview:"assets/img/work/noryx-electric-flyer/preview.jpg",front:"assets/img/work/noryx-electric-flyer/front.jpg"},
 {title:"Electrician Business Card",cat:"business",tag:"Business Card \u00b7 3.5 \u00d7 2\u2033",geo:"bc",specs:SP_BC,desc:"Dark two-sided business card for an electrician: logo and service area on one side, name, contacts and QR code on the other.",preview:"assets/img/work/noryx-electric-business-card/preview.jpg",front:"assets/img/work/noryx-electric-business-card/front.jpg?v=f5f861",back:"assets/img/work/noryx-electric-business-card/back.jpg?v=f5f861"},
 {title:"Fence Seasonal Promo",credit:{name:"MediaLoot",url:"https://medialoot.com/"},cat:"postcard",tag:"EDDM Postcard \u00b7 9 \u00d7 6.25\u2033",geo:"eddm",specs:SP_EDDM,desc:"Seasonal promo mailer for a pet-containment brand.",preview:"assets/img/work/fence-seasonal-promo/preview.jpg",front:"assets/img/work/fence-seasonal-promo/front.jpg",back:"assets/img/work/fence-seasonal-promo/back.jpg"},
 {title:"Event Handout Card",cat:"card",tag:"Card \u00b7 7 \u00d7 5\u2033",geo:"ec",specs:SP_EC,desc:"Two-sided handout card: brand side up front, three key benefits and a QR code on the back.",preview:"assets/img/work/evohire-handout-card/preview.jpg",front:"assets/img/work/evohire-handout-card/front.jpg",back:"assets/img/work/evohire-handout-card/back.jpg"},
 {title:"Hiring Platform Flyer",cat:"flyer",tag:"Flyer \u00b7 8.5 \u00d7 11\u2033",geo:"ef",specs:SP_EF,desc:"One-page flyer for an AI interview platform: headline, feature cards, a three-step process and a demo button.",preview:"assets/img/work/hiring-platform-flyer/preview.jpg",front:"assets/img/work/hiring-platform-flyer/front.jpg"},
 {title:"Just Sold \u00b7 Off-Market",credit:{name:"MediaLoot",url:"https://medialoot.com/"},cat:"postcard",tag:"EDDM Postcard \u00b7 9 \u00d7 6.25\u2033",geo:"eddm",specs:SP_EDDM,desc:"Off-market Just Sold mailer, front and back.",preview:"assets/img/work/just-sold-off-market/preview.jpg",front:"assets/img/work/just-sold-off-market/front.jpg",back:"assets/img/work/just-sold-off-market/back.jpg"},
 {title:"Tri-fold Menu",cat:"menu",tag:"Tri-fold Menu \u00b7 11 \u00d7 8.5\u2033",geo:"mt",specs:SP_MT,labels:{front:"Inside"},desc:"Tri-fold menu for a plant-based restaurant: starters, mains, desserts and drinks with photos and an order-online panel.",preview:"assets/img/work/trifold-menu/preview.jpg",front:"assets/img/work/trifold-menu/front.jpg"},
 {title:"Design Talk Event Flyer",cat:"flyer",tag:"Flyer \u00b7 8.5 \u00d7 11\u2033",geo:"flyer",specs:SP_FLYER,desc:"Event flyer for a speaker series: date, venue and QR sign-up up top, speaker and partners below.",preview:"assets/img/work/design-talk-event-flyer/preview.jpg",front:"assets/img/work/design-talk-event-flyer/front.jpg"},
 {title:"Heating and Cooling Flyer",cat:"flyer",tag:"Flyer \u00b7 A4",geo:"hv",specs:SP_HV,desc:"Single-sided HVAC services flyer with a photo header, service icons and contact bar.",preview:"assets/img/work/hvac-flyer/preview.jpg",front:"assets/img/work/hvac-flyer/front.jpg"},
 {title:"Advisory Firm Business Card",cat:"business",tag:"Business Card \u00b7 3.5 \u00d7 2\u2033",geo:"bc",specs:SP_BC,note:"Concept for a fictional firm. Name, contact details and QR code are placeholders.",desc:"Two-sided business card for an advisory firm: monogram and QR code on one side, contact details on the other, with a gold arc detail.",preview:"assets/img/work/kessler-vane-business-card/preview.jpg",front:"assets/img/work/kessler-vane-business-card/front.jpg",back:"assets/img/work/kessler-vane-business-card/back.jpg"},
 {title:"Dog Food Direct Mail",credit:{name:"MediaLoot",url:"https://medialoot.com/"},cat:"postcard",tag:"Postcard \u00b7 9 \u00d7 6\u2033",geo:"p9x6",specs:SP_96,desc:"Direct-mail promo for a dog-food brand.",preview:"assets/img/work/dog-food-direct-mail/preview.jpg",front:"assets/img/work/dog-food-direct-mail/front.jpg",back:"assets/img/work/dog-food-direct-mail/back.jpg"},
 {title:"Homes Sold Brand Mailer",credit:{name:"MediaLoot",url:"https://medialoot.com/"},cat:"postcard",tag:"Postcard \u00b7 9 \u00d7 6\u2033",geo:"p9x6",specs:SP_96,desc:"Agent brand mailer with a sold-homes wall and a home-value CTA.",preview:"assets/img/work/homes-sold-brand-mailer/preview.jpg",front:"assets/img/work/homes-sold-brand-mailer/front.jpg",back:"assets/img/work/homes-sold-brand-mailer/back.jpg"},
 {title:"Just Sold \u00b7 Scotch Plains",credit:{name:"MediaLoot",url:"https://medialoot.com/"},cat:"postcard",tag:"EDDM Postcard \u00b7 9 \u00d7 6.25\u2033",geo:"eddm",specs:SP_EDDM,desc:"Just Sold off-market announcement, two sides.",preview:"assets/img/work/just-sold-scotch-plains/preview.jpg",front:"assets/img/work/just-sold-scotch-plains/front.jpg",back:"assets/img/work/just-sold-scotch-plains/back.jpg"}
];
GEO.flyer=GEO_FLYER;GEO.ty=GEO_TY;GEO.pw=GEO_PW;GEO.tn=GEO_TN;GEO.hv=GEO_HV;GEO.ec=GEO_EC;GEO.ef=GEO_EF;GEO.mt=GEO_MT;GEO.mm=GEO_MM;GEO.bc=GEO_BC;
const CATLABEL={brand:"Brand",social:"Social",web:"Web",poster:"Posters",postcard:"Postcards",flyer:"Flyers",card:"Cards",business:"Business cards",menu:"Menus \u0026 brochures",sign:"Signs"};
let PER=6;const ALLTABS=[["preview","Preview"],["front","Front"],["back","Back"]];let TABS=ALLTABS;
let cat="all",page=0,filtered=[],cur=0,tab="preview",guides=true;
const $=id=>document.getElementById(id);
function cats(){const s=[];WORKS.forEach(w=>{if(!s.includes(w.cat))s.push(w.cat)});const o=Object.keys(CATLABEL),k=c=>o.indexOf(c)<0?99:o.indexOf(c);return s.sort((a,b)=>k(a)-k(b))}
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
function paint(){const w=WORKS[filtered[cur]];TABS=ALLTABS.filter(t=>w[t[0]]).map(t=>[t[0],(w.labels&&w.labels[t[0]])||t[1]]);if(!w[tab])tab="preview";const sheet=(tab==="front"||tab==="back"),many=filtered.length>1;
 $("vtitle").textContent=w.title;$("vtype").textContent=w.tag;
 $("vtabs").innerHTML=TABS.map(([k,l])=>`<button class="vtab" role="tab" aria-selected="${k===tab}" onclick="setTab('${k}')">${l}</button>`).join('');
 let inner="";
 if(tab==="preview")inner=`<div class="vframe free"><img src="${w.preview}" alt="${w.title} preview"></div>`;
 else if(sheet&&w.geo){const vb=GEO[w.geo].vb.split(" ");inner=`<div class="vframe sheet" style="--ar:${vb[2]/vb[3]};aspect-ratio:${vb[2]}/${vb[3]}"><img src="${tab==='front'?w.front:w.back}" alt="${w.title} ${tab}">${guides?guidesSVG(w.geo):''}</div>`}
 else if(sheet)inner=`<div class="vframe free"><img src="${tab==='front'?w.front:w.back}" alt="${w.title} ${tab}"></div>`;
 $("vstageInner").innerHTML=inner;
 $("vtoggle").style.display=w.digital?'none':'';
 $("vtoggle").classList.toggle('off',!(sheet&&w.geo));$("vg").checked=guides;
 $("vlegend").style.display=(sheet&&guides&&w.geo)?'flex':'none';
 $("vspecs").innerHTML=w.specs.map(([a,b])=>`<div class="specrow">${a}<span>${b}</span></div>`).join('');
 $("vdesc").textContent=w.desc;$("vnote").textContent=w.note||NOTE_DEFAULT;{const c=w.credit,e=$("vcredit");if(c&&tab==="preview"){e.innerHTML='Mockup: <a href="'+c.url+'" target="_blank" rel="noopener">'+c.name+' \u2197</a>';e.hidden=false}else{e.innerHTML="";e.hidden=true}}
 $("vworknav").style.display=many?'flex':'none';
}
document.addEventListener('keydown',e=>{if($("viewer").hidden)return;if(e.key==="Escape")closeWork();else if(e.key==="ArrowRight")cycleTab(1);else if(e.key==="ArrowLeft")cycleTab(-1)});
renderFilters();renderGrid();

/* --- navigation pill on every block, bottom dock on phones --- */
const NAV=[["home","Home",'<path d="M4 11 12 4l8 7"/><path d="M6 10v9h12v-9"/>'],
 ["about","About me",'<circle cx="12" cy="8" r="3.6"/><path d="M5 20c.8-4 3.6-6 7-6s6.2 2 7 6"/>'],
 ["work","Work",'<rect x="4" y="7" width="16" height="12" rx="1.5"/><path d="M9 7V5h6v2"/>'],
 ["services","Services",'<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/>'],
 ["contact","Contact",'<rect x="4" y="6" width="16" height="12" rx="1.5"/><path d="m4 8 8 6 8-6"/>']];
const navHTML=on=>NAV.map(([id,l,d])=>`<a href="#${id}" data-nav="${id}" ${id===on?'aria-current="page"':''} aria-label="${l}" title="${l}"><svg viewBox="0 0 24 24">${d}</svg></a>`).join('');
document.querySelectorAll('.slide').forEach(s=>s.insertAdjacentHTML('beforeend',`<nav class="pill" aria-label="Sections">${navHTML(s.id)}</nav>`));
$("dock").innerHTML=navHTML("home");
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)$("dock").querySelectorAll('a').forEach(a=>{if(a.dataset.nav===e.target.id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')})})},{rootMargin:"-45% 0px -45% 0px"});
 document.querySelectorAll('.slide').forEach(s=>io.observe(s))}

/* --- scale the whole composition to the window: bigger type and photos on large screens, no empty margins --- */
function fit(){const d=document.documentElement,w=d.clientWidth,h=innerHeight;let z=1;
 if(w>=1024)z=Math.max(1,Math.min((w-48)/1180,h/770,1.6));
 d.style.setProperty('--z',z);document.body.style.zoom=z;
 d.style.setProperty('--pagew',Math.round(Math.min(1640,Math.max(1228,w/z)))+'px')}
function perPage(){const w=document.documentElement.clientWidth,n=w>=1280?8:w>=561?6:4;if(n!==PER){PER=n;page=0;renderGrid()}}
fit();perPage();addEventListener('resize',()=>{fit();perPage()});

/* --- reviews: slow running row; pauses on hover or touch, trackpad and swipe still scroll it --- */
(function(){const r=$("rvrow"),n=r.children.length;
 r.insertAdjacentHTML('beforeend',[...r.children].map(c=>c.outerHTML.replace('<figure class="rv"','<figure class="rv" aria-hidden="true"').replace('<a ','<a tabindex="-1" ')).join(''));
 if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 let pos=0,last=0,hold=false,until=0;
 const half=()=>r.children[n].offsetLeft-r.children[0].offsetLeft;
 const pause=ms=>{until=performance.now()+ms};
 r.addEventListener('mouseenter',()=>hold=true);r.addEventListener('mouseleave',()=>hold=false);
 r.addEventListener('focusin',()=>hold=true);r.addEventListener('focusout',()=>hold=false);
 r.addEventListener('touchstart',()=>pause(6000),{passive:true});r.addEventListener('wheel',()=>pause(2500),{passive:true});
 function step(t){const dt=Math.min(50,t-last||0);last=t;const h=half();
  if(Math.abs(r.scrollLeft-pos)>2)pos=r.scrollLeft;
  if(!hold&&t>until&&!document.hidden){pos+=dt*0.032}
  if(h>0){if(pos>=h)pos-=h;else if(pos<0)pos+=h}
  if(Math.abs(r.scrollLeft-pos)>=.5)r.scrollLeft=pos;
  requestAnimationFrame(step)}
 requestAnimationFrame(step)})();
