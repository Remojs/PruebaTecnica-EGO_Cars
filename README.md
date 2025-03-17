# Prueba Técnica - React  

## Requisitos previos

Asegúrate de tener instalados los siguientes requisitos antes de continuar:

- [Node.js](https://nodejs.org/) (versión recomendada: LTS)
- [npm](https://www.npmjs.com/) (viene con Node.js)

## Instalación

Sigue estos pasos para instalar las dependencias necesarias:

```sh
npm install
```

## Ejecución en modo desarrollo

Para iniciar la aplicación en modo de desarrollo, ejecuta el siguiente comando:

```sh
npm run dev
```

Esto iniciará un servidor de desarrollo y la aplicación estará disponible en [http://localhost:3000](http://localhost:3000) o el puerto que indique la consola.



##

En esta prueba técnica, dividiré el desarrollo en días y procesos diferenciados. El objetivo es escribir un código de alta calidad en el menor tiempo posible, sin comprometer su escalabilidad y mantenimiento.  

## Enfoque de desarrollo  

1. **Análisis del diseño en Figma**  
   Identificaré los elementos repetitivos en la interfaz para convertirlos en componentes reutilizables, evitando la duplicación de código.  
   
2. **División de componentes**  
   - Componentes que muestran contenido.  
   - Componentes que manejan la lógica.  

3. **Gestión de estado y servicios**  
   - Se emplearán servicios para manejar las peticiones a la API.  
   - Se puede considerar el uso de gestores de estado avanzados y hooks personalizados para manejar filtros y otros aspectos dinámicos.  

## Estructura del proyecto  

Dado que los requerimientos no son muy complejos, utilizaré una estructura de carpetas simple, con la flexibilidad de escalar a una arquitectura más avanzada si el proyecto crece.  


```
src/ 
│── components/ # Componentes reutilizables (Navbar, Listas, etc.) 
│── pages/ # Vistas principales (Home, Details, etc.) 
│── services/ # Llamadas a la API 
│── context/ # Gestión de estado con Zustand 
│── data/ # Informacion de la app estatica
│── assets/ # Imagenes y svg de la app
```

## Estilos  

Para los estilos, utilizaré **CSS Modules**, ya que permiten optimizar los nombres de clase sin necesidad de estructuras demasiado verbosas, facilitando el mantenimiento y la escalabilidad del diseño.  


##

## Tecnologías utilizadas

- React
- Vite/Webpack (dependiendo del setup)
- JavaScript/TypeScript (según la configuración del proyecto)
