# Suplan

Landing y demo de configurador para **Suplan**, una plataforma para organizar suplementos diarios en sobres personalizados de mañana y tarde.

## Estado

MVP software-first. No vende producto real todavía. La demo valida:

- propuesta de valor;
- estructura de landing;
- packs base;
- configurador AM/PM;
- reglas mínimas de seguridad;
- captación simulada de beta.

## Stack

- React + Vite + TypeScript
- Vitest para motor de reglas
- Deploy estático vía Docker/Nginx en Coolify

## Comandos

```bash
npm install
npm test
npm run typecheck
npm run build
npm run dev
```

## Límite regulatorio

Suplan trabaja con complementos alimenticios, no medicamentos. El configurador no diagnostica, trata, cura ni previene enfermedades. Antes de venta real hacen falta revisión regulatoria, proveedor aprobado, etiquetado, QA y trazabilidad lote-cliente.

## Dominio previsto

`https://suplan.etharlia.com`
