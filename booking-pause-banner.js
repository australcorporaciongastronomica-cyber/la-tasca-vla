// Aviso público: solo muestra el estado anónimo del cierre del día local.
// No consulta ni expone nombres, teléfonos ni datos de reservas.
(()=>{
 "use strict";
 const endpoint="https://jtcltmnulmxvzqmlhgge.supabase.co/rest/v1/rpc/reservation_online_pause_status";
 const key="sb_publishable_oNcWsBjaDpmvN3zMzNtRww_Z9HbpqGN";
 const localDay=()=>new Intl.DateTimeFormat("en-CA",{timeZone:"America/Argentina/Buenos_Aires",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
 const banner=document.createElement("aside");
 banner.id="salonCompletoAviso";banner.hidden=true;
 banner.setAttribute("role","status");banner.setAttribute("aria-live","polite");
 banner.className="salon-completo-aviso";
 const title=document.createElement("strong"),message=document.createElement("span"),link=document.createElement("a");
 link.textContent="Consultar cancelaciones por WhatsApp";
 link.rel="noopener noreferrer";link.target="_blank";

 const frame=document.createElement("div");frame.className="salon-completo-inner";
 const eyebrow=document.createElement("p");eyebrow.className="salon-completo-eyebrow";
 eyebrow.textContent="LA TASCA ✦ SANTORI  ·  VILLA LA ANGOSTURA";
 const separator=document.createElement("div");separator.className="salon-completo-line";
 separator.setAttribute("aria-hidden","true");
 const actions=document.createElement("div");actions.className="salon-completo-actions";
 const datesLink=document.createElement("a");datesLink.className="salon-completo-action salon-completo-primary";
 datesLink.textContent="VER PRÓXIMAS FECHAS";
 link.className="salon-completo-action salon-completo-secondary";
 link.textContent="CONSULTAR CANCELACIONES POR WHATSAPP";
 actions.append(datesLink,link);
 const foot=document.createElement("p");foot.className="salon-completo-foot";
 foot.textContent="Aviso exclusivo de hoy · Se retira automáticamente a medianoche";
 frame.append(eyebrow,separator,title,message,actions,foot);banner.append(frame);
 const style=document.createElement("style");
 style.textContent=".salon-completo-aviso[hidden]{display:none!important}\n.salon-completo-aviso{position:relative;isolation:isolate;min-height:430px;padding:53px 20px 62px;display:grid;place-items:center;overflow:hidden;color:#fff4e5;background:radial-gradient(ellipse at 50% -25%,#544631 0%,transparent 50%),radial-gradient(ellipse at 100% 95%,#2b4032 0%,transparent 50%),linear-gradient(125deg,#111b16,#1b251d 50%,#141712);border-top:1px solid #b89b6a;border-bottom:2px solid #c6a977;box-shadow:0 15px 45px rgba(0,0,0,.34);font-family:Montserrat,Arial,sans-serif}\n.salon-completo-aviso:before,.salon-completo-aviso:after{content:\"\";position:absolute;pointer-events:none;width:min(64vw,640px);aspect-ratio:1;border:1px solid rgba(200,172,119,.15);border-radius:50%;transform:translate(-50%,-50%);top:50%;left:50%;z-index:-1}\n.salon-completo-aviso:after{width:min(82vw,820px);border-color:rgba(200,172,119,.07)}\n.salon-completo-inner{width:min(100%,1010px);margin:auto;text-align:center;padding:clamp(25px,4vw,43px) 20px;border:1px solid rgba(218,189,134,.35);background:linear-gradient(140deg,rgba(29,32,25,.72),rgba(19,28,22,.63));box-shadow:0 18px 60px #0005}\n.salon-completo-eyebrow{margin:0!important;color:#e1cba6!important;letter-spacing:.24em;font-size:clamp(10px,1.3vw,13px)!important;font-weight:600!important;line-height:1.8!important}\n.salon-completo-line{width:54px;height:1px;background:#c6a671;margin:18px auto 11px}\n.salon-completo-aviso strong{display:block;font-family:\"Cormorant Garamond\",Georgia,serif!important;font-size:clamp(62px,10.8vw,134px)!important;line-height:1!important;font-weight:500!important;letter-spacing:.025em;color:#f8e8cd!important;text-transform:uppercase;margin:7px 0 20px}\n.salon-completo-aviso span{display:block;font-size:clamp(15px,1.7vw,19px)!important;line-height:1.7!important;color:#eee2cb!important;font-weight:400!important;max-width:660px;margin:0 auto 28px}\n.salon-completo-actions{display:flex;flex-wrap:wrap;justify-content:center;gap:12px}\n.salon-completo-action{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:14px 20px!important;font-size:11px!important;font-weight:700!important;letter-spacing:.08em;text-decoration:none!important;text-align:center;border-radius:4px;transition:transform .15s}\n.salon-completo-action:hover{transform:translateY(-2px)}\n.salon-completo-primary{background:#d9bb86!important;border:1px solid #d9bb86;color:#1b211a!important}\n.salon-completo-secondary{background:transparent!important;border:1px solid rgba(217,187,134,.65);color:#f3dbad!important}\n.salon-completo-foot{margin:20px 0 0!important;font-size:11px!important;color:#b7ad98!important;letter-spacing:.03em;line-height:1.6!important}\n@media(max-width:600px){.salon-completo-aviso{min-height:0;padding:19px 12px 25px}.salon-completo-inner{padding:30px 14px 27px}.salon-completo-aviso strong{font-size:clamp(52px,15vw,88px)!important;margin:11px 0 16px}.salon-completo-actions{display:grid;grid-template-columns:1fr}.salon-completo-foot{font-size:10px!important}}";
 document.head.append(style);document.body.prepend(banner);
 let state={date:localDay(),pausedVenues:[],loaded:false};
 const update=(rows)=>{
  const day=localDay();
  const closed=Array.isArray(rows)?rows.filter(r=>r.service_date===day&&r.paused===true).map(r=>r.venue).filter(v=>v==="La Tasca"||v==="Santori"):[];
  state={date:day,pausedVenues:closed,loaded:true};
  window.reservationsPause=state;
  banner.hidden=closed.length===0;
  if(closed.length){
   const both=closed.length===2;
   title.textContent=both?"HOY COMPLETO":"SALÓN COMPLETO";
   message.textContent=both?"Hoy no contamos con más lugar para reservas online en La Tasca y Santori. Te esperamos a partir de mañana.":closed[0]+" no dispone de más lugares para reservas online hoy. Podés elegir otra fecha o consultar por cancelaciones.";
   const tomorrow=new Date(day+"T12:00:00Z");tomorrow.setUTCDate(tomorrow.getUTCDate()+1);
   datesLink.href="reservas.html?fecha="+tomorrow.toISOString().slice(0,10)+"#requestForm";
   link.href=both?"https://wa.me/5492944788994":closed[0]==="Santori"?"https://wa.me/5492944555129":"https://wa.me/5492944788994";
  }
  window.dispatchEvent(new CustomEvent("reservations:pausechange",{detail:state}));
 };
 let busy=false;
 const refresh=async()=>{
  if(busy)return;busy=true;
  try{
   const resp=await fetch(endpoint,{method:"POST",headers:{"apikey":key,"authorization":"Bearer "+key,"content-type":"application/json"},body:"{}",cache:"no-store"});
   if(!resp.ok)throw new Error("Error de estado");
   const rows=await resp.json();
   if(!Array.isArray(rows))throw new Error("Estado inválido");
   update(rows);
  }catch(e){console.warn("No se pudo consultar el estado anónimo de reservas.");}
  finally{busy=false}
 };
 window.refreshReservationsPause=refresh;
 refresh();
 setInterval(refresh,15000);
 // El aviso se retira exactamente cuando cambia la fecha argentina, sin depender de una recarga.
 setInterval(()=>{
  const day=localDay();
  if(state.date!==day){update([]);refresh();}
 },1000);
 document.addEventListener("visibilitychange",()=>{if(!document.hidden)refresh()});
})();
