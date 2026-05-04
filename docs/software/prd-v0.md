# Suplan PRD V0

## Objetivo

Validar una plataforma de suplementos personalizados en sobres diarios para mañana y tarde, empezando con una landing y un configurador demo sin compra real.

## Alcance V0

Incluye:

- landing joven, cálida y confiable;
- packs base editables;
- configurador con objetivos, dieta y flags de seguridad;
- resultado informativo AM/PM;
- captación de beta simulada;
- tests del motor de reglas.

No incluye:

- venta real;
- recomendaciones médicas;
- backend de usuarios;
- pagos;
- producción o fulfillment.

## Personas

- Profesional ocupado: quiere rutina simple sin investigar cada bote.
- Usuario wellness informado: quiere transparencia de ingredientes/dosis.
- Principiante: necesita guía y lenguaje claro.
- Operaciones/compliance: necesita trazabilidad, claims y QC antes de piloto.

## Criterios de aceptación

- La landing explica Suplan en menos de 10 segundos.
- El CTA lleva al configurador.
- El configurador genera sobres mañana/tarde.
- Menores de edad quedan bloqueados.
- Medicación, embarazo/lactancia o condición médica marca revisión.
- Usuario vegano no recibe suplementos no veganos.
- No hay claims de cura, diagnóstico, prevención o tratamiento.
- `npm test`, `npm run typecheck` y `npm run build` pasan.
