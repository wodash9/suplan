# Suplan — proveedores con evidencia de sobres personalizados con varios suplementos

Fecha: 2026-05-04

## Pregunta

Ventura pide buscar si existe algún proveedor específico que permita personalizar sobres/pouches con diferentes productos dentro del mismo sobre: varias cápsulas, comprimidos o pastillas por toma AM/PM, idealmente por cliente.

## Veredicto

Sí existe al menos un proveedor con evidencia pública muy explícita: **OK Capsule**.

En Europa/España, no he encontrado todavía una página pública que diga de forma tan clara “personalized daily pouches with multiple supplements per pouch via API/white-label”. Sí hay co-packers que dicen manejar suplementos, cápsulas/tabletas, sachets, pouching, kitting o multi-dose packaging, pero con ellos hay que confirmar por RFQ.

## Evidencia fuerte — proveedor específico

### 1. OK Capsule — proveedor B2B/API para packs personalizados

- URL principal: https://okcapsule.com/
- Soluciones: https://okcapsule.com/solutions
- Pricing/calculadora: https://okcapsule.com/pricing/calculator
- API docs: https://docs.okcapsule.app/docs/
- País/mercado: Estados Unidos; confirmar si puede servir España/UE o si solo sirve como benchmark tecnológico.

Evidencia pública encontrada:

- Página principal: “on-demand platform lets doctors, telehealth companies, and startups deliver professional-grade supplement packs without minimum orders, deposits, or inventory headaches”.
- Página principal/API: ejemplo `POST /v2/packs` con varios suplementos dentro de un pack:
  - `vit-d3-5000`, qty 1
  - `omega-3-1000`, qty 2
- Página Solutions: “drop-shipping on-demand supplement packs”.
- Página Solutions: “Personalized Packs for 1:1 customization”.
- Página Solutions: “Craft on-demand packs tailored to each individual customer's lifestyles, goals or health profiles”.
- Página Solutions: “Both products include white-label packaging, tracking & shipping, compliance documentation, customer support”.
- Pricing: permite seleccionar suplementos para el pack y elegir `30 pack order 1 month AM` o `60 pack order 1 month AM/PM`.
- API docs: “OK Capsule manufactures and ships personalized supplement packs. Each pack contains individual pouches with supplements tailored to your customer's needs.”
- API docs: “Manufacturing - Packaging supplements into daily pouches; Labeling - Custom branding with your product line; Fulfillment - Shipping directly to your customers.”
- API docs: define `Pouch` como “An individual daily packet of supplements”.

Encaje Suplan:

- **Encaje funcional: altísimo.** Es exactamente el modelo Suplan: packs personalizados, pouches diarios, AM/PM, suplementos múltiples, white-label, API/Shopify, fulfillment.
- **Encaje geográfico/regulatorio: pendiente.** Si solo opera en EEUU, no sirve directamente para vender España/UE, pero sirve como benchmark y posible partner si acepta expansión/importación.
- **Riesgo:** claims, etiqueta, notificación de complementos, fiscalidad/importación y cumplimiento UE/España.

Decisión:

- Contactar primero. Es el proveedor más parecido a Suplan encontrado hasta ahora.

Preguntas RFQ específicas:

1. Do you support Spain/EU brands and shipping to Spain/EU consumers?
2. Can each daily pouch contain multiple different capsules/tablets from different supplement SKUs?
3. Can you support 60 pouches/month: 30 AM + 30 PM?
4. Can pouches and box be white-labeled under Suplan?
5. Can Suplan define pouch contents via API/CSV per customer?
6. Can you provide EU-compliant labels, ingredient specs, CoA, lot tracking and allergen documentation?
7. Who is the responsible food business operator for EU sales?
8. Can you support Spanish labeling and EU supplement claims restrictions?

## Evidencia media/fuerte — multi-dose/vitamin pouch, pero US/pharma-ish

### 2. Safecor Health — contract packaging con multi-dose sachets y vitaminas/suplementos elegibles

- URL: https://www.safecorhealth.com/contract-packaging/
- País/mercado: Estados Unidos.

Evidencia pública encontrada:

- “Pharmaceutical Contract Packaging Built for direct-to-consumer wellness, telehealth, lifestyle pharma, and consumer medication brands.”
- “From blister packs to pouches and custom-branded formats.”
- “Oral Solids: Unit-dose; Single-dose and multi-dose sachets.”
- “Vitamin & Supplement Packaging: Unit-dose and multi-dose packaging for eligible vitamins and supplements.”
- “Custom branding options.”

Encaje Suplan:

- **Encaje técnico: alto** para multi-dose sachets con oral solids.
- **Encaje comercial:** puede servir si acepta suplementos D2C/consumer wellness y no solo medicación/pharma.
- **Encaje España/UE:** probablemente bajo/directo, porque parece US-centric.

Decisión:

- Contactar como benchmark o proveedor US. No priorizar para V1 España salvo que confirme EU support.

## Candidatos EU/España con capacidad parcial — RFQ obligatorio

Estos no dicen públicamente de forma inequívoca “personalized pouches with multiple supplements per pouch by customer”, pero sí tienen señales suficientes para preguntar.

### 3. Doypacked — Bélgica

- URL: https://doypacked.eu/es/servicio-de-co-packing-para-suplementos/

Evidencia pública:

- Co-packing de suplementos.
- Manejan alimentos secos como suplementos “tanto en polvo como en pastillas”.
- Gestionan “píldoras y cápsulas”.
- “Pedidos mínimos bajos: comience con solo 10 unidades”.
- “Conteo preciso para pastillas”.
- Llenado, sellado, packaging y branding personalizado si el cliente entrega envase impreso.

Encaje Suplan:

- **Muy buen candidato EU para RFQ.**
- Falta confirmar si pueden meter diferentes cápsulas/comprimidos en un mismo sobre y hacerlo AM/PM por cliente.

Pregunta clave:

> Can you fill one small daily sachet with several different finished capsules/tablets, e.g. magnesium + vitamin D + multivitamin in the same AM pouch, and produce variable AM/PM pouches per customer from CSV/API?

### 4. Lufapak — Alemania

- URL: https://www.lufapak.de/en/contract-manufacturing-labor-manufacturer-packing/dietary-supplements/

Evidencia pública:

- Contract packing/repacking/labeling/kitting/fulfillment.
- Suplementos en cápsulas, coated tablets, tablets, drops, shakes, sticks, dragées.
- “Examples of co-packing and contract work”: set-building, ecommerce, private/white label, pack products together in a nice package.
- Batch/MHD tracking aparece en su propuesta logística.

Encaje Suplan:

- **Buen candidato para kitting/fulfillment EU**, especialmente si se usa ruta de cajas con unidades primarias intactas.
- Falta confirmar si hacen daily pouches con varias cápsulas por pouch.

### 5. Manipulados Viluz — España

- URL: https://www.manipuladosviluz.es/envasado-suplementos-alimenticios/

Evidencia pública:

- Envasado a terceros de complementos/suplementos alimenticios y dietéticos.
- Trabajan formatos sólidos, semisólidos, granulados y polvo; “pastillas o cápsulas”.
- Formatos: sachet, flow pack, doypack, stick pack, botes.
- Afirman flexibilidad y personalización del producto.

Encaje Suplan:

- **Candidato español prioritario para RFQ.**
- Falta confirmar si un sachet puede incluir varias cápsulas/comprimidos diferentes y si pueden hacerlo por rutina/cliente.

### 6. Sonic Packaging Industries — EEUU

- URL: https://www.sonicpackaging.com/

Evidencia pública:

- Contract packaging.
- Formatos: packets, pouches, stickpacks, unit dose devices.
- Productos: tablets & capsules.
- Mercados: supplement, nutrition, pharmaceutical, consumer packaged goods.

Encaje Suplan:

- Técnico medio/alto para packaging de cápsulas/tabletas en pouches/packets.
- No hay evidencia pública clara de personalización por cliente ni daily AM/PM.
- US-centric; benchmark/RFQ secundario.

### 7. EuroPharma Alliance — Polonia

- URL: https://www.pharmaalliance.eu/en/supplement-contract-manufacturing

Evidencia pública:

- Contract manufacturing de suplementos.
- Tablet manufacturing, hard/soft capsules, sachet manufacturing, packaging.
- Contract packaging: blister lines, jars, pouches y formas inusuales.

Encaje Suplan:

- Buen candidato para fabricación/packaging de suplementos en Europa.
- No hay evidencia explícita de daily packs con varias cápsulas distintas por sobre.

### 8. All Contract Packaging — EEUU

- URL: https://www.allcontractpackaging.com/food-packaging/dietary-supplements-packaging/

Evidencia pública:

- Dietary supplements packaging.
- Formas: tablets, capsules, powders, liquids.
- Formatos: bottles, blister packs, sachets, jars, pouching, stick packaging, kit assembly, fulfillment.

Encaje Suplan:

- RFQ secundario/benchmark; no evidencia explícita de personalización por cliente.

## Descartes o baja prioridad

### Gothink Biology / GTT Bio

- URL: https://gttbio.com/

Motivo:

- Hace OEM/ODM de gummies, cápsulas, tabletas, polvos y private label.
- El resultado de “custom vitamin packs” apunta más a formulación/producto custom, no a daily pouches personalizados con varios productos dentro.
- No priorizar para Suplan salvo para fabricación base.

### Activ’Inside

- URL: https://activinside.com/our-nutraceutical-solutions/contract-manufacturing-services/our-food-supplement-packaging/

Motivo:

- Packaging de suplementos: sticks, pillbox, cápsulas/gummies.
- No evidencia de multi-pill daily pouches personalizados.

## Conclusión operativa

Proveedor con evidencia explícita real:

1. **OK Capsule** — mejor match funcional para Suplan, pero hay que validar España/UE.
2. **Safecor Health** — evidencia fuerte de multi-dose sachets para vitaminas/suplementos elegibles, pero US/pharma-ish.

Mejores candidatos EU/España para intentar replicar el modelo:

1. Doypacked.
2. Manipulados Viluz.
3. Lufapak.
4. EuroPharma Alliance.

## Decisión recomendada

Enviar RFQ inmediato a OK Capsule y a Doypacked.

Orden:

1. OK Capsule — preguntar si soporta España/UE; si sí, es la ruta más rápida para Suplan V1 sin operar packaging.
2. Doypacked — preguntar si puede hacer multi-capsule daily sachets AM/PM por CSV/API o al menos recetas fijas.
3. Manipulados Viluz — alternativa España.
4. Lufapak — kitting/fulfillment y posible daily pack.
5. Safecor — benchmark US o ruta futura si Suplan prueba mercado US.

## RFQ corto recomendado

Asunto:

> RFQ personalized AM/PM supplement pouches with multiple capsules/tablets

Mensaje:

> We are building Suplan, a supplement routine platform for Spain/EU. We need a partner able to pack daily supplement pouches/sachets.
>
> Requirement:
> - 14-day and 30-day boxes.
> - 1 AM pouch + 1 PM pouch per day.
> - Each pouch may contain several different finished capsules/tablets, e.g. magnesium + vitamin D + multivitamin.
> - Initial launch: 3-5 fixed recipes.
> - Later: personalized pouch composition per customer via CSV/API.
> - White-label Suplan packaging.
> - Lot-level traceability, expiry, allergen/spec documentation, CoA, and EU/Spain labeling support.
>
> Questions:
> 1. Can you place multiple different capsules/tablets in the same pouch?
> 2. Can you produce AM/PM pouches and boxes of 14/30 days?
> 3. Can pouch contents vary per customer/order from CSV/API?
> 4. Can you ship to Spain/EU or operate as EU food/supplement co-packer?
> 5. What are MOQ, setup cost, per-pouch cost, lead time and compliance documents?
