# Suplan — modelo V1 corregido: compra de pastillas + ensobrado manual in-house

Fecha: 2026-05-04

## Corrección de entendimiento

El modelo V1 deseado no es contratar a un CDMO/co-packer para fabricar y ensobrar todo.

Modelo correcto:

1. Comprar cápsulas/comprimidos/tabletas de suplementos ya fabricados a un proveedor grande.
2. Comprar sobres, cajas, stickers/etiquetas y material de trazabilidad.
3. Montar manualmente los sobres AM/PM en Suplan.
4. Sellar sobres manualmente.
5. Montar cajas manualmente para la primera versión.
6. Validar margen, demanda y proceso antes de automatizar o externalizar.

## Veredicto CEO

Este enfoque tiene sentido para validar rápido y proteger CAPEX, pero cambia el riesgo principal:

- Antes: riesgo de MOQ alto con CDMO/co-packer.
- Ahora: riesgo de **cumplimiento, higiene, estabilidad, trazabilidad y permiso de reenvasado**.

La condición no negociable: no comprar producto retail y reempaquetarlo sin autorización. Suplan debe comprar a proveedor B2B que permita por contrato el reenvasado o suministro bulk/private label, y que entregue CoA, lote, caducidad, ficha técnica, alérgenos y documentación de etiquetado.

## Modelo operativo recomendado V1

### Pack inicial

No empezar con 20 suplementos. Empezar con 3-5 referencias:

- Magnesio.
- Vitamina D3/K2 o vitamina D3 según regulación/claims.
- Omega-3 si se permite por formato, aunque complica olor/estabilidad; mejor fase 2.
- Multivitamínico simple.
- Probiótico solo si proveedor y estabilidad lo soportan; si no, fase 2.

Formato inicial recomendado:

- 1 caja de 14 días para beta/manual.
- 2 sobres diarios: AM y PM.
- 28 sobres por caja.
- Sobres sin imprimir + etiqueta variable.
- Caja kraft estándar + sticker de marca.

Motivo: 30 días queda mejor comercialmente, pero 14 días reduce coste, tiempo manual, inventario y riesgo durante la primera beta.

## Proveedores de suplementos terminados/bulk a contactar

### Criterio de selección

Priorizar proveedores que puedan ofrecer:

- Producto ya fabricado en cápsula/tableta/comprimido.
- Fórmulas stock o catálogo B2B/private-label.
- Venta a granel o en formato que permita reenvasado.
- CoA por lote.
- Ficha técnica completa.
- Vida útil suficiente.
- Permiso contractual de reenvasado bajo marca Suplan.
- Documentación útil para España/UE.

### Tier A — contactar primero

#### 1. FutuNatura / Be Healthy d.o.o. — Eslovenia

- URL: https://www.futunatura.com/
- Rol esperado: proveedor UE de complementos terminados, potencial B2B/wholesale/private label.
- Encaje: alto si venden stock formulas o producto a granel con permiso de reenvasado.
- Por qué interesa: catálogo amplio y proveedor UE; puede ser buena fuente para validar sin fabricar fórmula custom.
- Estado de verificación: la comprobación automática hizo timeout; validar manualmente/RFQ.
- Pregunta clave: “¿vendéis cápsulas/tabletas a granel para reenvasado en sobres diarios bajo marca propia?”
- Riesgo: puede vender producto final, no bulk.

#### 2. Vita Manufacture — UK/Europa

- URL: https://vitamanufacture.com/
- Verificación automática: sitio accesible; título detectado `Vita Manufacture UK: Private Label Supplement Manufacturer`; señales de B2B/private label.
- Rol: fabricante/private label de suplementos.
- Encaje: medio-alto si tiene fórmulas stock y puede enviar bulk o private label sin envase final.
- Riesgo: si opera desde UK, hay fricción post-Brexit; pedir DDP España/UE y documentación UE.
- Decisión: buen candidato para RFQ, pero no asumir que es el más barato.

#### 3. PharmaLinea — Eslovenia

- URL: https://www.pharmalinea.com/
- Verificación previa: `Private label food supplements manufacturer`; señales de private label, cápsulas, tabletas y food supplements.
- Rol: private label/ready-to-market food supplements.
- Encaje: alto para fórmulas stock documentadas; medio para bulk manual si no permiten reenvasado.
- Riesgo: puede ser más premium y con MOQ mayor.
- Decisión: buena opción si priorizamos documentación y claims sólidos sobre coste mínimo.

#### 4. Valens Int. — Eslovenia

- URL: https://www.valens-int.com/
- Rol esperado: complementos/private label/finished products.
- Encaje: medio-alto si aceptan suministro B2B de fórmulas existentes.
- Estado de verificación: la comprobación automática no resolvió DNS desde el entorno; validar manualmente.
- Riesgo: posible MOQ industrial.

#### 5. Korott — España

- URL: https://korott.com/
- Rol: fabricante español de suplementos/nutracéuticos.
- Encaje: alto por proximidad si permite bulk/private label.
- Riesgo: más caro que proveedores Europa Este.
- Decisión: benchmark nacional obligatorio.

#### 6. Martínez Nieto / MARNYS — España

- URL: https://www.martineznieto.com/
- Verificación previa: `Food Supplements Private Label Partner`; señales de private label, cápsulas y food supplements.
- Rol: proveedor/fabricante español consolidado.
- Encaje: medio-alto si autorizan reenvasado.
- Riesgo: posible enfoque a producto final/private label formal, no bulk.

### Tier B — contactar si Tier A no responde o para benchmark

#### 7. Aakamp — Alemania

- URL: https://www.aakamp.com/
- Rol: private label/contract manufacturing de suplementos.
- Encaje: medio si ofrece stock formulas; puede ser más caro que Europa Este.

#### 8. NutriLab — Polonia

- URL: https://nutrilab.pl/
- Rol esperado: suplementos/private label en Polonia.
- Verificación automática: dominio accesible parcialmente, pero ruta inglesa devolvió página no encontrada.
- Encaje: candidato de coste si confirma B2B y bulk.
- Riesgo: validar idioma, documentación y exportación.

#### 9. Natural Poland — Polonia

- URL: https://naturalpoland.com/
- Rol: ingredientes naturales, materias primas, extractos y aceites.
- Encaje: bajo para V1 si solo vende ingredientes; útil para fase posterior o si se encapsula externamente.
- Riesgo: no comprar materias primas si no vamos a fabricar/encapsular con planta autorizada.

#### 10. Prinova / Brenntag / Azelis / IMCD — distribuidores de ingredientes

- URLs:
  - https://www.prinovaeurope.com/
  - https://www.brenntag.com/
  - https://www.azelis.com/
  - https://www.imcdgroup.com/
- Rol: grandes distribuidores de vitaminas, minerales e ingredientes.
- Encaje: bajo para V1 manual porque no venden normalmente pastillas terminadas; venden ingredientes.
- Uso: benchmark y fase 2 si Suplan acaba fabricando vía tercero.

## Proveedores de sobres, cajas, stickers y equipo manual

### Sobres/pouches aptos contacto alimentario

#### RAJA España

- URL: https://www.rajapack.es/
- Verificación automática: sitio accesible; señales de B2B, bolsas, alimentario, selladora, etiquetas, cajas e impresoras.
- Uso V1: sobres/bolsas, cajas, etiquetas, selladoras y material logístico.
- Decisión: proveedor operativo #1 para compra rápida de muestras.

#### Bolsas y Envases

- URL: https://www.bolsasyenvases.com/
- Uso V1: bolsas/doypacks/termosellables alimentarios.
- Estado verificación: DNS no resolvió desde entorno; validar manualmente.

#### Monouso

- URL: https://www.monouso.es/
- Verificación automática: accesible; señales de bolsas, alimentario, etiquetas y cajas.
- Uso V1: muestras de bolsas alimentarias y consumibles higiénicos.

#### Packiro

- URL: https://packiro.com/es/
- Uso V1/V2: pouches personalizados cuando validemos formato.
- Riesgo: más coste/MOQ que sobre sin imprimir.

### Selladoras manuales

#### RAJA / Manutan

- URLs:
  - https://www.rajapack.es/
  - https://www.manutan.es/
- Recomendación: selladora de impulso 300 mm con regulación y recambios.
- Comprar recambios: resistencia, PTFE/teflón, cuchilla si aplica.

#### Hacona / Audion / Valdamark

- URLs:
  - https://www.hacona.com/
  - https://www.audion.com/
  - https://valdamarkdirect.com/
- Uso: sellado más profesional si sube volumen o se usan materiales barrera gruesos.

### Cajas

#### SelfPackaging

- URL: https://selfpackaging.es/
- Verificación automática: accesible; señales de cajas, etiquetas y packaging.
- Uso: cajas bonitas de tirada pequeña.

#### Kartox

- URL: https://www.kartox.com/
- Verificación automática: accesible; señales de cajas, bolsas y etiquetas.
- Uso: cajas ecommerce estándar y sostenibles.

#### Cajeando

- URL: https://www.cajeando.com/
- Uso: cajas de cartón estándar/a medida en España.

### Etiquetas/stickers e impresión variable

#### Pixartprinting / Apli / Labelident / EtiquetasAdhesivas

- URLs:
  - https://www.pixartprinting.es/
  - https://www.apli.com/es/
  - https://www.labelident.com/es/
  - https://www.etiquetasadhesivas.com/
- Uso:
  - Pixartprinting: stickers de marca.
  - Apli: etiquetas iniciales baratas.
  - Labelident/EtiquetasAdhesivas: etiquetas técnicas/rollo.

#### Logiscenter

- URL: https://www.logiscenter.es/
- Uso: impresoras Zebra/TSC/GoDEX, etiquetas, ribbons, lectores.
- Verificación automática: timeout desde entorno; proveedor a validar manualmente.
- Recomendación:
  - Bajo CAPEX: Brother QL.
  - Mejor V1 seria: TSC TE200 o Zebra ZD421 en transferencia térmica.

## Checklist obligatorio antes de comprar suplementos

Enviar al proveedor:

```text
Estamos lanzando una beta de Suplan, una marca de complementos alimenticios para España/UE con sobres diarios AM/PM montados manualmente en nuestra operación.

Buscamos comprar cápsulas/tabletas ya fabricadas, idealmente fórmulas stock, para reenvasado en sobres diarios bajo nuestra marca.

Necesitamos confirmar:
1. ¿Vendéis cápsulas/tabletas a granel o formato apto para reenvasado?
2. ¿Autorizáis por contrato el reenvasado bajo marca Suplan?
3. MOQ por referencia y precio para 5.000 / 20.000 / 50.000 unidades de cápsula/tableta.
4. Precio DDP España o EXW + transporte estimado.
5. CoA por lote.
6. Ficha técnica completa: ingredientes, dosis, alérgenos, valores nutricionales, excipientes.
7. Certificaciones de planta: GMP alimentario, HACCP, ISO 22000, FSSC 22000, IFS/BRC.
8. Vida útil restante mínima al envío.
9. Condiciones de almacenamiento y sensibilidad a humedad/luz/temperatura.
10. Claims autorizados y documentación para España/UE.
11. ¿Qué pasa con la garantía/CoA si abrimos el envase original y reenvasamos?
12. ¿Podéis suministrar etiquetas/lote/caducidad y documentación para trazabilidad?
```

## Checklist de compra de packaging/equipo

### Sobres

- Apto contacto alimentario.
- Declaración de conformidad UE.
- Compatible con Reglamento CE 1935/2004.
- Si es plástico, revisar Reglamento UE 10/2011.
- Buen sellado con selladora de impulso.
- Barrera mínima a humedad.
- Tamaño probado con cápsulas reales.
- Espacio para etiqueta AM/PM, lote y caducidad.

### Selladora

- Impulso manual 300 mm.
- Regulación de tiempo.
- Recambios disponibles.
- Prueba de tracción/cierre.
- Registro de parámetros por tipo de sobre.

### Etiquetado

- Etiqueta variable con:
  - SKU/rutina.
  - AM o PM.
  - lote interno Suplan.
  - lotes origen.
  - fecha de preparación.
  - caducidad final.
- Caducidad final = caducidad más corta de todos los componentes.

## Riesgos críticos del modelo manual

1. **Registro sanitario/operador alimentario**
   - Al reenvasar complementos alimenticios, Suplan puede convertirse en operador alimentario.
   - Validar RGSEAA o registro autonómico, APPCC/HACCP, formación manipulador, trazabilidad y procedimientos.

2. **Reenvasado no autorizado**
   - Muchos proveedores no permiten abrir/reempaquetar producto sin perder garantías.
   - Debe haber autorización escrita.

3. **Trazabilidad**
   - Cada caja debe mapearse a cada lote de cápsula/tableta usada.
   - No mezclar lotes sin registro.

4. **Estabilidad**
   - Abrir envase original puede exponer a humedad/oxígeno.
   - Evitar formatos sensibles en V1: probióticos, omega-3 oloroso, cápsulas blandas delicadas.

5. **Errores manuales**
   - Necesario doble check por lote/batch.
   - Preparar por tandas, no pedido a pedido caótico.
   - Usar bandeja cuentapastillas, báscula de precisión y checklist.

6. **Claims y etiqueta**
   - No copiar claims de proveedor sin validar dosis final y autorización EFSA.
   - El etiquetado final de Suplan debe ser completo y legal.

## Decisión práctica

Para la beta manual, el mejor sistema es:

- Comprar producto B2B con permiso de reenvasado.
- Limitar catálogo a 3-5 suplementos.
- Preparar cajas de 14 días, no 30, para reducir riesgo operativo.
- Usar sobres alimentarios sin imprimir + etiqueta variable.
- Usar caja kraft estándar + sticker de marca.
- Registrar todo en una hoja de trazabilidad antes de vender.

## Próxima acción recomendada

Enviar RFQ a:

1. FutuNatura / Be Healthy.
2. Vita Manufacture.
3. PharmaLinea.
4. Korott.
5. Martínez Nieto / MARNYS.
6. RAJA España.
7. Monouso.
8. SelfPackaging/Kartox.
9. Logiscenter.

Objetivo: obtener coste real por beta de 100 cajas de 14 días y estimar tiempo manual por caja.
