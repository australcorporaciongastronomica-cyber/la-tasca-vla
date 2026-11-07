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
 banner.append(title,message,link);
 const style=document.createElement("style");
 style.textContent=".salon-completo-aviso[hidden]{display:none!important}.salon-completo-aviso{position:sticky;top:0;z-index:99999;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;column-gap:18px;row-gap:7px;padding:13px 18px;background:#472a1c;color:#fff5e6;border-bottom:2px solid #d9ad6b;box-shadow:0 3px 18px #0008;text-align:center;font:600 13px/1.55 Montserrat,Arial,sans-serif}.salon-completo-aviso strong{font-size:14px;letter-spacing:.06em;color:#ffe1aa}.salon-completo-aviso span{font-weight:400}.salon-completo-aviso a{color:#ffdfac;text-decoration:underline;text-underline-offset:3px;font-size:12px}";
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
   title.textContent=both?"HOY COMPLETO · RESERVAS ONLINE PAUSADAS":"HOY SIN LUGAR · "+closed[0].toUpperCase();
   message.textContent=both?"No tenemos más lugar para reservas online en La Tasca y Santori por hoy. Mañana vuelve la disponibilidad.":"Las reservas online de "+closed[0]+" están pausadas por hoy. Consultá mañana o por cancelaciones.";
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
