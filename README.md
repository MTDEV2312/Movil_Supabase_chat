# Movil_Supabase_chat

Aplicación de chat móvil desarrollada con Ionic y Angular, utilizando Supabase como backend para la autenticación de usuarios y la gestión de mensajes en tiempo real.

## Descripción

Este proyecto implementa una funcionalidad de chat básica donde los usuarios pueden registrarse, iniciar sesión y enviar mensajes en una sala de chat común. Los mensajes se actualizan en tiempo real para todos los usuarios conectados.

## Características Principales

*   **Autenticación de Usuarios:**
    *   Registro de nuevas cuentas.
    *   Inicio de sesión con cuentas existentes.
    *   Cierre de sesión.
*   **Chat en Tiempo Real:**
    *   Envío y recepción de mensajes instantáneos.
    *   Visualización del correo electrónico del remitente de cada mensaje.
    *   Actualización automática de la lista de mensajes.
*   **Interfaz de Usuario:**
    *   Diseño limpio y responsivo gracias a Ionic.
    *   Navegación entre la página de autenticación y la página de chat.

## Tecnologías Utilizadas

*   [Ionic](https://ionicframework.com/)
*   [Angular](https://angular.io/)
*   [Supabase](https://supabase.io/) (Autenticación y Base de Datos en tiempo real)
*   [TypeScript](https://www.typescriptlang.org/)
*   HTML
*   SCSS

## Archivos Clave del Proyecto

*   `src/app/pages/auth/auth.page.ts`: Lógica para el registro e inicio de sesión de usuarios ([src/app/pages/auth/auth.page.ts](src/app/pages/auth/auth.page.ts)).
*   `src/app/pages/chat/chat.page.ts`: Lógica para la visualización y envío de mensajes, y cierre de sesión ([src/app/pages/chat/chat.page.ts](src/app/pages/chat/chat.page.ts)).
*   `src/app/services/supabase.service.ts`: Servicio para interactuar con Supabase para obtener y enviar mensajes ([src/app/services/supabase.service.ts](src/app/services/supabase.service.ts)).
*   `src/app/supabase.client.ts`: Configuración e inicialización del cliente de Supabase ([src/app/supabase.client.ts](src/app/supabase.client.ts)).
*   `src/app/app.routes.ts`: Definición de las rutas de la aplicación ([src/app/app.routes.ts](src/app/app.routes.ts)).
*   `src/main.ts`: Punto de entrada principal de la aplicación Angular ([src/main.ts](src/main.ts)).

## Configuración del Proyecto

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd Movil_Supabase_chat
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Configurar Supabase:**
    *   Crea un proyecto en [Supabase](https://supabase.io/).
    *   Obtén tu URL de API y tu clave `anon` de Supabase.
    *   **Importante:** El archivo `src/app/supabase.client.ts` (o donde tengas configurado el cliente de Supabase) no se incluye en el repositorio ya que contiene claves sensibles, similar a un archivo `.env`. Deberás crear este archivo manualmente en tu proyecto.
        Un ejemplo de contenido para `src/app/supabase.client.ts` sería:
        ```typescript
        // filepath: src/app/supabase.client.ts
        import { createClient } from '@supabase/supabase-js'
        import { environment } from '../environments/environment'; // O la ruta correcta a tus environments

        export const supabase = createClient(
          'TU_SUPABASE_URL', // Reemplaza con tu URL de Supabase
          'TU_SUPABASE_ANON_KEY' // Reemplaza con tu clave anónima de Supabase
        );
        ```
    *   Asegúrate de tener una tabla `messages` con las columnas necesarias (por ejemplo, `id`, `content`, `created_at`, `user_id`, `user_email`) y las políticas de acceso RLS adecuadas para permitir la lectura y escritura de mensajes.

## Ejecutar la Aplicación

*   **Para desarrollo en el navegador:**
    ```bash
    ionic serve
    ```
*   **Para construir y ejecutar en un dispositivo o emulador:**
    Sigue las guías de Ionic para [Android](https://ionicframework.com/docs/developing/android) o [iOS](https://ionicframework.com/docs/developing/ios).
    ```bash
    # Ejemplo para Android
    ionic capacitor add android
    ionic capacitor run android
    ```

## Capturas de Pantalla

### Captura desde Dispositivo 1

<!-- Aquí puedes añadir la imagen o un enlace a ella -->
<!-- Ejemplo: ![Captura Dispositivo 1](ruta/a/la/captura1.png) -->
![Imagen2](https://github.com/user-attachments/assets/d39cffdb-3167-4e24-ba59-ac0e4aeb3e0b)

### Captura desde Dispositivo 2

<!-- Aquí puedes añadir la imagen o un enlace a ella -->
<!-- Ejemplo: ![Captura Dispositivo 2](ruta/a/la/captura2.png) -->
![Imagen1](https://github.com/user-attachments/assets/96054690-0cf5-414f-bd7d-f437dfda42db)

