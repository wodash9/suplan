# Suplan — requisitos oficiales y alternativa de proveedor externo para daily packs

Fecha: 2026-05-04

## Contexto

Ventura pide escalar la investigación jurídica a fuentes oficiales y, si el modelo in-house resulta demasiado complejo, buscar proveedores que cubran la necesidad de Suplan: packaging y agrupación personalizada de complementos alimenticios en sobres diarios mañana/tarde.

Modelo analizado:

1. Suplan compra cápsulas/comprimidos/tabletas B2B ya fabricados.
2. Abre envases de origen.
3. Agrupa por rutina/cliente en sobres AM/PM.
4. Termosella, etiqueta, monta caja y vende online bajo marca Suplan.

## Delegaciones ejecutadas

- `atticus-suplan-legal` / subagente jurídico-compliance: validación con fuentes oficiales de AESAN, BOE y normativa UE.
- Subagente procurement/co-packing: búsqueda de proveedores EU/España capaces de fabricación, acondicionamiento, co-packing, kitting, daily packs o fulfillment.

Nota operativa: el primer intento del subagente jurídico hizo timeout por browsing lento; se relanzó una tarea acotada y se cerró la verificación con fuentes oficiales localizadas.

## Veredicto

El modelo in-house **es jurídicamente complejo**. No debe tratarse como simple ecommerce.

Al abrir envases, reagrupar cápsulas/comprimidos, crear sobres AM/PM, etiquetar y vender bajo marca propia, Suplan probablemente pasa a actuar como operador alimentario responsable de un nuevo acondicionamiento/presentación del producto.

**Decisión recomendada:** mantener el prototipo digital y la validación comercial, pero antes de vender cajas reales hay que:

1. Consultar por escrito a la autoridad sanitaria autonómica/AESAN.
2. Pedir RFQ a co-packers/daily-pack providers para evitar operar nosotros la parte regulada en V1.
3. Lanzar como máximo con 3-5 packs fijos o semi-personalizados, no personalización infinita.

## Fuentes oficiales revisadas

### España / AESAN / BOE

- AESAN — Registro General Sanitario de Empresas Alimentarias y Alimentos: https://www.aesan.gob.es/AECOSAN/web/seguridad_alimentaria/seccion/registro.htm
- AESAN — Guía RGSEAA: https://www.aesan.gob.es/AECOSAN/docs/documentos/seguridad_alimentaria/registro/Guia_RGSEAA.pdf
- BOE — Real Decreto 191/2011, RGSEAA: https://www.boe.es/buscar/act.php?id=BOE-A-2011-4293
- AESAN — Guía de comunicación de puesta en el mercado de complementos alimenticios: https://www.aesan.gob.es/AECOSAN/docs/documentos/seguridad_alimentaria/registro/GUIA_COMUNICACION_COMPLEMENTOS_ALIMENTICIOS.pdf
- BOE — Real Decreto 1487/2009, complementos alimenticios: https://www.boe.es/buscar/act.php?id=BOE-A-2009-16109
- AESAN — buscador de complementos comunicados: https://www.aesan.gob.es/AECOSAN/web/seguridad_alimentaria/subdetalle/buscador_complementos.htm

### Unión Europea

- Reglamento (CE) 178/2002 — legislación alimentaria general, responsabilidad, trazabilidad y retirada: https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32002R0178
- Reglamento (CE) 852/2004 — higiene de los productos alimenticios: https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32004R0852
- Reglamento (UE) 1169/2011 — información alimentaria al consumidor: https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32011R1169
- Reglamento (CE) 1924/2006 — declaraciones nutricionales y de propiedades saludables: https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32006R1924
- Reglamento (CE) 1935/2004 — materiales y objetos en contacto con alimentos: https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32004R1935
- Reglamento (CE) 2023/2006 — buenas prácticas de fabricación de materiales en contacto con alimentos: https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32006R2023
- Reglamento (UE) 10/2011 — materiales plásticos en contacto con alimentos: https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32011R0010

## Matriz jurídica de requisitos probables

### 1. Registro como empresa/establecimiento alimentario

Base oficial:

- RD 191/2011, art. 2: se inscriben establecimientos o empresas alimentarias con sede en España cuya actividad tenga por objeto alimentos o materiales en contacto con alimentos y cuya actividad sea producción, transformación, elaboración/envasado, almacenamiento/distribución/transporte o importación.
- AESAN Guía RGSEAA: la obligación de registro deriva del Reglamento 852/2004; los operadores deben comunicar actividad y domicilio a la autoridad competente.

Implicación para Suplan:

- Ensobrar cápsulas/comprimidos no parece mera venta online.
- Puede encajar en envasado/reacondicionamiento, almacenamiento y distribución.
- Si Suplan es responsable de puesta en mercado de complementos alimenticios, la Guía RGSEAA indica inscripción en clave 26 con actividad específica.

Duda crítica:

> ¿La actividad de comprar cápsulas/comprimidos de complementos alimenticios ya fabricados, abrir envases B2B, reagrupar en sobres AM/PM, termosellar, etiquetar y vender online bajo marca Suplan requiere RGSEAA estatal o registro autonómico? ¿Bajo qué clave/categoría: envasado, reacondicionamiento, almacenamiento, distribución o comercio online?

### 2. Comunicación/notificación de complementos alimenticios

Base oficial:

- RD 1487/2009, art. 9: el responsable de comercialización en España debe notificar la puesta en mercado nacional enviando un ejemplar de la etiqueta con carácter previo o simultáneo a la primera puesta en mercado.
- Guía AESAN: la comunicación permite iniciar comercialización desde el día de presentación, sin perjuicio de control e inspección; no excluye la plena responsabilidad del operador.
- Guía AESAN: el operador responsable con domicilio social en España debe estar inscrito en RGSEAA bajo clave 26.

Implicación para Suplan:

- Si Suplan vende bajo marca propia, probablemente debe comunicar los productos/presentaciones.
- La personalización total abre el peor caso: cada composición o combinación podría ser tratada como producto/presentación distinta.
- La Guía AESAN permite agrupar sabores/tamaños de un mismo producto/composición, pero trata formas galénicas diferentes como expedientes distintos. No resuelve directamente combinaciones cliente a cliente.

Duda crítica:

> ¿Un sobre diario AM/PM que combina varias cápsulas/comprimidos de distintos complementos se considera un nuevo complemento alimenticio, una presentación agrupada, un pack multiproducto o una mera agrupación logística? Si cada cliente tiene combinación distinta, ¿cada combinación requiere comunicación/notificación propia?

### 3. Higiene alimentaria, APPCC/HACCP y local

Base oficial:

- RD 1487/2009, art. 4: las industrias elaboradoras y envasadoras de complementos alimenticios deben cumplir el Reglamento 852/2004.
- Reglamento 852/2004: higiene de productos alimenticios y sistemas basados en principios APPCC para operadores alimentarios.

Implicación para Suplan:

- Necesita zona/local apto para manipulación/envasado alimentario.
- Procedimientos documentados: limpieza, control de plagas, formación, control de errores, prevención de contaminación cruzada, gestión de producto no conforme.
- Si hay local físico, además hay que validar trámite municipal: licencia, declaración responsable o comunicación previa de actividad/apertura.

Duda crítica:

> ¿Qué nivel de APPCC/documentación se exige para fraccionamiento manual o semiautomático de complementos alimenticios sólidos en sobres termosellados?

### 4. Etiquetado obligatorio físico y online

Base oficial:

- Reglamento 1169/2011: información alimentaria obligatoria al consumidor.
- RD 1487/2009, arts. 5 y 6: denominación “complemento alimenticio”, dosis recomendada, advertencias y declaración de nutrientes/sustancias.
- Guía AESAN: etiqueta en español, lote, fecha de duración mínima, información visible/legible, y comunicación de modificaciones de etiquetado/composición.

Implicación para Suplan:

- La caja debe incluir información completa.
- Hay que decidir qué debe ir en cada sobre AM/PM y qué puede ir en caja, leaflet o soporte acompañante.
- En venta online, la información alimentaria relevante debe estar disponible antes de compra.

Duda crítica:

> En sobres AM/PM pequeños de daily pack, ¿qué información obligatoria debe imprimirse en cada sobre y cuál puede figurar en la caja exterior o folleto? ¿Cómo debe presentarse la información precontractual cuando la combinación se personaliza?

### 5. Claims, recomendaciones y marketing

Base oficial:

- RD 1487/2009, art. 5: no atribuir a los complementos propiedades de prevenir, tratar o curar enfermedad humana.
- Reglamento 1924/2006: solo claims nutricionales/saludables autorizados y bajo condiciones.
- Reglamento 1169/2011: información alimentaria no engañosa.

Implicación para Suplan:

- Prohibido vender como tratamiento, diagnóstico o sustituto médico.
- El configurador no debe prometer curar cansancio, ansiedad, sueño, hormonas, déficit, etc.
- Usar claims conservadores y autorizados; ejemplo condicionado: “el magnesio contribuye a disminuir el cansancio y la fatiga”, si el producto cumple condiciones.

Duda crítica:

> ¿Las recomendaciones personalizadas AM/PM pueden presentarse como bienestar general sin considerarse asesoramiento sanitario ni claim no autorizado?

### 6. Trazabilidad, lotes, retirada y estabilidad tras reenvasado

Base oficial:

- Reglamento 178/2002: trazabilidad y retirada de alimentos inseguros.
- Reglamento 1169/2011 y normativa de loteado: lote y fecha de duración mínima.
- Reglamento 852/2004: higiene y autocontrol.

Implicación para Suplan:

- Trazabilidad mínima: proveedor → lote origen → lote interno Suplan → sobre AM/PM → caja → cliente.
- Si un sobre contiene varios suplementos, debe poder reconstruirse cada lote dentro de cada sobre/caja.
- No copiar automáticamente la caducidad original si el nuevo envase altera estabilidad frente a humedad, oxígeno, luz u olor. Como mínimo usar la fecha más corta y pedir criterio técnico/regulatorio.

Duda crítica:

> ¿Debe Suplan justificar vida útil/estabilidad del nuevo sobre termosellado? ¿Basta usar la fecha más corta de los lotes originales o se exige validación específica?

### 7. Materiales en contacto alimentario

Base oficial:

- Reglamento 1935/2004: materiales en contacto con alimentos.
- Reglamento 2023/2006: buenas prácticas de fabricación de materiales en contacto.
- Reglamento 10/2011: plásticos en contacto con alimentos, si aplica.

Implicación para Suplan:

- Sobres/films/tintas/adhesivos deben tener declaración de conformidad alimentaria.
- No comprar sobres genéricos sin ficha técnica, lote y DoC.

Duda crítica:

> ¿Qué documentación exacta debe conservar Suplan para sobres termosellados usados con cápsulas/comprimidos secos?

## Conclusión jurídica

**Complejidad: alta.** Es viable, pero no como primer movimiento sin asesoría/autoridad.

Bloqueadores antes de venta física:

- Respuesta sanitaria sobre RGSEAA vs registro autonómico.
- Respuesta sobre comunicación/notificación de packs personalizados.
- APPCC/HACCP y local apto.
- Etiqueta revisada.
- Sobres con DoC alimentaria.
- Permiso contractual de proveedor para reenvasado.
- Trazabilidad multilote y plan de retirada.
- Criterio de estabilidad/caducidad tras reenvasado.

## Alternativas de proveedor si in-house es demasiado complejo

### Ruta A — MVP semi-personalizado con co-packer/daily pack

Recomendación principal para V1 si queremos vender sin montar una mini-operación alimentaria propia.

Formato RFQ:

- 3-5 recetas fijas: Energía, Sueño, Focus, Deporte, Esencial.
- Caja 14 o 30 días.
- 1 sobre AM + 1 sobre PM por día.
- Cada sobre contiene 2-5 cápsulas/comprimidos.
- Volúmenes: 250 / 500 / 1.000 / 5.000 cajas por SKU.
- Impresión o etiqueta AM/PM, día, lote, caducidad y QR.
- Trazabilidad por lote y documentación alimentaria.

### Ruta B — MVP sin tocar envase primario

La opción menos regulatoriamente agresiva:

- Comprar/fabricar productos en blísteres/unidades primarias selladas.
- Un 3PL/kitter monta cajas personalizadas sin abrir los envases primarios.
- Reduce riesgo de reenvasado, contaminación, estabilidad y materiales en contacto.
- Menos sexy que sobres diarios, pero más viable para primera preventa/beta.

### Ruta C — V2 personalizada real por cliente

- Cada pedido generado desde CSV/API.
- 30 AM + 30 PM sachets por caja.
- Combinación variable por cliente.
- Requiere partner con capacidad industrial, trazabilidad multilote, QA robusto e integración e-commerce/fulfillment.

No recomiendo empezar aquí salvo que un proveedor confirme explícitamente capacidad y costes.

## Shortlist de proveedores priorizados

### 1. Doypacked

- URL: https://doypacked.eu/es/servicio-de-co-packing-para-suplementos/
- País: Bélgica.
- Qué cubre: co-packing de alimentos secos y suplementos; menciona pastillas, píldoras y cápsulas; llenado, sellado, etiquetado, conteo/peso por envase.
- MOQ público: desde 10 unidades según página revisada por subagente.
- Encaje: **V1/V1.5 muy alto** para validar baja tirada.
- Confirmar: si pueden mezclar varias cápsulas/comprimidos en el mismo sobre diario AM/PM y trabajar con producto de terceros.

### 2. Lufapak

- URL: https://www.lufapak.de/en/contract-manufacturing-labor-manufacturer-packing/dietary-supplements/
- País: Alemania.
- Qué cubre: contract packing, repacking, labeling, kitting, set building, fulfillment, e-commerce; suplementos en cápsulas/tabletas/sticks/dragées; batch/MHD tracking.
- MOQ público: no público.
- Encaje: **V1/V2 alto** si aceptan kitting por cliente o sobres AM/PM.
- Confirmar: per-customer kitting, sobres diarios, integración CSV/API, fulfillment España/EU.

### 3. Manipulados Viluz

- URL: https://www.manipuladosviluz.es/envasado-suplementos-alimenticios/
- País: España.
- Qué cubre: envasado a terceros de complementos; sachet, flow pack, doypack, stick pack, tarros; manipulado, etiquetado y packs promocionales.
- MOQ público: no público.
- Encaje: **V1 España** para validar packs AM/PM o kits.
- Confirmar: sobres monodosis con múltiples cápsulas/comprimidos y trazabilidad por lote.

### 4. SpainBOX

- URL: https://spainbox.com/suministro-de-complementos-alimenticios/
- País: España.
- Qué cubre: fulfillment, pick & pack, kitting, cajas de suscripción, etiquetado, distribución; también suministro/private label de suplementos fabricados en UE.
- MOQ público: menciona mínimos para cápsulas/comprimidos, sin cifra revisada.
- Encaje: **V1 comercial/logístico alto** si usamos unidades primarias selladas o white label.
- Confirmar: si pueden o no abrir bulk y actuar como envasador alimentario; si no, usarlos para Ruta B.

### 5. Macropack

- URL: https://www.macropack.nl/voedingssupplementen-afvullen/
- País: Países Bajos.
- Qué cubre: copacker con sachets, stickpacks, doypacks, pouches; puede empaquetar polvos, tabletas, líquidos, granulados y cápsulas.
- MOQ público: no público.
- Encaje: **V1/V2 técnico**.
- Confirmar: mezcla de cápsulas/tabletas en small sachets y pedidos variables por cliente.

### 6. Mondial Pack

- URL: https://mondialpack.nl/diensten/afvullen/
- País: Países Bajos.
- Qué cubre: contract manufacturer/packager; cápsulas, tabletas, softgels, polvos; potes, botellas, pouches/sachets; blíster; private label; IFS Food; trazabilidad.
- MOQ público: no exacto; indica pequeñas y grandes series.
- Encaje: **V1 para packs semi-personalizados**.
- Confirmar: AM/PM fijos, sobres con varias unidades sólidas y caja 14/30 días.

### 7. Pharmbiopol

- URL: https://www.pharmbiopol.com/en/services/co-packaging/
- País: Polonia.
- Qué cubre: fabricación y co-packaging de suplementos; cápsulas, tabletas, polvos, líquidos, gummies, sachets, blísteres; GMP/HACCP; white/private label.
- MOQ público: no público.
- Encaje: **V1 CDMO europeo / V2 escala**.
- Confirmar: daily sachets AM/PM con mezcla de cápsulas/tabletas.

### 8. Natucap

- URL: https://www.natucapsa.com/
- País: España.
- Qué cubre: cápsulas, cápsulas vegetarianas, polvos, private label, packaging en botes, blísteres, cartones y pouches.
- MOQ público: aprox. 300-1.000 unidades por SKU según revisión del subagente.
- Encaje: **producto base V1**, no necesariamente daily packs.
- Uso: fabricar o suministrar fórmulas base y luego combinar con co-packer/kitting.

### 9. Herdemati

- URL: https://herdemati.com/
- País: España.
- Qué cubre: fabricación y acondicionamiento de complementos; cápsulas, comprimidos, sobres, jarabes, viales; blíster y botes.
- MOQ público: no público.
- Encaje: **V1 producto base / packaging estándar**.
- Confirmar: caja AM/PM o blíster calendario.

### 10. Phytextra

- URL: https://www.phytextra.es/
- País: España.
- Qué cubre: desarrollo de complementos alimenticios en cápsulas, comprimidos, polvos y líquidos; formulación, fabricación, packaging y envío.
- MOQ público: no público.
- Encaje: **V1 CDMO español**.
- Confirmar: envasado en sobres/caja diaria o combinación con kitting externo.

### 11. Triconatura

- URL: https://triconatura.es/fabricacion-de-complementos-alimenticios/
- País: España.
- Qué cubre: comprimidos, cápsulas, polvo/sobres; envasado en pildolero, graneles, blíster y sobres.
- MOQ público: no público.
- Encaje: **V1 fabricación y packaging estándar**.
- Confirmar: combinaciones fijas AM/PM y co-packaging de productos de terceros.

### 12. Health Packaging

- URL: https://www.healthpackaging.nl/verpakken/
- País: Países Bajos.
- Qué cubre: producción y packaging de suplementos; blíster, sellado, llenado de botes, etiquetado; cápsulas/tabletas/polvos.
- MOQ público: desde 500 unidades según revisión del subagente.
- Encaje: **V1 bajo MOQ** si aceptan blíster/calendario; daily sachets no explícito.

## RFQ recomendado para enviar

Asunto:

> RFQ daily supplement packs AM/PM — Spain/EU launch

Mensaje:

> We are launching Suplan, a Spain/EU supplement routine platform. We are looking for an EU partner able to manufacture, pack, co-pack or kit daily supplement boxes.
>
> Initial product: 14-day and 30-day boxes. Each day has 1 AM sachet and 1 PM sachet. Each sachet contains 2-5 finished capsules/tablets. Initial launch may use 3-5 fixed recipes; later we want per-customer personalization via CSV/API.
>
> Please quote or confirm feasibility for:
>
> 1. Fixed/semi-personalized recipes: 250 / 500 / 1,000 / 5,000 boxes per SKU.
> 2. V2 personalized orders generated by CSV/API: 30 AM + 30 PM sachets per customer box.
>
> Questions:
> - Can you mix several finished capsules/tablets in one small food-grade sachet?
> - Can you print or label AM/PM, day number, lot, best-before date and QR?
> - Can you work with products manufactured by third parties, or only your own formulas?
> - Are you registered/certified for food supplement packing/co-packing? Please specify RGSEAA/equivalent, HACCP, GMP, IFS/BRC if applicable.
> - Can you provide lot-level traceability from ingredient/product lot to sachet/box/customer order?
> - Who is responsible for label/claims/product notification in Spain?
> - What are MOQ, setup cost, unit cost, lead time and payment terms?
> - Can you handle fulfillment D2C to Spain/EU?

## Decisión operativa

Prioridad de contacto:

1. Doypacked.
2. Lufapak.
3. Manipulados Viluz.
4. SpainBOX.
5. Macropack.
6. Mondial Pack.
7. Pharmbiopol.

Plan V1 recomendado:

- No comprar todavía equipamiento ni sobres para venta real.
- Mandar consulta sanitaria oficial esta semana.
- Mandar RFQs a los 7 proveedores anteriores.
- Si 2+ proveedores confirman daily packs con MOQ razonable, priorizar outsourcing.
- Si ninguno confirma daily packs, validar Ruta B: caja personalizada con unidades primarias intactas.
- Mantener la web como demo/waitlist hasta resolver requisitos.
