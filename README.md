# Portfolio Frontend Developer

Un portfolio moderno y profesional desarrollado con React, TypeScript y Tailwind CSS, diseñado para destacar las habilidades y proyectos de un desarrollador frontend.

## 🚀 Características

### **Funcionalidades Principales**
- **Hero Section Impactante**: Presentación personal con animaciones suaves y cambio dinámico de roles
- **Sección Sobre Mí**: Biografía profesional con barras de habilidades animadas y estadísticas
- **Galería de Proyectos**: Portfolio interactivo con filtros por categoría y vista modal detallada
- **Formulario de Contacto**: Sistema de contacto funcional con validación y feedback visual
- **Navegación Fluida**: Scroll suave, indicador de progreso y navegación sticky responsiva
- **CV Descargable**: Funcionalidad para descargar curriculum vitae
- **Diseño Responsive**: Optimizado para todos los dispositivos (mobile-first)

### **Tecnologías Utilizadas**
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Font**: Inter (Google Fonts)

### **Características de Diseño**
- **Paleta de Colores**: Sistema profesional con azul primario, verde secundario y esquema neutro completo
- **Animaciones**: Transiciones suaves y micro-interacciones elegantes
- **Tipografía**: Inter para máxima legibilidad y jerarquía visual clara
- **Accesibilidad**: Cumple con estándares WCAG para navegación por teclado y lectores de pantalla
- **Performance**: Optimizado para carga rápida y SEO

## 🛠️ Instalación y Configuración

### Requisitos Previos
- Node.js 16+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/portfolio-frontend.git
cd portfolio-frontend
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Construir para producción**
```bash
npm run build
```

5. **Previsualizar build de producción**
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes React reutilizables
│   ├── Header.tsx       # Navegación principal y menú móvil
│   ├── Hero.tsx         # Sección hero con presentación
│   ├── About.tsx        # Información personal y habilidades
│   ├── SkillBar.tsx     # Componente de barras de habilidades
│   ├── Projects.tsx     # Galería de proyectos con filtros
│   ├── ProjectModal.tsx # Modal detallado de proyectos
│   ├── Contact.tsx      # Formulario de contacto
│   ├── Footer.tsx       # Pie de página con enlaces
│   └── ScrollProgress.tsx # Indicador de progreso de scroll
├── App.tsx              # Componente principal
├── main.tsx            # Punto de entrada de la aplicación
├── index.css           # Estilos globales y utilidades
└── vite-env.d.ts       # Tipos de TypeScript para Vite
```

## 🎨 Personalización

### **Modificar Información Personal**
Edita los siguientes archivos para personalizar el contenido:

- `src/components/Hero.tsx`: Nombre, roles y descripción personal
- `src/components/About.tsx`: Biografía, habilidades y estadísticas
- `src/components/Projects.tsx`: Lista de proyectos con detalles
- `src/components/Contact.tsx`: Información de contacto

### **Cambiar Colores y Tema**
El sistema de colores se define en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#3b82f6', // Azul principal
    600: '#2563eb', // Azul hover
    // ... más variaciones
  }
}
```

### **Agregar Nuevos Proyectos**
En `src/components/Projects.tsx`, añade objetos al array `projects`:

```javascript
{
  id: 6,
  title: 'Nuevo Proyecto',
  description: 'Descripción breve del proyecto',
  fullDescription: 'Descripción completa...',
  image: 'url-de-la-imagen',
  technologies: ['React', 'TypeScript'],
  category: 'web', // web, app, landing
  demoUrl: 'https://demo.com',
  githubUrl: 'https://github.com/...',
  features: ['Característica 1', 'Característica 2']
}
```

## 🔧 Configuración de Producción

### **SEO y Meta Tags**
Las meta tags están configuradas en `index.html`. Personaliza:
- Título y descripción
- Open Graph tags para redes sociales
- Keywords relevantes

### **Performance**
- Las imágenes se cargan desde Pexels (CDN optimizado)
- Fuentes pre-cargadas para mejor rendimiento
- CSS optimizado con Tailwind purge
- Componentes lazy loading implementados

### **Despliegue**
El proyecto está optimizado para deployment en:
- **Vercel**: `npm run build` + conexión con Git
- **Netlify**: Build command: `npm run build`, Publish directory: `dist`
- **GitHub Pages**: Usar GitHub Actions con build automático

## 📊 Decisiones de Diseño

### **Arquitectura de Componentes**
- **Separación de responsabilidades**: Cada componente tiene una función específica
- **Reutilización**: Componentes como `SkillBar` y `ProjectModal` son reutilizables
- **Estado mínimo**: Use de `useState` solo donde es necesario para mejor performance

### **Sistema de Animaciones**
- **Intersection Observer**: Para activar animaciones al hacer scroll
- **CSS Transitions**: Para hover states y micro-interacciones
- **Performance**: Animaciones optimizadas con `transform` y `opacity`

### **Responsive Design**
- **Mobile-First**: Diseño inicial para móviles, expandido para desktop
- **Breakpoints**: Tailwind breakpoints estándar (sm, md, lg, xl)
- **Flexbox y Grid**: Layout systems modernos para mejor control

### **Accesibilidad**
- **Navegación por teclado**: Todos los elementos interactivos son accesibles
- **Contraste**: Cumple ratios WCAG AA para legibilidad
- **Semantic HTML**: Uso correcto de tags semánticos
- **Screen readers**: ARIA labels donde es necesario

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**Alex Developer**
- Email: alex@developer.com
- LinkedIn: [linkedin.com/in/alex-developer](https://linkedin.com/in/alex-developer)
- GitHub: [github.com/alex-developer](https://github.com/alex-developer)

---

⭐ **¡No olvides dar una estrella al repositorio si te resulta útil!**