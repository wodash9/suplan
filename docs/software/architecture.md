# Suplan arquitectura V0

## Frontera del MVP

V0 es una SPA estática. No hay backend ni datos persistidos. Esto reduce riesgo mientras validamos interés y mensaje.

## Módulos

- `src/domain/catalog.ts`: catálogo demo de suplementos, claims conservadores y metadatos.
- `src/domain/recommendation.ts`: motor puro de recomendación y flags de seguridad.
- `src/domain/recommendation.test.ts`: pruebas de reglas críticas.
- `src/main.tsx`: landing, packs y configurador interactivo.
- `src/styles.css`: sistema visual cálido tipo wellness/lifestyle.

## Reglas críticas

- Menores: bloqueo.
- Embarazo/lactancia, medicación o condición médica: revisión profesional.
- Dieta vegana: filtra suplementos no veganos.
- El resultado es demo informativa, no prescripción.

## Evolución

Siguiente fase:

- backend para leads y consentimientos;
- analítica sin datos sensibles;
- admin para catálogo/claims;
- Stripe para reserva beta;
- proveedor/CDMO y trazabilidad lote-cliente antes de venta real.
