# Suplan — permisos y proveedores de sobres alimentarios para ensobrado manual

Fecha: 2026-05-04

## Contexto

Ventura confirma el problema operativo: si cada paquete puede ser diferente, probablemente una empresa externa no va a montar caja a caja con suficiente flexibilidad y margen. Suplan V1 tendría que hacer in-house:

1. Comprar cápsulas/tabletas/comprimidos ya fabricados a proveedor B2B.
2. Reagrupar manualmente por rutina/cliente.
3. Ensobrar AM/PM en sobres alimentarios.
4. Sellar y etiquetar.
5. Montar caja de beta.

## Delegaciones ejecutadas

- `atticus-suplan-legal` — `SUPLAN-LEGAL-002`: permisos/registros mínimos para hacerlo en España.
- `iris-packaging-design` — `SUPLAN-PACKAGING-002`: especificación de sobres alimentarios, materiales y criterios de compra.
- Procurement subagent — `SUPLAN-PROCUREMENT-002`: shortlist de proveedores España/UE y rangos de coste orientativos. Nota: el intento con `lipwig-finance` falló por auth Codex consumida/caducada; se ejecutó la tarea por subagente de procurement para no bloquear.

## Veredicto

Sí tiene sentido operativo hacerlo in-house para validar personalización y margen, pero **no se puede vender como simple ecommerce**. Al abrir, reagrupar y reenvasar cápsulas/tabletas, Suplan probablemente opera como empresa alimentaria con actividad de envasado/reacondicionamiento/manipulación/distribución.

## Dos permisos/registros núcleo

Si hay que reducirlo a los dos puntos principales:

### 1. Registro como operador alimentario: RGSEAA o registro autonómico

A validar con la autoridad sanitaria autonómica donde esté el local.

Hipótesis:

- Si Suplan reenvasa/manipula y vende online en España/UE, puede requerir RGSEAA.
- Si la autoridad lo encaja como actividad menor/local/comercio minorista, podría bastar registro autonómico.
- No se decide por intuición: hay que consultarlo por escrito.

Pregunta exacta:

> ¿La actividad de comprar cápsulas/tabletas de complementos alimenticios ya fabricados, abrir envases B2B, reagrupar manualmente en sobres alimentarios AM/PM, sellar, etiquetar y vender online bajo marca Suplan requiere RGSEAA o registro autonómico? ¿Bajo qué clave/actividad: envasado, reenvasado, reacondicionamiento, almacenamiento, distribución o comercio online?

### 2. Notificación/comunicación de comercialización de complementos alimenticios finales

A validar si cada pack/rutina Suplan debe notificarse como complemento alimenticio final.

Riesgo central:

- Si cada caja es distinta por cliente, la autoridad podría considerar que hay muchas combinaciones/productos finales con etiquetado/notificación distinta.
- Para beta, conviene no empezar con personalización infinita. Empezar con 2-3 packs fijos o con personalización acotada por reglas documentadas.

Pregunta exacta:

> Si Suplan vende cajas AM/PM con combinaciones variables de cápsulas/tabletas bajo marca propia, ¿cada combinación se considera un complemento alimenticio final notificable? Si vendemos 2-3 packs fijos, ¿cada pack se notifica individualmente?

## Tercer permiso paralelo a no olvidar

Aunque los dos núcleos son sanitarios/producto, si hay local físico también hay que validar con Ayuntamiento:

- licencia, declaración responsable o comunicación previa de actividad/apertura;
- compatibilidad urbanística del local;
- actividad de manipulación/envasado alimentario.

Esto no sustituye RGSEAA/registro sanitario ni notificación de producto.

## Obligaciones operativas que no son “permisos” pero son obligatorias

- APPCC/HACCP adaptado al ensobrado manual.
- Local/zona apta para manipulación/envasado alimentario.
- Formación documentada en higiene alimentaria.
- Trazabilidad: proveedor → lote origen → lote interno Suplan → sobre AM/PM → caja → cliente.
- Recall/retirada.
- Etiquetado alimentario completo.
- Claims autorizados.
- Packaging apto contacto alimentario con declaración de conformidad.
- Permiso contractual del proveedor para reenvasar.
- CoA, lote, caducidad, ficha técnica, alérgenos.
- RGPD si el quiz trata datos de salud.

## Señales de STOP

No vender si ocurre cualquiera:

- No hay respuesta clara sobre RGSEAA vs registro autonómico.
- La autoridad exige registro y aún no está tramitado/concedido según proceda.
- El local/casa/oficina no es apto.
- No está claro si cada caja personalizada exige notificación individual.
- El proveedor no autoriza el reenvasado por escrito.
- El proveedor no entrega CoA, lote, caducidad, ficha técnica y alérgenos.
- No hay trazabilidad caja → sobre → lote origen → cliente.
- No hay recall.
- El sobre no tiene declaración de conformidad alimentaria.
- Se usan claims médicos o no autorizados.

## Especificación de sobre alimentario recomendado

Compra objetivo:

> Sobre/bolsa plana termosellable para contacto alimentario, apta para producto seco, con barrera a humedad, compatible con selladora manual de impulso y con declaración de conformidad UE.

Formato recomendado:

- Sobre plano 3 soldaduras + boca abierta para sellar.
- Sin zip.
- Sin ventana.
- Sin fuelle para beta salvo que no quepan cápsulas.
- Blanco opaco o aluminio/plata.
- Interior PE/PP apto contacto alimentario.
- Exterior PET o laminado.
- Barrera preferida: aluminio o metalizado.
- Uso previsto: cápsulas/tabletas/comprimidos secos.

Material recomendado:

1. **PET/AL/PE o PET/metPET/PE** — opción preferida por barrera a humedad/oxígeno/luz.
2. **PET/PE alimentario de barrera media** — aceptable si producto no es sensible y hay ficha técnica.
3. **PA/PE de vacío alimentario** — solo para pruebas internas; menos ideal como beta comercial.

Tamaños:

- 60×80 mm: 1-2 cápsulas, poco espacio para etiqueta.
- **70×100 mm: recomendado beta**, 2-4 cápsulas/tabletas.
- 80×120 mm: 4-6 cápsulas/tabletas o comprimidos grandes.

## Documentación a pedir al proveedor de sobres

Imprescindible:

- Declaración de conformidad para contacto alimentario.
- Reglamento CE 1935/2004.
- Reglamento CE 2023/2006.
- Reglamento UE 10/2011 si hay plástico en contacto alimentario.
- Ficha técnica: composición de capas, espesor, uso previsto, limitaciones.
- Lote/trazabilidad del material.
- Confirmación de termosellado con selladora manual de impulso.

Muy recomendable:

- WVTR/OTR o al menos confirmación de barrera a humedad para alimento seco.
- Declaración de ausencia de olores/sabores.
- Muestras físicas antes de compra grande.

## Cantidad para beta

Cálculo:

- 100 cajas × 14 días × 2 sobres/día = 2.800 sobres.
- +15% merma = 3.220 sobres aprox.

Compra recomendada:

- Muestras primero.
- Piloto: 500-1.000 sobres.
- Producción beta: 4.000 sobres total.
- Mejor 4.000 genéricos + etiqueta AM/PM que 2 referencias impresas AM/PM en V1.

## Shortlist de proveedores de sobres alimentarios

### 1. Jamo Solutions EU — Heat Seal Flat Pouches

- URL: https://jamosolutions.eu/33-heat-seal-flat-pouches/
- Encaje: sobres planos termosellables, food grade, EU compliant, opciones foil/aluminio y tamaños cercanos.
- Riesgo: confirmar DoC UE, lote y tamaño real útil; 60×110 puede ser justo y 85×140 puede ser grande.
- Coste orientativo: 0,04-0,12 €/sobre stock sin impresión.
- Pedido recomendado: muestras + 500-1.000 piloto; después 4.000 uds.

### 2. Packiro — Custom Flat Pouches

- URL: https://packiro.com/en/packagingforms/flat-pouches
- Encaje: pouches planos personalizados, food/supplements, bajo MOQ relativo, buena marca para V2.
- Riesgo: coste/lead time mayor; confirmar si MOQ aplica por diseño AM/PM.
- Coste orientativo: 0,18-0,45 €/sobre en tirada pequeña personalizada.
- Uso recomendado: cuando el tamaño/proceso esté validado; RFQ 4.000/6.000/10.000 uds.

### 3. Bolenvase / Bolsas y Envases — Doypack aluminio termosellable

- URL: https://www.bolenvase.es/bolsas-doypack-con-cierre-zip/240-bolsas-aluminio
- Encaje: proveedor España, packaging alimentario, opción rápida.
- Riesgo: doypack/zip puede ser excesivo para sobre diario y ocupar demasiado.
- Coste orientativo: 0,12-0,30 €/sobre según tamaño/pack.
- Uso recomendado: backup España o pruebas si no hay sobre plano adecuado.

### 4. Flexie Italia — Doypack aluminio termosellable

- URL: https://www.flexie.it/es/bolsas-doypack-de-aluminio-termosellables/
- Encaje: UE, bajo pedido mínimo relativo, aluminio barrera, suplementos.
- Riesgo: doypack, no sobre plano; validar DoC y envío a España.
- Coste orientativo: 0,15-0,35 €/sobre.

### 5. Goglio Espress — Flat heat-sealed pouches

- URL: https://www.goglioespress.com/goglio/en/flat-heat-sealed-pouches
- Encaje: proveedor industrial UE/Italia, aluminio, alta barrera, food contact.
- Riesgo: formatos stock pueden ser demasiado grandes; RFQ para 80×120.
- Coste orientativo: 0,19-0,29 €/ud en formatos grandes stock; pedir RFQ tamaño Suplan.

### 6. Ströbel GmbH — ALU-Line Bags & Pouches

- URL: https://stroebel.de/en/bags-pouches/alu-line-aluminum-composite.html
- Encaje: técnico/industrial, aluminio composite, barrera vapor de agua, contacto alimentario, menciona CE 1935/2004 y UE 10/2011.
- Riesgo: MOQ/lead time industrial; puede ser V2 si MOQ alto.
- Coste orientativo: 0,12-0,35 €/sobre sin impresión.

### 7. PouchDirect

- URL: https://www.pouchdirect.com/
- Encaje: proveedor UE/NL con pouches food/health, posible stock rápido.
- Riesgo: aterrizar referencia concreta y documentación; muchos formatos stand-up/zip.
- Coste orientativo: 0,06-0,20 €/sobre stock.

### 8. RAJA / Monouso / Bolsas y Envases

- URLs:
  - https://www.rajapack.es/embalaje-alimentario_C85.html
  - https://www.monouso.es/
  - https://www.bolsasyenvases.com/
- Encaje: compra rápida España, muestras, material complementario, selladora, etiquetas/cajas.
- Riesgo: no todos sus sobres son de alta barrera ni todos sirven para contacto directo con suplementos; pedir documentación y muestras.
- Uso recomendado: primera compra de pruebas internas y consumibles.

## Qué NO comprar

- Sobres de papel genéricos.
- Sobres de envío/documentos.
- Bolsas regalo.
- Bolsitas zip genéricas sin documentación.
- “Food grade” sin declaración de conformidad.
- Compostables sin barrera humedad demostrada.
- Doypacks grandes con zip para cada toma AM/PM salvo backup.
- Sobres con ventana sin ficha de barrera.
- Packaging impreso custom antes de validar tamaño/sellado/legal.
- Material sin lote trazable.
- Material con olor fuerte.
- Cualquier formato que no selle de forma consistente.

## RFQ para proveedores de sobres

```text
Hola,

Estamos preparando Suplan, una beta de complementos alimenticios en cápsulas/tabletas organizados en sobres diarios AM/PM.

Buscamos sobres/bolsas planas termosellables para contacto alimentario, aptas para producto seco, con buena barrera a humedad y compatibles con selladora manual de impulso.

Necesitamos confirmar:

1. ¿Tenéis sobres planos abiertos por un lado en 70×100 mm y/o 80×120 mm?
2. ¿Son aptos para contacto directo con alimentos/complementos alimenticios?
3. ¿Podéis enviar declaración de conformidad UE?
4. ¿Cumplen CE 1935/2004, CE 2023/2006 y, si aplica, UE 10/2011?
5. ¿Tenéis ficha técnica con composición de capas, espesor y barrera a humedad?
6. ¿Son termosellables con selladora manual de impulso?
7. ¿Podéis enviar muestras?
8. MOQ y precio para 1.000 / 4.000 / 10.000 unidades.
9. Plazo de entrega a España.
10. ¿El material tiene lote trazable?

Gracias.
```

## Próxima acción

1. Enviar consulta a autoridad sanitaria autonómica sobre RGSEAA/registro autonómico y notificación de packs personalizados.
2. Enviar RFQ de sobres a Jamo, Packiro, Bolenvase/Bolsas y Envases, Flexie, Goglio y Ströbel.
3. Comprar solo muestras hasta validar documentación + sellado + tamaño + etiqueta.
4. Mantener V1 con 2-3 packs fijos o personalización acotada hasta que sanidad confirme cómo trata combinaciones por cliente.
