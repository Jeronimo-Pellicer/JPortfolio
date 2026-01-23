# Checklist de Optimizaciones - Página Recursos

## ✅ Tareas Completadas

### 1. Code Splitting - Reducción de Bundle
- [x] `Resources.jsx`: Lazy load de Prism → Ahorra **39.5 KiB**
- [x] `Resources.jsx`: Lazy load de ResourcePreviewModal → Ahorra **~15 KiB**
- [x] `Resources.jsx`: Lazy load de PaymentModal → Ahorra **~15 KiB**
- [x] Agregar Suspense boundaries para fallbacks

**Impacto esperado:**
- Reducción de bundle inicial: ~70 KiB
- Mejora en FCP: -500ms a -1000ms
- Mejora en LCP: -500ms a -1000ms

---

### 2. Animaciones No-Composites - BlurText
- [x] Eliminar `filter: blur(10px)` de animaciones
- [x] Eliminar `filter: blur(5px)` de estados intermedios
- [x] Eliminar `filter: blur(0px)` de estados finales
- [x] Remover `will-change-[transform,filter,opacity]`
- [x] Mantener solo `opacity` y `y` (composited)

**Impacto esperado:**
- Eliminación de 4 repaints por elemento animado
- Mejora en TBT: -20ms a -50ms por página

---

### 3. Animaciones Framer Motion - ResourceCard
- [x] Reducir duración: 0.6s → 0.5s
- [x] Limitar delay acumulativo: `index * 0.1` → `Math.min(index * 0.08, 0.3)`
- [x] Convertir motion.div a CSS transitions:
  - [x] Header overlay animations
  - [x] Icon scale animations
  - [x] Benefits list animations
  - [x] Glow effect animations
- [x] Agregar `backfaceVisibility: 'hidden'` para GPU acceleration

**Impacto esperado:**
- Reducción de tareas largas: -200ms a -400ms
- Mejora en TBT: -2000ms a -5000ms
- Mejor performance en dispositivos móviles

---

### 4. Animaciones ResourceHero
- [x] Eliminar 3D transforms complejos (rotateX, rotateY)
- [x] Simplificar a animaciones 2D (scale)
- [x] Reducir duración flotante: 3.5s → 3s
- [x] Reducir distancia flotante: 12px → 8px
- [x] Convertir glow effect a CSS transitions
- [x] Convertir icon scale a CSS transitions
- [x] Remover event listeners innecesarios

**Impacto esperado:**
- Reducción de cálculos: -100ms a -200ms
- Mejor performance en 3G/4G
- Mejor rendimiento en motores antiguos

---

### 5. Optimización de Divider
- [x] Reducir duración: 1.5s → 0.8s
- [x] Reducir delay: 0.2s → 0.1s
- [x] Optimizar animación

**Impacto esperado:**
- Ahorro de 700ms de animación innecesaria

---

### 6. Optimización de Prism (OGL)
- [x] Implementar detección de conexiones lentas
- [x] Skip de carga en 4G slow data saver
- [x] Reducir DPR: 2 → 1.5
- [x] Desabilitar opciones innecesarias:
  - [x] `depth: false`
  - [x] `stencil: false`
  - [x] `antialias: false`

**Impacto esperado:**
- Prism no carga en 4G lento → Ahorra **-3000ms en FCP**
- Reducción de overhead de GPU
- Mejor experiencia en dispositivos móviles

---

### 7. CSS Optimizations
- [x] Agregar `@media (prefers-reduced-motion: reduce)`
- [x] Implementar containment (`contain: layout`, `contain: paint`)
- [x] Agregar backface-visibility optimizations

**Impacto esperado:**
- Soporte para accessibility preferences
- Mejor performance en navegadores modernos

---

## Métricas Esperadas Post-Optimización

### Escenario: Moto G Power, 4G Lento (original)

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| FCP | 3.1s | ~1.5-1.8s | **-45-50%** ⬇️ |
| LCP | 3.5s | ~1.8-2.2s | **-45-50%** ⬇️ |
| TBT | 34,760ms | ~5,000-8,000ms | **-75-85%** ⬇️ |
| Speed Index | 17.1s | ~4-6s | **-65-75%** ⬇️ |
| CLS | 0 | 0 | ✅ **Sin cambios** |

---

## Próximos Pasos (Futuro)

- [ ] Image optimization (WebP, lazy loading)
- [ ] Service Worker caching
- [ ] Inline critical CSS
- [ ] Dynamic imports para rutas adicionales
- [ ] Replace Framer Motion con CSS animations donde sea posible
- [ ] Implementar Resource Hints (preload, prefetch)
- [ ] Minify y optimize CSS output
- [ ] Evaluate alternative a OGL para fondo

---

## Testing

**Verificar con Lighthouse:**
```bash
# En Chrome DevTools
1. Open DevTools → Lighthouse
2. Select "Mobile" device
3. Throttling: "Slow 4G"
4. Run audit
5. Compare metrics
```

**Verificar en Navegación Real:**
- Usar Performance API
- Monitorear Core Web Vitals
- Validar en múltiples dispositivos

---

## Notas Importantes

### ⚠️ Trade-offs
1. **Prism no se renderiza en 4G lento** - Usuario no verá fondo animado pero pagina cargará x3 más rápido
2. **Animaciones simplificadas** - Menos "wow factor" pero mejor UX en conexiones lentas
3. **Removed 3D rotations** - Las tarjetas de stats no tienen efecto 3D pero son más performantes

### ✅ Beneficios
1. **Mejor UX en conexiones lentas** - Prioridad en este proyecto
2. **Accesibilidad** - Soporte para `prefers-reduced-motion`
3. **Mejor TTI** - Time to Interactive mejorado significativamente
4. **Mobile-first** - Optimizado para dispositivos móviles reales

---

Documento actualizado: 23 Enero 2026
