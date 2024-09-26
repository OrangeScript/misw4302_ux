# Proyecto Wake-App

Este repositorio contiene dos ramas: `pantallas_web` y `pantallas_mobile`. Cada rama alberga un proyecto independiente: uno para aplicaciones web (Angular) y otro para aplicaciones móviles (Android Studio). A continuación, se describe cómo montar y ejecutar cada uno de los proyectos.

## Ramas

- **pantallas_web**: Proyecto desarrollado en Angular para aplicaciones web.
- **pantallas_mobile**: Proyecto desarrollado en Android Studio para aplicaciones móviles.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (para el proyecto web)
- [Angular CLI 18](https://angular.io/cli) (para el proyecto web)
- [Android Studio](https://developer.android.com/studio) (para el proyecto móvil)

## Montar el Proyecto Web

1. **Clonar el Repositorio:**

    ```bash
   git clone https://github.com/OrangeScript/misw4302_ux.git
   
   cd misw4302_ux
   
   git checkout pantallas_web

   cd web/wake-app
   ```

2. **Instalar Dependencias:**

   Asegúrate de estar en la carpeta correcta del proyecto Angular y ejecuta:

   ``` bash
   npm install
   ```

3. **Ejecutar el Servidor de Desarrollo:**

   Para iniciar el servidor local de desarrollo, usa el siguiente comando:

   ``` bash  
   ng serve
   ```
   
   Abre tu navegador y dirígete a `http://localhost:4200` para ver la aplicación en funcionamiento.

## Montar el Proyecto Móvil

1. **Clonar el Repositorio:**

   Si no has clonado el repositorio, sigue el mismo paso anterior y cambia a la rama correspondiente:

   ``` bash
   git checkout pantallas_mobile
   ```

2. **Abrir el Proyecto en Android Studio:**

   Abre Android Studio y selecciona "Open an existing Android Studio project". Navega a la carpeta del proyecto y selecciónalo.

3. **Sincronizar Gradle:**

   Una vez abierto el proyecto, permite que Android Studio sincronice Gradle. Esto puede tardar un momento.

4. **Configurar un Dispositivo Virtual o Conectar un Dispositivo:**

   Configura un emulador de Android o conecta un dispositivo físico para probar la aplicación.

5. **Ejecutar la Aplicación:**

   Haz clic en el botón "Run" para compilar y ejecutar la aplicación en el dispositivo seleccionado.

