const products = [
    {
        id: 1,
        name: "Juguete 01",
        description: "bla bla bla",
        price: 20000,
        stock: 23,
        image: "/img/juguete1.jpg",
        category: "juguetes"
    },
       {
        id: 2,
        name: "Juguete 02",
        description: "bla bla bla",
        price: 20000,
        stock: 14,
        image: "/img/juguete2.jpg",
        category: "juguetes"
    },
    {
        id: 3,
        name: "Juguete 03",
        description: "bla bla bla",
        price: 20000,
        stock: 26,
        image: "/img/juguete3.jpg",
        category: "juguetes"
    },
    {
        id: 4,
        name: "Juguete 04",
        description: "bla bla bla",
        price: 20000,
        stock: 25,
        image: "/img/juguete4.jpg",
        category: "juguetes"
    },
    {
        id: 5,
        name: "Juguete 05",
        description: "bla bla bla",
        price: 20000,
        stock: 23,
        image: "/img/juguete5.jpg",
        category: "juguetes"
    },
  
    {
        id: 6,
        name: "Correa 01",
        description: "bla bla bla",
        price: 20000,
        stock: 13,
        image: "/img/correa1.jpg",
        category: "correas"
    },
    {
        id: 7,
        name: "Correa 02",
        description: "bla bla bla",
        price: 20000,
        stock: 4,
        image: "/img/correa2.jpg",
        category: "correas"
    },
    {
        id: 8,
        name: "Correa 03",
        description: "bla bla bla",
        price: 20000,
        stock: 12,
        image: "/img/correa3.jpg",
        category: "correas"
    },
    {
        id: 9,
        name: "Correa 04",
        description: "bla bla bla",
        price: 20000,
        stock: 10,
        image: "/img/correa4.jpg",
        category: "correas"
    },
    {
        id: 10,
        name: "Correa 05",
        description: "bla bla bla",
        price: 20000,
        stock: 28,
        image: "/img/correa5.jpg",
        category: "correas"
    },
   
    {
        id: 11,
        name: "Cama 01",
        description: "bla bla bla",
        price: 20000,
        stock: 21,
        image: "/img/cama1.jpg",
        category: "camas"
    },
    {
        id: 12,
        name: "Cama 02",
        description: "bla bla bla",
        price: 20000,
        stock: 11,
        image: "/img/cama2.jpg",
        category: "camas"
    },
    {
        id: 13,
        name: "Cama 03",
        description: "bla bla bla",
        price: 20000,
        stock: 17,
        image: "/img/cama3.jpg",
        category: "camas"
    },
    {
        id: 14,
        name: "Cama 04",
        description: "bla bla bla",
        price: 20000,
        stock: 8,
        image: "/img/cama4.jpg",
        category: "camas"
    },
    {
        id: 15,
        name: "Guacal 05",
        description: "bla bla bla",
        price: 20000,
        stock: 3,
        image: "/img/cama5.jpg",
        category: "camas"
   }, 
   {
        name: "Guacal 06",
        description: "bla bla bla",
        price: 20000,
        stock: 5,
        image: "/img/cama6.jpg",
        category: "camas"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};

const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const product = products.find((product) => product.id === Number(productId) );
            resolve(product);
        }, 2000);
    })
}

export { getProducts, getProductById };