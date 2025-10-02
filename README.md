# 📝 React TodoList - Vite

Una aplicación moderna de lista de tareas construida con **React**, **Vite**, **Tailwind CSS** y **Vitest** para testing. Este proyecto demuestra las mejores prácticas de desarrollo frontend con una arquitectura limpia y componentes reutilizables.

## 🚀 Características

- ✅ **Agregar tareas** - Crea nuevas tareas fácilmente
- ✅ **Marcar como completadas** - Toggle entre pendiente/completada
- ✅ **Eliminar tareas** - Remueve tareas que ya no necesitas
- ✅ **Estadísticas en tiempo real** - Ve tu progreso con barras y contadores
- ✅ **Interfaz moderna** - Diseño responsivo con Tailwind CSS
- ✅ **Validación de entrada** - No permite tareas vacías
- ✅ **Contador de caracteres** - Límite de 100 caracteres por tarea
- ✅ **Accesibilidad** - Atributos ARIA y navegación por teclado
- ✅ **Testing completo** - Pruebas unitarias con React Testing Library

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | ^18.2.0 | Framework principal |
| **Vite** | ^5.0.8 | Build tool y dev server |
| **Tailwind CSS** | ^3.3.6 | Estilos y diseño |
| **Vitest** | ^1.0.4 | Testing framework |
| **React Testing Library** | ^13.4.0 | Testing de componentes |
| **ESLint** | ^8.55.0 | Linting y calidad de código |

## 📁 Estructura del Proyecto

```
todolist/
├── public/
│   └── index.html              # HTML principal
├── src/
│   ├── components/             # Componentes React
│   │   ├── TaskForm.jsx        # Formulario para agregar tareas
│   │   ├── TaskItem.jsx        # Componente de tarea individual
│   │   ├── TaskList.jsx        # Lista de todas las tareas
│   │   └── __tests__/          # Tests de componentes
│   │       ├── TaskForm.test.jsx
│   │       ├── TaskItem.test.jsx
│   │       └── TaskList.test.jsx
│   ├── test/
│   │   └── setup.js            # Configuración de testing
│   ├── __tests__/
│   │   └── App.test.jsx        # Tests de integración
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Estilos adicionales
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos globales + Tailwind
├── package.json                # Dependencias y scripts
├── vite.config.js              # Configuración de Vite
├── tailwind.config.js          # Configuración de Tailwind
├── postcss.config.js           # Configuración de PostCSS
├── README.md                   # Este archivo
└── EXPLICACION_CODIGO.md       # Explicación detallada del código
```

## 🚀 Instalación y Uso

### Prerrequisitos
- **Node.js** (versión 16 o superior)
- **npm** o **yarn**

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/react-todolist-vite.git
   cd react-todolist-vite
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   - La aplicación estará disponible en `http://localhost:5173`

### Scripts disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| **Desarrollo** | `npm run dev` | Inicia el servidor de desarrollo |
| **Build** | `npm run build` | Construye la aplicación para producción |
| **Preview** | `npm run preview` | Previsualiza el build de producción |
| **Test** | `npm run test` | Ejecuta las pruebas unitarias |
| **Test UI** | `npm run test:ui` | Ejecuta las pruebas con interfaz visual |
| **Lint** | `npm run lint` | Analiza el código con ESLint |

## 🧪 Testing

Este proyecto incluye una suite completa de pruebas unitarias:

```bash
# Ejecutar todas las pruebas
npm run test

# Ejecutar pruebas en modo watch
npm run test -- --watch

# Ejecutar pruebas con interfaz visual
npm run test:ui

# Ejecutar pruebas con coverage
npm run test -- --coverage
```

### Cobertura de pruebas
- ✅ **TaskForm**: Validación, envío, limpieza de campos
- ✅ **TaskItem**: Toggle, eliminación, estilos condicionales
- ✅ **TaskList**: Renderizado, estadísticas, casos vacíos
- ✅ **App**: Integración completa, flujo de datos

## 🎨 Arquitectura de Componentes

### Flujo de datos
```
App.jsx (Estado global)
├── TaskForm.jsx (Agregar tareas)
└── TaskList.jsx (Mostrar tareas)
    └── TaskItem.jsx (Tarea individual)
```

### Responsabilidades

| Componente | Responsabilidad |
|------------|-----------------|
| **App** | Estado global, funciones CRUD, coordinación |
| **TaskForm** | Captura de input, validación, envío |
| **TaskList** | Renderizado de lista, estadísticas, progreso |
| **TaskItem** | Renderizado individual, toggle, eliminación |

## 🎯 Ejemplos de Prompts Utilizados en el Desarrollo

Durante el desarrollo de este proyecto, se utilizaron los siguientes prompts con Cursor/AI:

### 1. **Configuración inicial del proyecto**
```
"Crea un proyecto React con Vite, configura Tailwind CSS y estructura básica de carpetas para una aplicación TodoList"
```

### 2. **Creación de componentes**
```
"Refactoriza este componente TodoList en tres componentes separados: TaskForm para agregar tareas, TaskList para mostrar la lista, y TaskItem para cada tarea individual"
```

### 3. **Mejoras de UI**
```
"Mejora la interfaz de usuario con Tailwind CSS: agrega gradientes, sombras, animaciones hover, y una barra de progreso visual para mostrar el porcentaje de tareas completadas"
```

### 4. **Testing**
```
"Genera pruebas unitarias completas con React Testing Library para todos los componentes, incluyendo casos edge como tareas vacías, validación de formularios y integración entre componentes"
```

### 5. **Accesibilidad**
```
"Agrega atributos ARIA y mejoras de accesibilidad a todos los componentes, incluyendo labels descriptivos para screen readers y navegación por teclado"
```

### 6. **Documentación**
```
"Crea documentación completa incluyendo README con instrucciones de instalación, explicación de la arquitectura, y un archivo separado que explique el código en lenguaje sencillo para principiantes"
```

### 7. **Optimización**
```
"Optimiza el rendimiento usando useCallback para las funciones que se pasan como props y agrega comentarios JSDoc a todas las funciones"
```

### 8. **Validación y UX**
```
"Agrega validación en tiempo real, contador de caracteres, y mejora la experiencia de usuario con estados de loading y feedback visual"
```

## 🔧 Configuración Personalizada

### Tailwind CSS
El proyecto usa una configuración personalizada de Tailwind con:
- Colores primarios personalizados
- Extensiones de tema para la paleta azul
- Configuración de purge para optimización

### Vite
Configurado con:
- Plugin de React con Fast Refresh
- Configuración de testing con Vitest
- Optimización de build para producción

### ESLint
Reglas configuradas para:
- React Hooks
- React Refresh
- Mejores prácticas de JavaScript

## 📚 Recursos de Aprendizaje

Si eres nuevo en estas tecnologías, aquí tienes recursos útiles:

- **React**: [Documentación oficial](https://react.dev/)
- **Vite**: [Guía de inicio](https://vitejs.dev/guide/)
- **Tailwind CSS**: [Documentación](https://tailwindcss.com/docs)
- **Vitest**: [Guía de testing](https://vitest.dev/guide/)
- **React Testing Library**: [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

