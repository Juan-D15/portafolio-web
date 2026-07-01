# Portafolio Web

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide_React-F59E0B?style=for-the-badge&logo=lucide&logoColor=white)
![Simple Icons](https://img.shields.io/badge/Simple_Icons-111111?style=for-the-badge&logo=simpleicons&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Este proyecto es un portafolio web personal e interactivo diseñado para mostrar el perfil profesional, habilidades, formación y proyectos de desarrollo de software. Desarrollado como una aplicación de página única (SPA), ofrece una experiencia de usuario fluida, moderna y optimizada en rendimiento y adaptabilidad para distintos dispositivos.

## Descripción del Proyecto

El portafolio sirve como carta de presentación digital. Permite a los usuarios y reclutadores explorar de manera interactiva:
- Información personal, formación académica y objetivos profesionales.
- Un catálogo de proyectos de desarrollo detallando su problemática, solución implementada, tecnologías utilizadas y características principales.
- Una sección interactiva de habilidades clasificadas por categorías.
- Canales de contacto directo (LinkedIn, GitHub y correo electrónico) y acceso a la visualización del Currículum Vitae.

## Características Clave

- Navegación fluida: Transiciones de página y navegación interna suave mediante React Router.
- Interfaz dinámica: Fondos con gradientes animados que cambian de tonalidad según la sección activa.
- Elementos interactivos: Animaciones de flotación y visualización dinámica de tecnologías con iconos representativos en la sección de inicio.
- Secciones detalladas: Visualización individual de proyectos (/proyecto/:id) que permite profundizar en la arquitectura y capturas de pantalla de cada desarrollo.
- Diseño responsivo: Adaptabilidad completa en dispositivos móviles, tabletas y pantallas de escritorio mediante el uso de flexbox, grids y utilidades responsivas.
- Mapeador de iconos automático: Utilidades personalizadas que procesan y renderizan de forma dinámica logotipos e iconos de tecnologías externas a partir de su identificador.

## Instalación y Configuración Local

Siga estos pasos para clonar el repositorio y ejecutar el proyecto localmente en su entorno de desarrollo:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Juan-D15/portafolio-web.git
   cd portafolio-web/portafolio-jcd
   ```

2. Instalar las dependencias del proyecto. Se recomienda el uso de pnpm, aunque también puede usar npm o yarn:
   ```bash
   pnpm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

4. Abrir en el navegador:
   El servidor iniciará localmente. Generalmente estará disponible en la dirección http://localhost:5173 o la indicada en la terminal.

## Comandos Disponibles

En el directorio del proyecto, puede ejecutar los siguientes scripts definidos en el archivo package.json:

- Iniciar el servidor de desarrollo local:
  ```bash
  pnpm dev
  ```
- Construir la aplicación para producción:
  ```bash
  pnpm build
  ```
  (Este comando genera los archivos compilados, optimizados y minificados en la carpeta dist/ listos para producción).
- Previsualizar localmente la versión de producción compilada:
  ```bash
  pnpm preview
  ```
- Ejecutar el suite de pruebas unitarias:
  ```bash
  pnpm test
  ```