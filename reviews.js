/* La Tasca + Santori: reseñas resumidas del dossier del 15/09/2026.
   No son citas textuales. Plataformas y calificaciones individuales respetadas. */
(function(){
 "use strict";
 const GOOGLE_TASCA="https://es.restaurantguru.com/La-Tasca-Puerto-Manzano";
 const GOOGLE_SANTORI="https://es.restaurantguru.com/Santori-Villa-La-Angostura";
 const TRIPADVISOR="https://www.tripadvisor.com.ar/Restaurant_Review-g312844-d4762076-Reviews-La_Tasca-Villa_La_Angostura_Province_of_Neuquen_Patagonia.html";
 const reviews=[
  {venue:"Santori",author:"Belén Musladini",platform:"Google Maps",stars:5,dateEs:"Septiembre de 2026",dateEn:"September 2026",es:"Destaca la atención a su familia, el menú infantil, la frescura del sushi y el ceviche, y el ambiente cálido.",en:"Highlights friendly service for her family, the children's menu, fresh sushi and ceviche, and the warm atmosphere.",url:GOOGLE_SANTORI},
  {venue:"La Tasca",author:"María Ignacia Migueles",platform:"Google Maps",stars:5,dateEs:"Septiembre de 2026",dateEn:"September 2026",es:"Un grupo de seis disfrutó del servicio rápido, los platos, los tragos y un detalle especial por un cumpleaños.",en:"A group of six enjoyed the quick service, food, drinks, and a special birthday surprise.",url:GOOGLE_TASCA},
  {venue:"Santori",author:"Valeria Morero",platform:"Google Maps",stars:5,dateEs:"Agosto de 2026",dateEn:"August 2026",es:"Resalta el excelente servicio y el sushi; cuenta que volvería sin dudarlo.",en:"Praises the excellent service and sushi, and says she would return without hesitation.",url:GOOGLE_SANTORI},
  {venue:"La Tasca",author:"Lola V",platform:"Tripadvisor",stars:null,dateEs:"31 de julio de 2026",dateEn:"July 31, 2026",es:"Describe una gran experiencia en familia: comida rica, servicio muy bueno, rapidez y ambiente agradable.",en:"Describes a great family experience, with delicious food, very good service, prompt attention and a pleasant atmosphere.",url:TRIPADVISOR},
  {venue:"Santori",author:"Ingrid Fuentes",platform:"Google Maps",stars:5,dateEs:"Agosto de 2026",dateEn:"August 2026",es:"Valora la propuesta Nikkei, el ceviche, la calidad del sushi y su cuidada presentación.",en:"Appreciates the Nikkei concept, the ceviche, the quality of the sushi and its careful presentation.",url:GOOGLE_SANTORI},
  {venue:"La Tasca / Santori",author:"Cecilia F",platform:"Tripadvisor",stars:null,dateEs:"27 de julio de 2026",dateEn:"July 27, 2026",es:"Destaca el tapeo, la tortilla de papas, el sushi y la atención de Elizabeth.",en:"Highlights the tapas, potato omelette, sushi, and Elizabeth's attentive service.",url:TRIPADVISOR},
  {venue:"Santori",author:"Franco Sanchez",platform:"Google Maps",stars:5,dateEs:"Agosto de 2026",dateEn:"August 2026",es:"Agradece la rapidez, la atención constante y el trato de Narela; lo considera su lugar favorito de Villa La Angostura.",en:"Appreciates the quick service, attentive staff and Narela's hospitality, calling it his favourite spot in Villa La Angostura.",url:GOOGLE_SANTORI},
  {venue:"La Tasca",author:"Francisco I",platform:"Tripadvisor",stars:null,dateEs:"5 de julio de 2026",dateEn:"July 5, 2026",es:"Valora el ambiente cálido y el servicio; recomienda especialmente los mariscos y la trucha.",en:"Enjoys the warm atmosphere and service, and especially recommends the seafood and trout.",url:TRIPADVISOR},
  {venue:"Santori",author:"Belén Olima Vera",platform:"Google Maps",stars:5,dateEs:"Septiembre de 2026",dateEn:"September 2026",es:"Valora las rabas, el arroz con mariscos, la limonada y el cheesecake, además de la excelente atención.",en:"Enjoys the squid, seafood rice, lemonade and cheesecake, along with the excellent service.",url:GOOGLE_SANTORI},
  {venue:"La Tasca",author:"Fernanda D",platform:"Tripadvisor",stars:null,dateEs:"11 de julio de 2026",dateEn:"July 11, 2026",es:"Destaca la comida, la atención de Flor y la música; expresa sus ganas de volver.",en:"Enjoys the food, Flor's service and the music, and looks forward to returning.",url:TRIPADVISOR}
 ];
 const root=document.getElementById("guest-reviews");
 if(!root)return;
 const $=id=>document.getElementById(id);
 const card=$("guest-review"),venue=$("guest-review-venue"),text=$("guest-review-text"),author=$("guest-review-author");
 const source=$("guest-review-source"),date=$("guest-review-date"),stars=$("guest-review-stars"),link=$("guest-review-link"),dots=$("guest-review-dots"),progress=$("guest-review-progress");
 const back=$("guest-review-back"),next=$("guest-review-next");
 const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 const BUTTON_LABEL={es:"Ver fuente de la reseña",en:"View review source"};
 const DOT_LABEL={es:"Ver opinión",en:"Show review"};
 let index=0;
 let pending=0;
 let halted=false;
 const english=()=>window.siteI18n?.language?.()==="en";
 const locale=()=>english()?"en":"es";
 const fill=()=>{
  const item=reviews[index];
  venue.textContent=item.venue;
  text.textContent=english()?item.en:item.es;
  author.textContent=item.author;
  source.textContent=item.platform;
  date.textContent=english()?item.dateEn:item.dateEs;
  stars.hidden=item.stars===null;
  if(item.stars!==null){
   stars.textContent="★".repeat(item.stars);
   stars.setAttribute("aria-label",english()?item.stars+" out of 5 stars":item.stars+" de 5 estrellas");
  }
  link.href=item.url;
  link.textContent=english()?"VIEW REVIEW SOURCE ↗":"VER FUENTE DE LA RESEÑA ↗";
  link.setAttribute("aria-label",BUTTON_LABEL[locale()]+": "+item.platform);
  progress.textContent=(index+1)+" / "+reviews.length;
  [...dots.children].forEach((dot,i)=>{
   dot.setAttribute("aria-current",String(i===index));
   dot.setAttribute("aria-label",DOT_LABEL[locale()]+" "+(i+1)+": "+reviews[i].author);
  });
 };
 const go=(nextIndex,manual)=>{
  const nextNumber=(nextIndex+reviews.length)%reviews.length;
  if(nextNumber===index&&!manual)return;
  if(pending)window.clearTimeout(pending);
  card.setAttribute("aria-live",manual?"polite":"off");
  if(reduced||document.hidden){
    index=nextNumber;fill();card.classList.remove("is-fading");return;
  }
  card.classList.add("is-fading");
  pending=window.setTimeout(()=>{
   index=nextNumber;fill();
   card.classList.remove("is-fading");
   pending=0;
  },260);
 };
 reviews.forEach((review,i)=>{
  const dot=document.createElement("button");
  dot.type="button";dot.className="guest-reviews__dot";
  dot.setAttribute("aria-label","Ver opinión "+(i+1)+": "+review.author);
  dot.setAttribute("aria-current",String(i===0));
  dot.addEventListener("click",()=>go(i,true));
  dots.appendChild(dot);
 });
 back.addEventListener("click",()=>go(index-1,true));
 next.addEventListener("click",()=>go(index+1,true));
 root.addEventListener("mouseenter",()=>{halted=true});
 root.addEventListener("mouseleave",()=>{halted=false});
 root.addEventListener("focusin",()=>{halted=true});
 root.addEventListener("focusout",e=>{if(!root.contains(e.relatedTarget))halted=false});
 let touchX=0,touchY=0;
 card.addEventListener("touchstart",e=>{if(e.touches.length===1){touchX=e.touches[0].clientX;touchY=e.touches[0].clientY}},{passive:true});
 card.addEventListener("touchend",e=>{
  if(e.changedTouches.length!==1)return;
  const dx=e.changedTouches[0].clientX-touchX,dy=e.changedTouches[0].clientY-touchY;
  if(Math.abs(dx)>55&&Math.abs(dx)>1.25*Math.abs(dy))go(index+(dx<0?1:-1),true);
 },{passive:true});
 window.addEventListener("site:languagechange",()=>{if(pending){window.clearTimeout(pending);pending=0}card.classList.remove("is-fading");fill()});
 if(!reduced)window.setInterval(()=>{if(!halted&&!document.hidden&&!pending)go(index+1,false)},7200);
 fill();
})();