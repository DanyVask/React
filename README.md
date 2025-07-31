# Pawtopia - E-commerce React App

**Pawtopia** es un e-commerce ficticio desarrollado como parte de mi formación en Front-End. Representa una tienda de productos para mascotas que cuenta con una interfaz interactiva construida con React. Este proyecto es una evolución de una primera versión informativa realizada con HTML y CSS puro, también disponible en este <a href="https://pawtopia-guarderia.netlify.app/">Link</a>.

Pawtopia no solo simula la experiencia completa de compra en línea, sino que también integra funciones clave como navegación por categorías, gestión de carrito, integración con Firebase y generación de órdenes de compra.

---

## Tecnologías Utilizadas

- **React** `^19.1.0`
- **React DOM** `^19.1.0`
- **React Router DOM** `^7.6.3`
- **React Icons** `^5.5.0`
- **React Spinners** `^0.17.0`
- **Firebase** `^12.0.0`

---

## Navegación y Funcionalidades

- **Catálogo de productos**: La aplicación carga un array de productos desde Firebase, permitiendo mostrar información dinámica desde la nube.
- **Filtrado por categorías**: Los usuarios pueden explorar los productos según categorías específicas (como juguetes, accesorios, etc.).
- **Carrito de compras**:
  - Se pueden agregar productos al carrito según su disponibilidad en stock.
  - Es posible aumentar o reducir cantidades según la cantidad disponible.
  - Los productos pueden eliminarse individualmente o vaciar el carrito por completo.
- **Checkout**:
  - Al hacer clic en "Continuar con mi compra", se redirige al usuario a un formulario de checkout.
  - El formulario genera una orden de compra que se almacena en Firebase.

---

## Estructura del Proyecto

- `src/components/` → Componentes reutilizables (NavBar, ItemList, Cart, etc.)
- `src/context/` → Contexto global para la gestión del carrito
- `src/pages/` → Páginas principales como `Home`, `Cart`, `Checkout`
- `firebase/` → Configuración y conexión a la base de datos

---

## Notas

- Este proyecto fue desarrollado con fines educativos como parte de la carrera de **Desarrollo Front-End**.
- Se priorizó la separación de componentes, la navegación SPA con React Router y la integración con servicios en la nube como Firebase.

---

¡Gracias por visitar Pawtopia! 🐶🐱🐾  
Daniela Vásquez Ríos
