// Destructurar donde sea necesario en las funciones hechas.

const myPersonalInformation = {
  name: "Rolling",
  surname: "Code",
  old: 30,
  hobbies: ["music", "guitar", "program"],
  address: [
    {
      province: "Buenos Aires",
      city: "San Miguel",
      street: "Calle falsa",
      number: 123,
      postalCode: "1663",
    },
    {
      province: "Tucuman",
      city: "Monteros",
      street: "Calle falsa 2",
      number: 321,
      postalCode: "4142",
    },
  ],
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrIBnP4Ppijsc0z3IRH6A6mQEs0OSaVlmFw&usqp=CAU",
  favoriteFoods: [
    {
      es: [
        {
          name: "milanesas",
          status: ["frito", "horno"],
          type: ["carne", "pollo"],
          fittings: ["papas fritas", "pure", "ensalada"], // guarniciones
        },
      ],
      en: [
        {
          name: "milanese",
          status: ["frito", "baked"],
          type: ["meat", "chicken"],
          fittings: ["potato chips", "mashed potatoes", "salad"], // guarniciones
        },
      ],
    },
  ],
};

// 1 -  Destructura e imprimir por consola:
/* 
    - El apellido
    - El ultimo pasa tiempo
    - Las dos cities
    - El nombre,ultimo estado,primer tipo y todas las guarniciones de la comida en ambos idiomas
*/
