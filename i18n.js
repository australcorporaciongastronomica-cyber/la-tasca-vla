/* Bilingual navigation for La Tasca & Santori. Original menu PDFs are preserved. */
(function () {
  "use strict";
  const PAIRS = [

    // Reviews carousel: static headers, labels and methodology disclaimer
    ["La experiencia, contada por quienes nos visitan","Our guests, in their own words"],
    ["Sabores que se recuerdan, momentos para compartir y personas que nos eligen. Conocé algunas experiencias de nuestros visitantes.","Memorable flavours, moments to share and guests who choose us. Explore some of their experiences."],
    ["Resúmenes de opiniones, no citas textuales. Relevamiento del 15/06 al 15/09/2026. Las reseñas de Google Maps fueron consultadas mediante un índice público; las de Tripadvisor, en la plataforma. Solo se muestran estrellas individuales documentadas.","Review summaries, not verbatim quotations. Research period: June 15 to September 15, 2026. Google Maps reviews were checked via a public index; Tripadvisor reviews on its platform. Individual star ratings are displayed only when documented."],
    ["Opinión de un visitante","Guest review"],
    ["Controles de opiniones","Review controls"],
    ["Seleccionar opinión","Select a review"],
    ["Opinión anterior","Previous review"],["Siguiente opinión","Next review"],
    ["VER FUENTE DE LA RESEÑA ↗","VIEW REVIEW SOURCE ↗"],
    ["5 de 5 estrellas","5 out of 5 stars"],
    ["Un reconocimiento a nuestra experiencia","An award for our guest experience"],
    // Accessibility labels and interaction feedback
    ["Acceso directo a las cartas completas","Quick access to full menus"],
    ["Carrito único Take Away para La Tasca y Santori","One takeaway cart for La Tasca and Santori"],
    ["Dónde se encuentra cada restaurante","Where to find each restaurant"],
    ["Santori arriba y La Tasca en planta baja","Santori upstairs and La Tasca on the ground floor"],
    ["Ver carta de La Tasca","View La Tasca menu"],["Ver carta de Santori","View Santori menu"],
    ["Armar pedido Take Away de La Tasca","Build a La Tasca takeaway order"],
    ["Armar pedido Take Away de Santori","Build a Santori takeaway order"],
    ["Contactar La Tasca por WhatsApp","Contact La Tasca via WhatsApp"],
    ["Contactar Santori por WhatsApp","Contact Santori via WhatsApp"],
    ["Ver Instagram de La Tasca","View La Tasca Instagram"],["Ver Instagram de Santori","View Santori Instagram"],
    ["Cómo llegar a La Tasca y Santori","Directions to La Tasca and Santori"],
    ["Reservas y pedidos de La Tasca por WhatsApp","La Tasca reservations and orders via WhatsApp"],
    ["Reservas y pedidos de Santori por WhatsApp","Santori reservations and orders via WhatsApp"],
    ["Presentación de las cartas","Introducing the menus"],
    ["Seleccionar restaurante","Select a restaurant"],
    ["Carta digital tipo libro","Digital book-style menu"],
    ["Mostrar el libro abierto","Show open-book view"],
    ["Mostrar una página grande","Show one larger page"],
    ["Ver carta en pantalla completa","View menu in full screen"],
    ["Páginas de la carta","Menu pages"],
    ["Platos disponibles para solicitar","Dishes available to order"],
    ["Ver cartas completas de La Tasca y Santori","View full La Tasca and Santori menus"],
    ["Resumen del pedido","Order summary"],
    ["Ej.: 2","e.g. 2"],
    ["Tu pedido está vacío. Agregá platos de La Tasca, Santori o ambos.","Your cart is empty. Add dishes from La Tasca, Santori or both."],
    ["Preparando las páginas…","Preparing pages…"],["Preparando la página…","Preparing page…"],
    ["La vista tipo libro no está disponible.","The book-style viewer is unavailable."],
    ["La vista tipo libro no está disponible. Abrir el PDF original ↗","The book-style viewer is unavailable. Open the original PDF ↗"],
    ["Página","Page"],["Hoja","Page"],
    // Shared navigation
    ["← Volver al inicio","← Back to home"],["← VOLVER AL INICIO","← BACK TO HOME"],
    ["VER CARTAS COMPLETAS ↗","VIEW FULL MENUS ↗"],["Ver carta","View menu"],["Ver carta completa","View full menu"],
    ["Ver carta tipo libro ↗","View digital menu ↗"],["Ver PDF ↗","View PDF ↗"],
    ["VER CARTA ↗","VIEW MENU ↗"],["VER CARTA LA TASCA","VIEW LA TASCA MENU"],["VER CARTA SANTORI","VIEW SANTORI MENU"],
    ["ARMAR PEDIDO TAKE AWAY · LA TASCA + SANTORI ↗","ORDER TAKEAWAY · LA TASCA + SANTORI ↗"],
    ["Armar pedido Take Away","Build a takeaway order"],["🛍 Armar pedido Take Away ↗","Build a takeaway order ↗"],
    ["Elegí tus platos y envialos por WhatsApp","Choose your dishes and send them via WhatsApp"],
    ["Reservas y pedidos","Reservations and orders"],["Reservas y pedidos por WhatsApp","Reservations and orders via WhatsApp"],
    ["Reservas · Take Away","Reservations · Takeaway"],["WhatsApp","WhatsApp"],
    ["Consultas y reservas ↗","Enquiries and reservations ↗"],["Consultar reserva ↗","Enquire about reservations ↗"],["Reservar ↗","Reserve ↗"],
    ["Contactanos","Contact us"],["Visitanos","Visit us"],["Cómo llegar","Get directions"],
    ["Ubicación · Horarios","Location · Opening hours"],["Horarios","Opening hours"],["Todos los días","Every day"],
    ["Planta baja","Ground floor"],["Planta baja · PB","Ground floor"],["PB · Planta baja","Ground floor"],
    ["Arriba · En la cabaña","Upstairs · In the cabin"],["Arriba, en la cabaña","Upstairs, in the cabin"],
    ["· Arriba, en la cabaña","· Upstairs, in the cabin"],["· Planta baja","· Ground floor"],
    ["La Tasca · Planta baja","La Tasca · Ground floor"],
    ["Santori · Arriba, en la cabaña","Santori · Upstairs, in the cabin"],
    ["Planta baja · Villa La Angostura","Ground floor · Villa La Angostura"],
    ["Arriba, en la cabaña · Villa La Angostura","Upstairs in the cabin · Villa La Angostura"],
    ["La Tasca · planta baja | Santori · arriba, en la cabaña · Av. Arrayanes 6155, Villa La Angostura","La Tasca · ground floor | Santori · upstairs in the cabin · Av. Arrayanes 6155, Villa La Angostura"],
    ["La Tasca · Planta baja | Santori · Arriba, en la cabaña · Av. Arrayanes 6155","La Tasca · ground floor | Santori · upstairs in the cabin · Av. Arrayanes 6155"],
    ["Todos los pedidos se retiran en La Tasca.","All orders are collected at La Tasca."],
    ["Retiro de todos los pedidos: La Tasca.","Collect all orders at La Tasca."],
    ["La Tasca + Santori","La Tasca + Santori"],

    // Home page
    ["Gastronomía y encuentros en la Patagonia","Food and unforgettable moments in Patagonia"],
    ["Descubrí nuestras propuestas ↓","Discover our restaurants ↓"],
    ["Un mismo lugar · Dos experiencias","One location · Two experiences"],
    ["¿Dónde está cada uno?","Where can you find each restaurant?"],
    ["Nos encontrás en la misma dirección.","You'll find us at the same address."],
    ["Santori está arriba, en la cabaña.","Santori is upstairs, in the cabin."],
    ["La Tasca está abajo, en planta baja.","La Tasca is downstairs, on the ground floor."],
    ["Elegí el restaurante que buscás y descubrí su carta.","Choose your restaurant and explore its menu."],
    ["ARRIBA","UPSTAIRS"],["ABAJO","DOWNSTAIRS"],
    ["En la cabaña · Nivel superior","In the cabin · Upper level"],
    ["Sushi Nikkei. Para disfrutar de Santori, subí a la cabaña.","Nikkei sushi. Head up to the cabin to enjoy Santori."],
    ["MISMO EDIFICIO · AV. ARRAYANES 6155","SAME BUILDING · AV. ARRAYANES 6155"],
    ["Cocina, vinos y Patagonia. La Tasca te recibe en planta baja.","Cuisine, wine and Patagonia. Find La Tasca on the ground floor."],
    ["Dos experiencias","Two dining experiences"],
    ["Cocina, producto y experiencia gastronómica en Villa La Angostura. Descubrí nuestras cartas y contactanos directamente para reservas, pedidos y consultas.","Great ingredients, delicious food and memorable dining in Villa La Angostura. Explore our menus and contact us for reservations, orders and enquiries."],
    ["Cocina · Vinos · Patagonia","Cuisine · Wine · Patagonia"],
    ["Una propuesta gastronómica para disfrutar, compartir y descubrir sabores en un entorno cálido, con identidad patagónica y una vista única.","A welcoming dining experience where you can share meals and discover Patagonian flavours in a unique setting."],
    ["Menú completo de La Tasca","Full La Tasca menu"],["Menú completo de Santori","Full Santori menu"],
    ["Sushi Nikkei en una propuesta donde producto, técnica y presentación se encuentran para ofrecer una experiencia fresca, atractiva y con identidad.","A fresh and distinctive Nikkei sushi experience bringing together outstanding ingredients, technique and presentation."],
    ["Seguinos en @latascavla","Follow us @latascavla"],
    ["Seguinos en @santoriangostura","Follow us @santoriangostura"],
    ["Sabores patagónicos","Patagonian flavours"],
    ["Producto, sabor e identidad patagónica en una propuesta pensada para disfrutar Villa La Angostura desde la mesa.","Discover the flavours and character of Patagonia through La Tasca's cuisine."],
    ["Salón & paisaje","Dining room & scenery"],
    ["Madera, nieve y el espíritu de Villa La Angostura.","Wood, snow and the spirit of Villa La Angostura."],
    ["Producto, técnica, detalle y presentación.","Ingredients, technique, detail and presentation."],
    ["Reconocimiento","Recognition"],
    ["La experiencia también se comparte","Experiences worth sharing"],
    ["El reconocimiento de quienes nos visitan forma parte de la historia de La Tasca.","Guest appreciation is part of La Tasca's story."],
    ["Un reconocimiento que celebra las experiencias y opiniones compartidas por nuestros visitantes.","An award celebrating the experiences and reviews shared by our guests."],
    ["La Tasca y Santori comparten dirección.","La Tasca and Santori share the same address."],
    ["La Tasca está en planta baja","La Tasca is on the ground floor"],
    ["y","and"],["Santori, arriba en la cabaña.","Santori is upstairs in the cabin."],
    ["Consultanos por WhatsApp para tu reserva.","Message us on WhatsApp to make a reservation."],
    ["Montaña, nieve y gastronomía","Mountains, snow and great food"],
    ["Entre paisaje, producto y encuentros, La Tasca y Santori proponen una experiencia para disfrutar Villa La Angostura desde la mesa.","Enjoy the scenery, local ingredients and welcoming atmosphere of Villa La Angostura at La Tasca and Santori."],
    ["Elegí La Tasca o Santori y escribinos directamente para reservas, disponibilidad, pedidos y consultas.","Choose La Tasca or Santori and contact us directly for reservations, availability, orders and enquiries."],

    // Digital menu reader
    ["Villa La Angostura · Dos restaurantes · Un mismo lugar","Villa La Angostura · Two restaurants · One location"],
    ["Elegí tu experiencia.","Choose your dining experience."],
    ["Recorré nuestra carta como un libro: pasá las páginas con las flechas o deslizá el dedo. Dos espacios diferentes en el mismo edificio.","Browse our menus like a book: use the arrows or swipe to turn pages. Two distinct dining spaces in the same building."],
    ["¿Dónde vas a comer?","Where would you like to eat?"],
    ["La Tasca está abajo, en planta baja. Para encontrar Santori, subí a la cabaña. Ambas propuestas comparten dirección.","La Tasca is downstairs on the ground floor. To find Santori, head upstairs to the cabin. Both restaurants share the same address."],
    ["Libro abierto","Open book"],["Una página","Single page"],
    ["⛶ Pantalla completa","⛶ Full screen"],["✕ Salir de pantalla completa","✕ Exit full screen"],
    ["Abriendo la carta…","Opening menu…"],["← Anterior","← Previous"],["Siguiente →","Next →"],
    ["Preparando páginas…","Preparing pages…"],["Deslizá para pasar","Swipe to turn pages"],
    ["Deslizá para pasar de página","Swipe to turn pages"],
    ["Para leer la carta sin JavaScript:","To read the menu without JavaScript:"],
    ["Carta La Tasca","La Tasca menu"],["Carta Santori","Santori menu"],
    ["Consultar reserva ↗","Enquire about a reservation ↗"],
    ["Villa La Angostura · Gastronomía","Villa La Angostura · Dining"],
    ["Preparando carta…","Preparing menu…"],
    ["Abrir el PDF original ↗","Open original PDF ↗"],
    ["No pudimos mostrar la carta en este momento.","We couldn't display the menu right now."],

    // Shopping
    ["Villa La Angostura · Pedidos Take Away","Villa La Angostura · Takeaway orders"],
    ["Armá tu pedido.","Build your order."],
    ["Encontrá platos de los dos restaurantes con un solo buscador y agregalos a tu pedido.","Find dishes from both restaurants in one search and add them to your order."],
    ["Buscá","Search"],["juntos. Todos los pedidos se retiran en La Tasca.","together. All orders are collected at La Tasca."],
    ["Elegí tus platos","Choose your dishes"],
    ["La Tasca + Santori · Catálogo unificado","La Tasca + Santori · Combined menu"],
    ["Platos y precios sujetos a confirmación por WhatsApp. Sin cobros online.","Dishes, availability and prices are confirmed via WhatsApp. No online payments."],
    ["Buscá en ambas cartas. Cada plato indica su restaurante.","Search both menus. Each dish shows its restaurant."],
    ["Ver mi pedido (","View my order ("],
    ["Tu pedido","Your order"],["Un solo carrito · La Tasca + Santori","One cart · La Tasca + Santori"],
    ["La Tasca + Santori · Pedido único","La Tasca + Santori · One order"],
    ["Unidades seleccionadas","Selected items"],
    ["Completar pedido","Complete your order"],
    ["Tu nombre *","Your name *"],["Horario de retiro deseado","Preferred collection time"],
    ["Palitos y salsas: ¿para cuántas personas? *","Chopsticks and sauces: for how many people? *"],
    ["Indicá 0 si no necesitás palitos ni salsas.","Enter 0 if you don't need chopsticks or sauces."],
    ["Observaciones del pedido","Order notes"],
    ["ENVIAR PEDIDO A WHATSAPP","SEND ORDER VIA WHATSAPP"],
    ["Se abrirá WhatsApp con tu pedido preparado. Revisalo y tocá enviar. Retirá en La Tasca; el local confirma disponibilidad y precio. Avisá si tenés alergias.","WhatsApp will open with your order ready. Review it and tap Send. Collect at La Tasca; the restaurant will confirm availability and prices. Let us know about allergies."],
    ["Completar pedido ·","Complete order ·"],
    ["Todas las categorías","All categories"],
    ["Precio a confirmar","Price to be confirmed"],
    ["Plato a consultar con el restaurante","Ask the restaurant for details"],
    ["No encontramos platos con ese término en las dos cartas. Podés indicarnos tu consulta en observaciones.","No matching dishes were found on either menu. You can include your enquiry in the order notes."],
    ["Tu carrito está vacío. Agregá platos de La Tasca, Santori o ambos.","Your cart is empty. Add dishes from La Tasca, Santori or both."],
    ["Primero elegí al menos un plato.","Please select at least one dish."],
    ["Escribí tu nombre.","Please enter your name."],
    ["Indicá para cuántas personas querés palitos y salsas (0 si no necesitás).","Enter how many people need chopsticks and sauces (0 if none)."],
    ["Buscar en ambos restaurantes (ej.: acevichado)","Search both restaurants (e.g. acevichado)"],
    ["Ej.: 21:00 / A coordinar","e.g. 9:00 pm / To be arranged"],
    ["Nombre para el pedido","Name for your order"],
    ["Ej.: sin picante, indicaciones de preparación, alergias (confirmar con el local)","e.g. no spice, preparation notes, allergies (check with the restaurant)"],
    ["Buscar platos de La Tasca y Santori","Search La Tasca and Santori dishes"],
    ["Filtrar por categoría","Filter by category"],["Todos","All"],

    // Category names (ES original is used internally for filtering and WhatsApp)
    ["Entradas","Starters"],["Ensaladas","Salads"],
    ["Pescados y mariscos","Fish & seafood"],["Carnes","Meat"],
    ["Risottos","Risottos"],["Pastas","Pasta"],["Guarniciones","Side dishes"],["Infantil","Kids' menu"],
    ["Ceviches","Ceviches"],["Rolls · 10 piezas","Rolls · 10 pieces"],
    ["Combinados","Assorted sushi"],["Sashimis","Sashimi"],["Nigiris · 2 piezas","Nigiri · 2 pieces"],

    // Product names from the two actual shopping catalogues
    ["Sopa del día","Soup of the day"],["Langostinos con alioli","Prawns with aioli"],
    ["Langostinos al ajillo","Garlic prawns"],["Papas al horno","Roasted potatoes"],
    ["Chipirones con alioli","Baby squid with aioli"],["Tostón de trucha curada","Cured trout toast"],
    ["Provoleta al orégano","Grilled provolone with oregano"],["Provoleta La Tasca","La Tasca grilled provolone"],
    ["Rabas grilladas con alioli","Grilled squid rings with aioli"],
    ["Mix de mariscos con alioli","Mixed seafood with aioli"],["Tortilla de papa","Spanish-style potato omelette"],
    ["Ensalada patagónica","Patagonian salad"],["Ensalada César con pollo","Chicken Caesar salad"],
    ["Ensalada César con langostinos","Prawn Caesar salad"],["Ensalada La Tasca","La Tasca salad"],
    ["Filet de trucha","Trout fillet"],["Salmón rosado con aceite de coco","Pink salmon with coconut oil"],
    ["Arroz con mariscos","Seafood rice"],["Tapeo degustación para 1","Tapas tasting for one"],
    ["Tapeo degustación para 2","Tapas tasting for two"],["Lomo","Beef tenderloin"],
    ["Ojo de bife","Ribeye steak"],["Cordero La Tasca a 120°","Slow-cooked La Tasca lamb"],
    ["Risotto de hongos","Mushroom risotto"],["Risotto de lomo","Beef tenderloin risotto"],
    ["Risotto de trucha","Trout risotto"],["Risotto de langostinos","Prawn risotto"],
    ["Risotto de pollo","Chicken risotto"],["Risotto de vegetales","Vegetable risotto"],
    ["Risotto de frutos de mar","Seafood risotto"],["Sorrentinos de jamón y queso","Ham & cheese stuffed pasta"],
    ["Sorrentinos de verdura","Vegetable stuffed pasta"],["Sorrentinos de trucha","Trout stuffed pasta"],
    ["Sorrentinos de cordero","Lamb stuffed pasta"],["Sorrentinos de ciervo","Venison stuffed pasta"],
    ["Spaghetti","Spaghetti"],["Spaghetti con crema de verdeo y langostinos","Spaghetti with spring onion cream and prawns"],
    ["Tallarines con frutos de mar","Seafood tagliatelle"],["Ñoquis","Gnocchi"],
    ["Arroz blanco","White rice"],["Puré de papas","Mashed potatoes"],
    ["Papines","Baby potatoes"],["Vegetales grillados","Grilled vegetables"],
    ["Menú infantil de pollo con puré","Kids' chicken with mash"],
    ["Menú infantil de spaghetti fileto / rosa","Kids' spaghetti with tomato or pink sauce"],
    ["Ceviche clásico","Classic ceviche"],["Ceviche Nikkei","Nikkei ceviche"],
    ["Ceviche mixto","Mixed seafood ceviche"],
    ["Philadelphia","Philadelphia"],["Langostinos","Prawns"],["Furai de langostinos","Crispy prawn roll"],
    ["Furai de salmón","Crispy salmon roll"],["Veggie","Veggie"],
    ["Acevichado","Acevichado"],["Dos salmones","Double salmon"],
    ["Tropical","Tropical"],["Avocado","Avocado"],["Parma","Parma"],
    ["Combinado 30 piezas","30-piece sushi assortment"],
    ["Combinado premium 35 piezas","35-piece premium sushi assortment"],
    ["Combinado premium 45 piezas","45-piece premium sushi assortment"],
    ["Combinado 50 piezas","50-piece sushi assortment"],
    ["Sashimi de langostinos","Prawn sashimi"],["Sashimi de salmón","Salmon sashimi"],
    ["Sashimi de atún rojo","Bluefin tuna sashimi"],["Sashimi de pulpo español","Spanish octopus sashimi"],
    ["Nigiri veggie","Vegetarian nigiri"],["Nigiri parma","Parma nigiri"],
    ["Nigiri argento","Argento nigiri"],["Nigiri de langostino","Prawn nigiri"],
    ["Nigiri de salmón","Salmon nigiri"],["Nigiri gunkan","Gunkan nigiri"],
    ["Nigiri de atún rojo","Bluefin tuna nigiri"],["Nigiri de pulpo español","Spanish octopus nigiri"],

    // Product descriptions / customisation
    ["Consultar variedad","Ask about today's variety"],["Bravas o alioli","Spicy bravas sauce or aioli"],
    ["Cherry y aceitunas negras","Cherry tomatoes and black olives"],
    ["Trucha gravlax, verdes y semillas","Cured trout, mixed greens and seeds"],
    ["Rúcula, peras, queso azul y nueces","Rocket, pears, blue cheese and walnuts"],
    ["Consultar presentación","Ask about the selection"],["Desmenuzado, con papines","Pulled lamb with baby potatoes"],
    ["Salsa a confirmar","Choose your sauce"],["Consultar disponibilidad y guarnición","Check availability and side dish"],
    ["Consultar disponibilidad","Check availability"],["Lenguado y leche de tigre","Sole and tiger's milk"],
    ["Salmón, palta, salsa Nikkei","Salmon, avocado and Nikkei sauce"],
    ["Pulpo, langostinos y lenguado","Octopus, prawns and sole"],
    ["Salmón, queso Philadelphia y palta","Salmon, cream cheese and avocado"],
    ["Langostino, queso Philadelphia y palta","Prawn, cream cheese and avocado"],
    ["Palta, vegetales y emulsión de almendras","Avocado, vegetables and almond emulsion"],
    ["Langostino, palta y salsa acevichada","Prawn, avocado and ceviche-style sauce"],
    ["Tartar de salmón y salsa Nikkei","Salmon tartare and Nikkei sauce"],
    ["Langostino, mango y maracuyá","Prawn, mango and passion fruit"],
    ["Langostino, Philadelphia y palta","Prawn, cream cheese and avocado"],
    ["Langostino, pesca blanca, vieiras y parmesano","Prawn, white fish, scallops and Parmesan"],
    ["A elección del sushiman","Chef's selection"],
    ["Rolls, sashimis y nigiris","Rolls, sashimi and nigiri"],
    ["Rolls, nigiris, tiraditos y sashimis","Rolls, nigiri, tiradito and sashimi"],
    ["Lenguado y parmesano","Sole and Parmesan"],
    ["Lomo y manteca oriental","Beef tenderloin and oriental butter"],
    ["Salmón y huevo de codorniz","Salmon and quail egg"]
  ];

  const dictionary = new Map(PAIRS.map(([es,en])=>[normalize(es),en]));
  function normalize(value){return String(value).replace(/\u00a0/g," ").replace(/\s+/g," ").trim()}
  function translate(value) {
    const text=normalize(value);
    if (dictionary.has(text)) return dictionary.get(text);
    let m=text.match(/^(\d+) resultados? en ambas cartas\.$/);
    if(m)return m[1]+" result"+(Number(m[1])===1?"":"s")+" across both menus.";
    m=text.match(/^Página (\d+) de (\d+)$/);
    if(m)return "Page "+m[1]+" of "+m[2];
    m=text.match(/^Páginas (\d+)[–-](\d+) de (\d+)$/);
    if(m)return "Pages "+m[1]+"–"+m[2]+" of "+m[3];
    m=text.match(/^Portada · Página 1 de (\d+)$/);
    if(m)return "Cover · Page 1 of "+m[1];
    m=text.match(/^Abriendo la carta de (.+)…$/);
    if(m)return "Opening "+m[1]+" menu…";
    m=text.match(/^Preparando (las páginas|la página)…$/);
    if(m)return "Preparing "+(m[1]==="las páginas"?"pages":"page")+"…";
    m=text.match(/^(.+) · (Planta baja · PB|Arriba · En la cabaña)$/);
    if(m)return m[1]+" · "+(dictionary.get(normalize(m[2]))||m[2]);
    return null;
  }
  const originals=new WeakMap();
  const attrOriginals=new WeakMap();
  const exclusions="script,style,noscript,[data-no-translate]";
  let locale="es";
  const storageKey="tasca_santori_lang";

  function updateTextNode(node){
    const parent=node.parentElement;
    if(!parent||parent.closest(exclusions))return;
    let state=originals.get(node);
    if(!state||node.nodeValue!==state.last){
      state={raw:node.nodeValue,last:node.nodeValue};
      originals.set(node,state);
    }
    const translated=translate(state.raw);
    if(!translated)return;
    const raw=state.raw;
    const left=(raw.match(/^\s*/)||[""])[0],right=(raw.match(/\s*$/)||[""])[0];
    const next=locale==="en"?(left+translated+right):raw;
    if(node.nodeValue!==next)node.nodeValue=next;
    state.last=next;
  }
  function updateAttributes(element){
    if(element.matches(exclusions)||element.closest(exclusions))return;
    let originalsForElement=attrOriginals.get(element);
    if(!originalsForElement){originalsForElement={};attrOriginals.set(element,originalsForElement)}
    for(const name of ["placeholder","aria-label","title"]){
      if(!element.hasAttribute(name))continue;
      const current=element.getAttribute(name);
      const currentState=originalsForElement[name];
      if(!currentState||current!==currentState.last)originalsForElement[name]={raw:current,last:current};
      const item=originalsForElement[name];
      const next=locale==="en"?(translate(item.raw)||item.raw):item.raw;
      if(current!==next)element.setAttribute(name,next);
      item.last=next;
    }
  }
  function applyTranslations(){
    document.documentElement.lang=locale;
    document.querySelectorAll("[data-lang-button]").forEach(btn=>{
      const selected=String(btn.dataset.langButton===locale);
      if(btn.getAttribute("aria-pressed")!==selected)btn.setAttribute("aria-pressed",selected);
      const title=btn.dataset.langButton==="es"?"Español":"English";
      if(btn.getAttribute("title")!==title)btn.setAttribute("title",title);
    });
    const root=document.body;
    if(!root)return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let node;
    while((node=walker.nextNode()))updateTextNode(node);
    root.querySelectorAll("[placeholder],[aria-label],[title]").forEach(updateAttributes);
    const originalTitle="La Tasca & Santori | Villa La Angostura";
    if(locale==="en"&&document.title.includes("Armá tu pedido"))document.title="Build your order | La Tasca & Santori";
    if(locale==="en"&&document.title.includes("Nuestras cartas"))document.title="Our menus | La Tasca & Santori";
    if(locale==="es"&&document.title==="Build your order | La Tasca & Santori")document.title="Armá tu pedido | La Tasca & Santori";
    if(locale==="es"&&document.title==="Our menus | La Tasca & Santori")document.title="Nuestras cartas | La Tasca & Santori";
  }
  function updateLocale(next){
    if(!["es","en"].includes(next))return;
    locale=next;
    try{localStorage.setItem(storageKey,next)}catch(_){}
    const url=new URL(location.href);
    if(next==="en")url.searchParams.set("lang","en");
    else url.searchParams.delete("lang");
    history.replaceState(history.state,"",url.pathname+url.search+url.hash);
    applyTranslations();
    window.dispatchEvent(new CustomEvent("site:languagechange",{detail:{lang:next}}));
  }
  function insertSwitcher(){
    const style=document.createElement("style");
    style.textContent=[
      ".site-language{display:inline-flex;gap:3px;align-items:center;justify-content:center;padding:4px;border:1px solid rgba(222,190,132,.65);border-radius:99px;background:rgba(14,14,13,.89);box-shadow:0 8px 20px #0007;isolation:isolate;z-index:30}",
      ".site-language button{cursor:pointer;min-width:44px;min-height:34px;padding:7px 10px;border:0;border-radius:99px;background:transparent;color:#edd6b1;font-size:12px;font-weight:700;letter-spacing:1px;font-family:Montserrat,Arial,sans-serif}",
      ".site-language button[aria-pressed=true]{background:#e4c58e;color:#18130c}",
      ".site-language button:focus-visible{outline:3px solid #fff;outline-offset:3px}",
      ".hero .site-language{position:absolute;top:20px;right:22px}",
      ".topbar .site-language{flex:none}",
      "@media(max-width:660px){.topbar{flex-wrap:wrap}.topbar .site-language{margin-left:auto}.topbar .back{font-size:10px}.hero .site-language{top:13px;right:14px}.site-language button{min-width:41px;min-height:32px}}"
    ].join("\n");
    document.head.appendChild(style);
    const div=document.createElement("div");
    div.className="site-language";
    div.setAttribute("role","group");
    div.setAttribute("aria-label","Idioma / Language");
    for(const option of [{value:"es",label:"ES"},{value:"en",label:"EN"}]){
      const btn=document.createElement("button");
      btn.type="button";
      btn.textContent=option.label;
      btn.dataset.langButton=option.value;
      btn.setAttribute("aria-pressed",String(option.value===locale));
      btn.setAttribute("aria-label",option.value==="es"?"Español":"English");
      btn.addEventListener("click",()=>updateLocale(option.value));
      div.appendChild(btn);
    }
    const toolbar=document.querySelector(".topbar");
    if(toolbar){const back=toolbar.querySelector(".back");back?toolbar.insertBefore(div,back):toolbar.appendChild(div)}
    else{const hero=document.querySelector(".hero");if(hero)hero.appendChild(div);else document.body.prepend(div)}
  }
  function applySavedLocale(){
    const param=new URLSearchParams(location.search).get("lang");
    if(param==="en"||param==="es")return param;
    try{const saved=localStorage.getItem(storageKey);if(saved==="en"||saved==="es")return saved}catch(_){}
    return "es";
  }
  locale=applySavedLocale();
  try{localStorage.setItem(storageKey,locale)}catch(_){}
  window.siteI18n={
    language:()=>locale,
    toEnglish:value=>translate(value)||value,
    translateText:value=>locale==="en"?(translate(value)||value):value,
    refresh:applyTranslations
  };
  function init(){
    insertSwitcher();
    applyTranslations();
    const observer=new MutationObserver(records=>{
      if(records.every(r=>r.target.closest&&r.target.closest("[data-no-translate]")))return;
      if(observer.pending)return;
      observer.pending=true;
      requestAnimationFrame(()=>{observer.pending=false;applyTranslations()});
    });
    observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:["placeholder","aria-label","title"]});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});
  else init();
})();