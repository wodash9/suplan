# Suplan — proveedores posibles con foco en margen competitivo

Fecha: 2026-05-04

## Veredicto

Para proteger margen, Suplan no debería empezar con personalización cápsula-a-cápsula. La mejor estrategia de proveedores es:

1. **Fabricación low-cost UE** para cápsulas/comprimidos estándar: Polonia/Eslovenia primero.
2. **Packaging diario AM/PM separado** solo si el CDMO no puede hacerlo con coste razonable.
3. **Caja mensual pre-kit como SKU único** para que el fulfillment no tenga que montar sobres pedido a pedido.
4. Pedir RFQ en escalones **1.000 / 3.000 / 10.000 packs de 30 días**.

No hay precios públicos fiables en CDMO/co-packing. La decisión real debe tomarse con RFQs comparables.

## Objetivo económico

Hipótesis de PVP actuales:

- Basic: 29,90 €/mes.
- Plus: 39,90 €/mes.
- Complete: 54,90 €/mes.

Si el PVP incluye IVA, el objetivo de coste debe calcularse sobre ingreso neto. COGS = fabricación + packaging + fulfillment + envío + mermas operativas. No incluye CAC ni gastos fijos.

- PVP 29,90 €:
  - Neto con IVA 10%: 27,18 €.
  - COGS máximo para 65% margen bruto: 9,51 €.
  - COGS máximo para 70% margen bruto: 8,15 €.
  - Veredicto: difícil si incluye envío. Solo viable con pack muy simple o envío cobrado aparte.

- PVP 39,90 €:
  - Neto con IVA 10%: 36,27 €.
  - COGS máximo para 65% margen bruto: 12,70 €.
  - COGS máximo para 70% margen bruto: 10,88 €.
  - Veredicto: precio mínimo realista para suscripción mensual con margen decente.

- PVP 54,90 €:
  - Neto con IVA 10%: 49,91 €.
  - COGS máximo para 65% margen bruto: 17,47 €.
  - COGS máximo para 70% margen bruto: 14,97 €.
  - Veredicto: mejor rango para producto premium, onboarding/quiz y AM/PM.

Nota: confirmar IVA aplicable con asesor fiscal/regulatorio antes de pricing final.

## Ranking proveedor recomendado

### Tier A — contactar primero

#### 1. Pharmovit — Polonia

- URL: https://pharmovit.com/en/
- Rol: CDMO/private label de suplementos.
- Por qué puede mejorar margen:
  - Polonia suele ser más competitiva en coste dentro de UE que España/Alemania/Italia.
  - Buen candidato para cápsulas/comprimidos estándar o fórmulas existentes.
- Encaje Suplan:
  - Alto para fabricar bulk o producto base.
  - Validar si pueden entregar sobres AM/PM terminados; si no, combinar con co-packer.
- Riesgos:
  - Web verificada, pero el contenido público en inglés no dejó señales claras de todas las capacidades en la captura automática.
  - Hay que confirmar certificaciones, MOQ, soporte regulatorio España y packaging.
- Decisión:
  - **Prioridad 1 para margen**.

#### 2. PharmaLinea — Eslovenia

- URL: https://www.pharmalinea.com/
- Verificación web: título público detectado `Private label food supplements manufacturer I PharmaLinea`; señales de `private label`, `capsules`, `tablets`, `supplements`, `food supplements`.
- Rol: private label / fabricante de complementos alimenticios.
- Por qué interesa:
  - Muy buen encaje para lanzar rápido con formulaciones existentes.
  - Reduce coste de I+D y riesgo inicial.
- Encaje Suplan:
  - Alto para MVP con 3-5 packs modulares.
- Riesgos:
  - Fórmulas menos diferenciadas.
  - Confirmar capacidad de sobres diarios con varias cápsulas o si solo entregan formatos estándar.
- Decisión:
  - **Prioridad 1 para velocidad + margen razonable**.

#### 3. Korott — España

- URL: https://korott.com/
- Verificación web: sitio accesible; título detectado `Korott - Laboratorio probióticos`.
- Rol: fabricante/CDMO español de suplementos/nutracéuticos.
- Por qué interesa:
  - Cercanía, idioma, visitas, menor fricción regulatoria/logística.
  - Bueno para validar con menos riesgo operativo.
- Encaje Suplan:
  - Alto si aceptan pilotos y pueden ayudar con acondicionamiento.
- Riesgos:
  - Probablemente más caro que Polonia/Eslovenia.
  - Confirmar explícitamente sobres multicápsula AM/PM.
- Decisión:
  - **Prioridad 1 como proveedor nacional de control/calidad**.

#### 4. Lohn-Pack K.A. Wolf — Alemania

- URL: https://www.lohn-pack.com/en/
- Verificación web: título público detectado `Start - Lohnpack « the sachet experts`; señal de `sachets`.
- Rol: contract packer / especialista en sachets.
- Por qué interesa:
  - Candidato fuerte si el CDMO fabrica pero no ensobra AM/PM.
  - El packaging diario es el cuello de botella del modelo.
- Encaje Suplan:
  - Alto como partner de packaging si puede manejar cápsulas/tabletas discretas por sobre.
- Riesgos:
  - Validar si hacen count/fill/seal de cápsulas/tabletas, no solo polvos/granulados.
  - Validar MOQ de piloto.
- Decisión:
  - **Prioridad 1 para resolver sobres diarios**.

### Tier B — buenos, pero probablemente menos margen o más MOQ

#### 5. Martínez Nieto / MARNYS — España

- URL: https://www.martineznieto.com/
- Verificación web: título público `MARTINEZ NIETO S.A. | Food Supplements Private Label Partner`; señales de `private label`, `food supplements`, `capsules`.
- Rol: private label/fabricación de complementos alimenticios.
- Encaje Suplan:
  - Alto para proveedor español sólido.
- Riesgos:
  - Puede tener costes/MOQ superiores a proveedores UE low-cost.
  - Confirmar flexibilidad startup y AM/PM.
- Decisión:
  - Contactar como **benchmark español serio**.

#### 6. Laboratorios Tegor — España

- URL: https://www.tegor.es/
- Rol: complementos alimenticios, fitoterapia/nutracéuticos.
- Encaje Suplan:
  - Medio-alto para fórmulas tipo relax, digestión, energía, etc.
- Riesgos:
  - La verificación automática tuvo errores TLS/conexión; validar manualmente.
  - Confirmar fabricación a terceros, MOQs y packaging AM/PM.
- Decisión:
  - Contactar si queremos 3 opciones españolas en RFQ.

#### 7. SIRIO Europe / Ayanda — Alemania/UE

- URLs:
  - https://www.sirio-pharma.com/
  - https://sirio-europe.com/
- Rol: CDMO nutracéutico europeo.
- Encaje Suplan:
  - Alto para producto premium o escalado.
- Riesgos:
  - Puede empujar a formatos premium/softgels/gummies con mayor coste.
  - Confirmar MOQs.
- Decisión:
  - Útil como benchmark de escalado, no primera opción de margen MVP.

### Tier C — escalado/enterprise; no prioridad MVP

- Biofarma Group — https://www.biofarmagroup.it/
- Labomar — https://www.labomar.com/
- Aenova — https://www.aenova-group.com/
- Tjoapack — https://www.tjoapack.com/
- Wasdell — https://www.wasdellgroup.com/

Decisión: mantener en radar, pero no empezar aquí salvo que pidamos trazabilidad tipo pharma y aceptemos MOQs/costes más altos.

## Fulfillment con mejor encaje de margen

### Recomendación operativa

Para margen, el 3PL debe pickear **una caja mensual pre-kit**, no 30 sobres individuales.

### Contactar primero

#### Bigblue

- URL: https://www.bigblue.co/
- Verificación web: título público `Bigblue Logistics for E-Commerce and Retail Brands - Grow Your Sales`; señales de `pricing` y `shopify` en página de pricing.
- Encaje: alto para MVP D2C.
- Riesgo: confirmar lote/caducidad/FEFO y suplementos alimenticios.

#### byrd

- URL: https://www.getbyrd.com/
- Verificación web: título público `Dein Fulfillment Partner für nachhaltigen Erfolg im E-Commerce | byrd`; señales de `fulfillment`, `shopify`.
- Encaje: alto si se quiere expansión UE.
- Riesgo: mínimos y coste en volumen bajo.

#### Hive

- URL: https://www.hive.app/
- Verificación web: título público `Hive | International end‑to‑end operations platform for growth`; señal de `fulfillment`.
- Encaje: alto si queremos operación tecnológica y escalable.
- Riesgo: puede tener mínimos o pricing menos MVP-friendly.

#### Huboo

- URL: https://www.huboo.com/
- Verificación web: título público `Huboo | Grow your business through eCommerce fulfilment`.
- Encaje: medio-alto para MVP.
- Riesgo: confirmar FEFO real y trazabilidad por lote.

### Benchmark alternativo

#### Amazon FBA/MCF

- URL: https://sell.amazon.es/fulfilment-by-amazon
- Encaje: benchmark de coste logístico, no primera opción de marca premium.
- Riesgo: menos control de experiencia, restricciones de suplementos, trazabilidad menos flexible.

## Modelo recomendado de proveedor

### Opción 1 — Mayor margen potencial

- Pharmovit fabrica cápsulas/comprimidos o bulk.
- Lohn-Pack ensobra AM/PM.
- Bigblue/byrd/Hive cumple fulfillment como caja mensual SKU único.

Pros:
- Mejor control de coste por componente.
- Mayor poder de negociación.

Contras:
- Más coordinación.
- Más QA/trazabilidad entre proveedores.
- Riesgo operativo en fase inicial.

### Opción 2 — Mejor velocidad/riesgo controlado

- PharmaLinea o Korott fabrican y acondicionan lo máximo posible.
- Fulfillment externo solo envía caja mensual.

Pros:
- Menos complejidad.
- Más rápido para primera venta real.

Contras:
- Margen potencial algo menor.
- Menos flexibilidad en fórmula/packaging.

### Opción 3 — España primero

- Korott / Martínez Nieto / Tegor.
- Fulfillment España/UE.

Pros:
- Comunicación y compliance más fáciles.
- Menos fricción para visitas y control.

Contras:
- Coste unitario probablemente superior.
- Puede limitar margen en PVP Basic.

## Preguntas RFQ críticas

```text
Hola,

Estamos preparando Suplan, una marca de complementos alimenticios para España/UE en formato suscripción mensual.

Buscamos cotización para packs de 30 días con rutina mañana/tarde:
- Cápsulas o comprimidos.
- 3-5 fórmulas/packs predefinidos iniciales.
- Sobres diarios AM/PM, idealmente con varias cápsulas/tabletas dentro.
- Caja mensual pre-kit como SKU único.
- Etiquetado en español y documentación para España/UE.

Necesitamos respuesta separada para estos escenarios:
- 1.000 packs de 30 días.
- 3.000 packs de 30 días.
- 10.000 packs de 30 días.

Por favor indicar:
1. MOQ por fórmula/SKU.
2. Coste unitario estimado por pack de 30 días.
3. Coste de setup/desarrollo/formulación.
4. Coste de packaging AM/PM y caja mensual.
5. Lead time de muestras, primer lote y reposición.
6. Certificaciones de planta: GMP, ISO 22000, FSSC 22000, HACCP, IFS/BRC u otras.
7. CoA por lote y análisis disponibles: microbiología, metales pesados, alérgenos.
8. Soporte para claims autorizados, etiquetado y notificación España/UE.
9. Trazabilidad lote → pack mensual → pedido/cliente.
10. Si aceptáis fórmula existente/private label para reducir coste y lead time.
11. Si podéis hacer sobres con varias cápsulas/tabletas distintas dentro.
12. Condiciones de pago, muestras y exclusividad.
```

## Decisión

Mandar RFQ primero a:

1. Pharmovit.
2. PharmaLinea.
3. Korott.
4. Martínez Nieto.
5. Lohn-Pack.
6. Bigblue.
7. byrd.

Objetivo de negociación:

- Para PVP 39,90 €: COGS total ideal ≤ 10,88-12,70 € según margen objetivo 70%-65% sobre neto con IVA 10%.
- Para PVP 54,90 €: COGS total ideal ≤ 14,97-17,47 €.
- Si el pack Basic de 29,90 € no cabe en costes, convertirlo en lead magnet o starter pack sin envío incluido.
