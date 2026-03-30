# Instrucciones para Agregar Más Prompts

Este proyecto guarda los prompts en:

- `src/data/prompts.json`

Cada prompt debe tener esta estructura:

```json
{
  "id": "id-unico-del-prompt",
  "title": "Título del prompt",
  "category": "marketing",
  "content": "Texto completo del prompt",
  "source": null
}
```

## Opción recomendada: usar el script interactivo

Ejecuta:

```bash
npm run add-prompt
```

El script te pedirá:

1. Título del prompt
2. Categoría
3. Contenido (multilínea)
4. Fuente (opcional)

Al finalizar, agrega automáticamente el nuevo prompt a `src/data/prompts.json`.

## Agregado manual (alternativo)

1. Abre `src/data/prompts.json`.
2. Agrega un nuevo objeto al final del array con la estructura requerida.
3. Asegúrate de que:
   - `id` sea único.
   - `category` exista en la lista de categorías válidas.
   - `content` no esté vacío.

## Categorías válidas

Las categorías actuales están en `src/utils/categories.js`:

- `marketing`
- `negocios`
- `productividad`
- `seo`
- `finanzas`
- `aprendizaje`
- `herramientas`
- `investigacion`
- `redaccion`

## Reglas recomendadas

- Usa un `title` claro y orientado a acción.
- Mantén `id` en formato slug (ejemplo: `analisis-campana-email`).
- Usa `source: null` cuando no aplique fuente.
- Evita duplicados de contenido entre prompts.

## Validación rápida

Después de agregar prompts:

```bash
npm run build
```

Si compila sin errores, el prompt quedó integrado correctamente.
