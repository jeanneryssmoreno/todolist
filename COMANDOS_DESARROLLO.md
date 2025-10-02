# 🛠️ Comandos de Desarrollo - React TodoList

## 🚀 Comandos Principales

### Instalación inicial
```bash
# Instalar dependencias
npm install

# O con yarn
yarn install
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo (puerto 5173)
npm run dev

# Iniciar con puerto específico
npm run dev -- --port 3000

# Iniciar con host específico (para acceso desde red)
npm run dev -- --host
```

### Build y Producción
```bash
# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Analizar bundle size
npm run build -- --analyze
```

### Testing
```bash
# Ejecutar todos los tests
npm run test

# Tests en modo watch (se ejecutan al cambiar archivos)
npm run test -- --watch

# Tests con interfaz visual
npm run test:ui

# Tests con coverage report
npm run test -- --coverage

# Ejecutar tests específicos
npm run test TaskForm

# Tests en modo silencioso
npm run test -- --silent
```

### Linting y Calidad de Código
```bash
# Analizar código con ESLint
npm run lint

# Corregir errores automáticamente
npm run lint -- --fix

# Verificar formato de código
npx prettier --check src/

# Formatear código automáticamente
npx prettier --write src/
```

## 🔧 Comandos de Utilidad

### Gestión de Dependencias
```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar dependencias
npm update

# Instalar nueva dependencia
npm install nombre-paquete

# Instalar dependencia de desarrollo
npm install -D nombre-paquete

# Desinstalar dependencia
npm uninstall nombre-paquete
```

### Debugging
```bash
# Ejecutar con debug de Vite
DEBUG=vite:* npm run dev

# Ejecutar tests con debug
npm run test -- --reporter=verbose

# Analizar bundle con webpack-bundle-analyzer
npx vite-bundle-analyzer dist
```

### Git y Versionado
```bash
# Inicializar repositorio
git init

# Agregar todos los archivos
git add .

# Commit inicial
git commit -m "feat: initial commit with React TodoList"

# Crear rama de desarrollo
git checkout -b develop

# Push al repositorio remoto
git push -u origin main
```

## 📊 Scripts Personalizados

### Análisis de Código
```bash
# Contar líneas de código
find src -name "*.jsx" -o -name "*.js" | xargs wc -l

# Buscar TODOs en el código
grep -r "TODO\|FIXME\|XXX" src/

# Analizar complejidad ciclomática
npx complexity-report src/
```

### Optimización
```bash
# Optimizar imágenes (si las hay)
npx imagemin src/assets/* --out-dir=src/assets/optimized

# Analizar performance del bundle
npx bundlesize

# Verificar vulnerabilidades de seguridad
npm audit

# Corregir vulnerabilidades automáticamente
npm audit fix
```

## 🚀 Comandos de Deploy

### Netlify
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login a Netlify
netlify login

# Deploy manual
netlify deploy --prod --dir=dist

# Deploy con preview
netlify deploy --dir=dist
```

### Vercel
```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy a Vercel
vercel

# Deploy de producción
vercel --prod
```

### GitHub Pages
```bash
# Instalar gh-pages
npm install -D gh-pages

# Agregar script al package.json:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy a GitHub Pages
npm run deploy
```

## 🔍 Comandos de Monitoreo

### Performance
```bash
# Analizar performance con Lighthouse
npx lighthouse http://localhost:5173 --view

# Analizar bundle size
npx bundlesize

# Verificar Core Web Vitals
npx web-vitals-cli http://localhost:5173
```

### Accesibilidad
```bash
# Verificar accesibilidad con axe
npx @axe-core/cli http://localhost:5173

# Verificar con Pa11y
npx pa11y http://localhost:5173
```

## 🛠️ Solución de Problemas Comunes

### Limpiar cache
```bash
# Limpiar cache de npm
npm cache clean --force

# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install

# Limpiar cache de Vite
rm -rf node_modules/.vite
```

### Problemas de puertos
```bash
# Verificar qué proceso usa el puerto 5173
lsof -i :5173

# Matar proceso en puerto específico
kill -9 $(lsof -t -i:5173)

# Usar puerto diferente
npm run dev -- --port 3000
```

### Problemas de ESLint
```bash
# Regenerar configuración de ESLint
npx eslint --init

# Ignorar errores específicos
npm run lint -- --fix --quiet
```

## 📝 Notas Importantes

- **Puerto por defecto**: 5173 (Vite)
- **Build folder**: `dist/`
- **Test files**: `**/*.test.jsx`
- **Config files**: `vite.config.js`, `tailwind.config.js`, `postcss.config.js`

## 🎯 Flujo de Desarrollo Recomendado

1. **Desarrollo**: `npm run dev`
2. **Testing**: `npm run test -- --watch` (en terminal separada)
3. **Linting**: `npm run lint` (antes de commit)
4. **Build**: `npm run build` (antes de deploy)
5. **Preview**: `npm run preview` (verificar build)
6. **Deploy**: Según plataforma elegida
