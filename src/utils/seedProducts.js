import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore"

const products = [
    {
        id: 1,
        name: "Pelota Salvaje Paw",
        description: "Este juguete ha sido diseñado para brindar horas de diversión a tu mascota. Su forma atractiva y materiales resistentes lo hacen perfecto para juegos interactivos, ayudando a estimular su mente y liberar energía de forma positiva.",
        price: 20000,
        stock: 23,
        image: "/img/juguete1.jpg",
        category: "juguetes"
    },
       {
        id: 2,
        name: "Rugido de Goma",
        description: "Con colores llamativos y textura agradable, este juguete es ideal para perros activos. Favorece el ejercicio físico, refuerza el vínculo con el cuidador y contribuye a mantener la salud dental gracias a su diseño masticable.",
        price: 20000,
        stock: 14,
        image: "/img/juguete2.jpg",
        category: "juguetes"
    },
    {
        id: 3,
        name: "Huesito Aventurero",
        description: "Fabricado con materiales seguros y duraderos, este juguete es una excelente opción para mantener a tu mascota entretenida. Ayuda a reducir el aburrimiento, el estrés y los comportamientos destructivos en casa.",
        price: 20000,
        stock: 26,
        image: "/img/juguete3.jpg",
        category: "juguetes"
    },
    {
        id: 4,
        name: "Bola Rebotina",
        description: "Perfecto para mascotas inquietas, este juguete estimula el juego tanto en interiores como exteriores. Su resistencia lo hace ideal para juegos de tira y afloja, aportando diversión y entrenamiento físico diario.",
        price: 20000,
        stock: 25,
        image: "/img/juguete4.jpg",
        category: "juguetes"
    },
    {
        id: 5,
        name: "Kong Estrella Canina",
        description: "Este juguete multifuncional no solo entretiene, sino que también contribuye al desarrollo emocional y mental de tu mascota. Su forma facilita el agarre y la mordida, convirtiéndolo en un favorito para perros de todas las edades.",
        price: 20000,
        stock: 23,
        image: "/img/juguete5.jpg",
        category: "juguetes"
    },
  
    {
        id: 6,
        name: "Correa Urban Paw",
        description: "Correa ergonómica de material resistente, ideal para paseos seguros y controlados. Su diseño moderno combina funcionalidad y estilo, brindando comodidad tanto al tutor como a la mascota en todo momento.",
        price: 20000,
        stock: 13,
        image: "/img/correa1.jpg",
        category: "correas"
    },
    {
        id: 7,
        name: "Paseo Supremo",
        description: "Una excelente opción para salidas diarias, esta correa ofrece un agarre cómodo y firme. Su estructura fuerte soporta movimientos bruscos, siendo perfecta para perros con gran energía o fuerza.",
        price: 20000,
        stock: 4,
        image: "/img/correa2.jpg",
        category: "correas"
    },
    {
        id: 8,
        name: "Libertad Canina",
        description: "Diseñada para brindar libertad y control equilibrados, esta correa se adapta a diferentes tamaños de perros. Es ligera, segura y perfecta para caminatas urbanas o salidas al parque.",
        price: 20000,
        stock: 12,
        image: "/img/correa3.jpg",
        category: "correas"
    },
    {
        id: 9,
        name: "Correa Antitirones PowerWalk",
        description: "Ideal para paseos prolongados, esta correa proporciona resistencia y confort. Su gancho de alta calidad asegura una conexión firme con el collar o arnés, reduciendo riesgos durante el paseo.",
        price: 20000,
        stock: 10,
        image: "/img/correa4.jpg",
        category: "correas"
    },
    {
        id: 10,
        name: "Estilo y Control Pawtástico",
        description: "Con un diseño atractivo y funcional, esta correa es perfecta para dueños que buscan seguridad sin sacrificar estilo. Su largo ideal permite a la mascota explorar sin alejarse demasiado.",
        price: 20000,
        stock: 28,
        image: "/img/correa5.jpg",
        category: "correas"
    },
   
    {
        id: 11,
        name: "Nube de Sueños",
        description: "Cama acolchada que proporciona un descanso placentero a tu mascota. Ideal para climas fríos o espacios interiores, su tejido suave y base firme ofrecen el soporte necesario para un sueño reparador.",
        price: 20000,
        stock: 21,
        image: "/img/cama1.jpg",
        category: "camas"
    },
    {
        id: 12,
        name: "Refugio Acolchado PawDream",
        description: "El lugar perfecto para que tu mascota recargue energía. Esta cama cuenta con bordes elevados que brindan una sensación de protección y comodidad, promoviendo la relajación total durante el descanso.",
        price: 20000,
        stock: 11,
        image: "/img/cama2.jpg",
        category: "camas"
    },
    {
        id: 13,
        name: "Cueva Dulce Descanso",
        description: "Su diseño práctico y moderno la convierte en una excelente opción para el hogar. Fácil de limpiar y de transportar, esta cama es ideal para mascotas pequeñas y medianas que disfrutan de un lugar cálido y cómodo.",
        price: 20000,
        stock: 17,
        image: "/img/cama3.jpg",
        category: "camas"
    },
    {
        id: 14,
        name: "Colchoncito Relax",
        description: "Con un estilo minimalista y materiales de alta calidad, esta cama ofrece un refugio suave para el descanso diario. Su tamaño compacto la hace ideal para cualquier rincón del hogar.",
        price: 20000,
        stock: 8,
        image: "/img/cama4.jpg",
        category: "camas"
    },
    {
        id: 15,
        name: "Guacal Viajero SafePet",
        description: "Guacal seguro y ventilado, diseñado para garantizar el bienestar de tu mascota durante los traslados. Perfecto para viajes cortos, visitas al veterinario o momentos en los que tu mascota necesita un espacio tranquilo.",
        price: 20000,
        stock: 3,
        image: "/img/cama5.jpg",
        category: "camas"
   }, 
   {
        name: "Guacal AireLibre Comfort",
        description: "Este guacal ofrece una combinación ideal de protección y comodidad. Su estructura rígida y aberturas laterales permiten buena circulación de aire, manteniendo a tu mascota segura y relajada en todo momento.",
        price: 20000,
        stock: 5,
        image: "/img/cama6.jpg",
        category: "camas"
    }
]

const seedProducts = () => {
    const productsRef = collection(db, "products")
    products.map(( { id, ...dataProduct } ) => {
        addDoc(productsRef, dataProduct)
    })

    return
}

seedProducts()