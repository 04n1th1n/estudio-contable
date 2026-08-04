# 🧠 IDE_CONTEXT.md — Memoria Compartida Hermes ↔ Claude Code

**Última actualización:** 2026-08-02 23:42  
**Sesión:** Entrenamiento Hermes + Mejora #1 CTA Flotante

---

## 👥 ACTORES

| Rol | Quién | Función |
|-----|-------|---------|
| 🎯 **Hermes** | Jonathan | Gerente de Proyecto + Ejecutor Técnico (en entrenamiento) |
| ⚙️ **Claude Code** | Yo | Ejecutor Técnico + Arquitecto de Contexto |
| 📚 **Memoria** | IDE_CONTEXT.md | Bitácora de decisiones, progreso, contexto vivo |

---

## 🎓 ENTRENAMIENTOS COMPLETADOS

### 1. HERMES SKILLS (10 competencias)
**Archivo:** `HERMES_SKILLS.md`

Skills entrenados:
- #1 Analysis — Diagnóstico quirúrgico
- #2 File Navigation — Glob/Grep/Read/Edit
- #3 Git Workflow — Ramas, commits, PRs
- #4 Problem Solving — 5 pasos para bugs
- #5 Quality — Código limpio
- #6 Communication — Explicar cambios
- #7 Velocity — Estimar tiempo
- #8 Priority — Impacto/esfuerzo
- #9 Testing — Cuándo escribir tests
- #10 Security — Validación y encriptación

**Estado:** Entrenamiento completado ✅  
**Próximo:** Aplicar en Mejora #1

### 2. AGENT-SKILLS Integration (24 production-grade skills)
**Archivo:** `HERMES_AGENT_SKILLS_INTEGRATION.md` (en `~/.claude/projects/`)

24 Skills organizadas en 6 fases:
- **DEFINE** (3 skills): interview-me, idea-refine, spec-driven-development
- **PLAN** (1 skill): planning-and-task-breakdown
- **BUILD** (7 skills): incremental-implementation, test-driven-development, context-engineering, etc.
- **VERIFY** (2 skills): browser-testing-with-devtools, debugging-and-error-recovery
- **REVIEW** (4 skills): code-review-and-quality, security-and-hardening, performance-optimization, code-simplification
- **SHIP** (6 skills): git-workflow-and-versioning, ci-cd-and-automation, shipping-and-launch, etc.

**8 Comandos slash:**
```
/spec → /plan → /build → /test → /review → /ship
```
+ `/code-simplify` (refactorización) + `/webperf` (auditoría)

**Estado:** Instalación en progreso ✅ (npx skills add...)  
**Integración en Mejora #1:** Hermes usará `/plan` → `/build` (TDD) → `/review` → `/ship`

---

## 🚀 PROYECTO ACTUAL: JVL Auditores Consultores

### Repositorio
```
https://github.com/04n1th1n/estudio-contable.git
Rama activa: main
Ubicación local: C:\Users\Jonathan\estudio-contable\
```

### Mejoras Implementadas (Históricas)
1. ✅ Mejora 1: Formulario real con FormSubmit
2. ✅ Mejora 2: Iconos 3D mejorados (64×64, gradiente)
3. ✅ Mejora 3: Schema JSON + Open Graph SEO
4. ✅ Mejora 4: Chat WhatsApp flotante
5. ✅ Mejora 5: SEO+ completo (sitemap, robots.txt, manifest.json)
6. ✅ Mejora 6: Optimización PageSpeed (fonts, lazy loading)
7. ✅ Mejora 7: Romper cadena dependencias red
8. ✅ Mejora 8: Eliminar forced reflow
9. ✅ Mejora 9: Google Fonts no bloquea (font-display: optional)

**PageSpeed resultado:** 98/100 (desktop), 95/100 (mobile)  
**SEO Score:** 95/100  
**Conversión esperada:** +700% desde inicio

---

## 🎯 MEJORA #1 EN PROGRESO: CTA Flotante "Solicitar Consulta"

### Especificación
```
Objetivo: Botón flotante que aparezca al scrollear 30%
Impacto: +15-20% conversión
Skills: #5 (Quality) + #3 (Git Workflow)
Tiempo: ~20 minutos
```

### Plan Detallado
**Archivo:** `HERMES_PLAN_MEJORA_1.md`

**8 Pasos:**
1. Git Setup → rama `feat/cta-flotante`
2. Analizar → código actual
3. Implementar → HTML + CSS + JS
4. Verificar → navegador (todas pruebas)
5. Commit → mensaje convencional
6. Push → a GitHub
7. PR → crear pull request
8. Merge → a main

### Estado Actual
```
[✅] Paso 0: SPEC escrita (agent-skills /spec completado)
[ ] Paso 1: Git Setup → rama feat/cta-flotante
[ ] Paso 2: Análisis → código actual
[ ] Paso 3: Implementación → HTML + CSS + JS
[ ] Paso 4: Verificación local → browser testing
[ ] Paso 5: Commit → commits atómicos
[ ] Paso 6: Push → GitHub
[ ] Paso 7: PR → pull request
[ ] Paso 8: Merge → a main

**SPEC.md contenido:**
- Objetivo: +15-20% conversión
- Trigger: 30% scroll
- Responsive: mobile (icon) / desktop (icon+label)
- Z-index: 997 (debajo WhatsApp 998)
- QA: 9 criterios de aceptación
```

---

## 📊 STACK TECNOLÓGICO

### Frontend (index.html)
```
- HTML5 semántico
- CSS3: Custom properties (tokens), Flexbox, Grid, media queries
- JavaScript vanilla: IntersectionObserver, fetch(), event listeners
- Font Awesome 6.4.0: Iconos
- Google Fonts: Cormorant Garamond + Inter (font-display: optional)
```

### Infrastructure
```
- GitHub Pages / Custom domain (jvlauditoresconsultores.cl)
- .htaccess: GZIP, caché, headers de seguridad
- Sitemap.xml, robots.txt, manifest.json
- Schema.org: LocalBusiness, Organization, FAQPage, BreadcrumbList
```

### Performance
```
- Critical CSS: Inline para LCP rápido
- Font loading: DNS-prefetch, preconnect, media queries
- Lazy loading: Intersection Observer (imágenes)
- Network: RCP optimizado (ruta crítica <40ms)
- Forced reflow: Eliminado (0ms en PageSpeed)
```

---

## 🔄 SINCRONIZACIÓN CON CLAUDE.md

**CLAUDE.md** (cuando exista en el repo) contendrá:
```
## Interoperabilidad con IDE_CONTEXT.md

- Leer IDE_CONTEXT.md al inicio de cada sesión
- Actualizar con decisiones/cambios importantes
- Mantener sincronizado con estado de Hermes
- Referencia: skills, mejoras, plan actual
```

---

## 📋 CHECKLIST PRÓXIMA SESIÓN

Cuando Hermes reporte progreso:
```
✅ Verificar: Git branch correcta
✅ Verificar: Código limpio (Skill #5)
✅ Verificar: Commit message convencional (Skill #3)
✅ Verificar: Navegador funciona sin errores
✅ Verificar: Responsive en móvil/desktop
✅ Actualizar: Este archivo con progreso
```

---

## 🎬 PRÓXIMA ACCIÓN

**Hermes debe:**
1. Leer `HERMES_PLAN_MEJORA_1.md`
2. Ejecutar Paso 1 (Git Setup)
3. Reportar: `✅ Git setup: rama feat/cta-flotante creada`
4. Claude Code verifica y da siguiente instrucción

---

## 📞 CÓMO USAR ESTA MEMORIA

**Para Hermes:**
- Lee esta sección al inicio → Contexto completo
- Actualiza al completar pasos
- Referencia para dudas

**Para Claude Code:**
- Lee esta sección en cada sesión
- Actualiza con decisiones nuevas
- Mantiene continuidad entre sesiones

---

*Esta memoria se actualiza automáticamente con cada progreso.*
