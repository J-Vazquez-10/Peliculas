PeliculasAPP es una aplicación móvil desarrollada con Ionic y Angular que permite a los usuarios explorar listados de películas, buscar títulos específicos y guardar sus películas favoritas. La aplicación utiliza una arquitectura basada en pestañas para una navegación intuitiva y ofrece una experiencia de usuario fluida con componentes reutilizables para la visualización de contenido.


Características Principales
Exploración de Películas: Navega a través de listados de películas populares y en cartelera.

Búsqueda: Encuentra películas específicas mediante una funcionalidad de búsqueda integrada.

Favoritos: Guarda tus películas favoritas localmente para acceder a ellas rápidamente.

Detalles de Película: Visualiza información detallada de cada película, incluyendo sinopsis, reparto y más.

Interfaz Moderna: Disfruta de una interfaz de usuario atractiva con carruseles y posters de películas.

Tecnologías Utilizadas
Este proyecto está construido con las siguientes tecnologías y dependencias clave:

Framework: Angular (v20)

UI Toolkit: Ionic Framework (v8)

Runtime Móvil: Capacitor (v7)

Almacenamiento Local: @ionic/storage-angular

Carruseles: Swiper


Instalación y Ejecución Local
Sigue estos pasos para ejecutar la aplicación en tu entorno local:

Prerrequisitos
Node.js instalado.

Ionic CLI instalado globalmente: npm install -g @ionic/cli

Pasos
Clonar el repositorio:

Bash

git clone <URL_DEL_REPOSITORIO>
cd PeliculasAPP
Instalar dependencias:

Bash

npm install
Configurar variables de entorno (si es necesario): Asegúrate de tener configuradas las credenciales de la API de películas en tus archivos de entorno (src/environments/environment.ts).

Ejecutar en modo desarrollo:

Bash

ionic serve
Esto abrirá la aplicación en tu navegador predeterminado, generalmente en http://localhost:8100.

Construcción para Producción
Para generar una build de producción:

Bash

npm run build
Para construir y ejecutar en dispositivos móviles (requiere configuración adicional de Android Studio o Xcode):

Android:

Bash

ionic capacitor build android
iOS:

Bash

ionic capacitor build ios

Estructura del Proyecto
src/app/services/: Contiene los servicios principales como MoviesService para la API y DataLocalService para el almacenamiento local.

src/app/components/: Componentes reutilizables como los diferentes tipos de slideshows (slideshow-backdrop, slideshow-poster, slideshow-pares) y la vista de detalle.

src/app/pages/: Páginas principales de la aplicación organizadas por pestañas (tab1, tab2, tab3).

src/app/interfaces/: Definiciones de tipos e interfaces para asegurar el tipado estricto de datos.
