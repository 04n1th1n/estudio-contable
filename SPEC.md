# SPEC — Mejora #1: CTA Flotante "Solicitar Consulta"

**Fecha:** 2026-08-03
**Autor:** Hermes (Jonathan) + opencode
**Proyecto:** jvlauditoresconsultores.cl (estudio-contable)

---

## Objetivo

Agregar un botón flotante "Solicitar Consulta" que aparezca después de que el
usuario scrollee el 30% de la página, para aumentar la conversión a contacto.

**Impacto esperado:** +15-20% conversión (CTA siempre visible mientras se lee).

---

## Requerimientos

### Comportamiento
- El botón está **invisible al cargar** (opacity 0, pointer-events none).
- Aparece con fade-in al superar el **30%** de scroll.
- Vuelve a ocultarse si el usuario sube por debajo del 30%.
- Al hacer clic, **lleva a la sección `#contacto`** (scroll suave).

### HTML
- Nuevo elemento `<a class="cta-flotante">` ubicado **después** del botón
  WhatsApp flotante, antes de `</body>`.
- Contenido: `<i class="fas fa-calendar-check"></i>` + `<span class="cta-label">Solicitar Consulta</span>`.
- `title="Solicitar Consulta"` para accesibilidad.
- `href="#contacto"`.

### CSS
- `position: fixed; bottom` por encima del WhatsApp; `right: 2rem`.
- `z-index: 997` (debajo de WhatsApp 998 y del toast 999).
- Fondo `linear-gradient(135deg, var(--navy), var(--navy-light))`, color `var(--gold)`.
- Hover: gradiente dorado, color navy, `scale(1.15)`.
- Estado `.visible`: opacity 1, translateY(0), pointer-events auto.
- **Responsive:** móvil = solo icono; desktop (min-width 768px) = icono + label.
- Reutilizar tokens del proyecto (`--navy`, `--gold`, `--transition`, `--radius-sm`).

### JavaScript
- Listener de `scroll` **pasivo**.
- Cálculo: `scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100`.
- Mostrar si `scrollPercent > 30`, ocultar en caso contrario.
- No re-agregar la clase si ya existe (optimización).
- Inicialización al cargar (`showCTAAtScroll()`).

---

## Criterios de aceptación (QA)

| # | Prueba | Resultado esperado |
|---|--------|--------------------|
| 1 | Carga inicial | Botón invisible |
| 2 | Scroll 0-30% | Sigue invisible |
| 3 | Scroll >30% | Aparece con fade-in suave |
| 4 | Hover | Fondo dorado, escala 1.15 |
| 5 | Click | Navega a `#contacto` |
| 6 | Mobile (<768px) | Solo icono |
| 7 | Desktop (≥768px) | Icono + label |
| 8 | Scroll hacia arriba | Desaparece al volver bajo 30% |
| 9 | DevTools Console | Sin errores |

---

## Fuera de alcance
- No modificar el botón WhatsApp existente.
- No cambiar colores/tokens globales.
- No agregar dependencias externas.
