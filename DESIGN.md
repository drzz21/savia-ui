---
name: Portal de clientes
description: Acceso demostrativo que convierte la calma de un jardín nocturno en orientación clara.
colors:
  garden-night: "#152B2C"
  garden-deep: "#0C1D20"
  rain-mint: "#B7E1CB"
  rain-blue: "#79B5D9"
  bloom-coral: "#FF836C"
  mist: "#EAF4EE"
  leaf-muted: "#91AAA0"
  error: "#FFB5A7"
typography:
  display:
    fontFamily: "Figtree, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Nunito Sans, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  field: "14px"
  panel: "22px"
spacing:
  compact: "8px"
  base: "16px"
  spacious: "32px"
components:
  button-primary:
    backgroundColor: "{colors.rain-mint}"
    textColor: "{colors.garden-deep}"
    rounded: "{rounded.field}"
    padding: "16px 20px"
  input:
    backgroundColor: "rgba(234, 244, 238, 0.1)"
    textColor: "{colors.mist}"
    rounded: "{rounded.field}"
    padding: "15px 16px"
---

# Savia UI — Design System

## Overview

**Savia** es el sistema de diseño de componentes Vue 3 para productos que operan en superficies oscuras y atmosféricas. Nace de una paleta nocturna orientada por luz vegetal: fondos densos, acentos luminosos y tipografía redondeada que respira en espacios amplios.

El sistema resuelve interfaces de producto (dashboards, formularios, paneles de configuración) donde la claridad funcional importa más que la expresión decorativa. Cada token y componente está pensado para mantener legibilidad alta sobre fondos profundos y para guiar la atención con color, no con ornamento.

**Principios de diseño:**

1. **Color como orientación.** El menta señala la acción primaria; el azul informa; el coral alerta. El fondo nunca compite con los controles.
2. **Profundidad sin artificio.** Sombras ambientales desplazadas y cambio de luminosidad entre capas. Sin glassmorphism, sin blur decorativo.
3. **Tipografía redondeada y humana.** Figtree para titulares densos; Nunito Sans para cuerpo y controles. Sin mayúsculas sostenidas, sin tracking abierto.
4. **Ritmo de 8px.** Grupos compactos dentro de los controles, separaciones generosas entre bloques.

## Colors

La paleta se divide en superficies, acciones y señales. Todos los colores se definen como custom properties CSS con prefijo `--color-`.

| Token | Hex | Rol |
|---|---|---|
| `garden-night` | `#152B2C` | Superficie principal, fondo de cards y paneles |
| `garden-deep` | `#0C1D20` | Fondo de página, capa más profunda |
| `rain-mint` | `#B7E1CB` | Acción primaria, foco, estados activos |
| `rain-blue` | `#79B5D9` | Acción secundaria, información, enlaces |
| `bloom-coral` | `#FF836C` | Peligro, acentos de alerta, campos con error |
| `mist` | `#EAF4EE` | Texto principal sobre superficies oscuras |
| `leaf-muted` | `#91AAA0` | Texto secundario, bordes en reposo, ghost |
| `error` | `#FFB5A7` | Mensajes de error inline |

## Typography

| Escala | Familia | Peso | Tamaño | Line-height | Tracking |
|---|---|---|---|---|---|
| Display | Figtree | 800 | clamp(2.25rem, 5vw, 4.5rem) | 0.98 | -0.04em |
| Body | Nunito Sans | 500 | 1rem | 1.5 | normal |

Los titulares se comprimen para ganar presencia sin ocupar ancho excesivo. El cuerpo mantiene un peso medio (500) para legibilidad sostenida en fondos oscuros.

## Layout

El ritmo base es de **8px** (`--spacing-compact`). Los bloques se separan con **32px** (`--spacing-spacious`). Dentro de un grupo de controles, el espaciado es de **16px** (`--spacing-base`).

En escritorio, los paneles de contenido ocupan un máximo de ~720px para mantener la medida de lectura dentro de 65–75 caracteres. En móvil, el contenido fluye a ancho completo con padding lateral de 16px.

## Elevation & Depth

La profundidad se construye con dos capas de superficie (`garden-deep` → `garden-night`) y sombras con offset vertical y blur amplio. No se usan sombras sin offset, no se usa blur de fondo como decoración.

Ejemplo de sombra para panels: `0 4px 24px rgba(12, 29, 32, 0.4)`.

## Shapes

| Elemento | Radio |
|---|---|
| Campos, botones | 14px (`--radius-field`) |
| Cards, paneles | 22px (`--radius-panel`) |

Las formas se mantienen suaves y orgánicas. No se usan esquinas completamente redondeadas (pill) para controles estándar.

## Components

### SButton

Cinco variantes (`primary`, `secondary`, `tertiary`, `danger`, `ghost`) × tres tipos (`default`, `outlined`, `text`) × tres tamaños (`small`, `medium`, `large`).

- **Primary:** fondo rain-mint, texto garden-deep. Al presionarse baja 2px y reduce brillo.
- **Danger:** fondo bloom-coral, texto garden-deep. Mismo comportamiento de presión.
- **Ghost:** transparente, texto mist. Hover con fondo mist al 10%.
- Los bordes en variantes `outlined` usan el color de la variante con opacidad.

### SCard

Panel con fondo `garden-night`, borde `leaf-muted` al 20%, radio `22px` y sombra ambiental. Cuatro niveles de padding: none, small (16px), medium (24px), large (40px).

## Do's and Don'ts

**Do:**
- Usar rain-mint exclusivamente para la acción primaria de cada vista.
- Mantener contraste ≥4.5:1 entre texto mist y fondo garden-night.
- Respetar el ritmo de 8px en todo espaciado interno.

**Don't:**
- No usar más de un color de acento por bloque visual.
- No añadir glassmorphism, blur decorativo ni bordes laterales gruesos.
- No anidar cards dentro de cards.
- No usar gris puro; siempre teñir hacia el verde-azulado de la paleta.
