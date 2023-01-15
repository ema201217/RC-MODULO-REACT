const getNum3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("3"));
    }, 3000);
  });
};

/*
  console.log("1");
  console.log("2");
  getNum3().then(() => {
  console.log("4");
  console.log("5");
  console.log("6");
});
 */

/* (async () => {
  console.log("1");
  console.log("2");
  await getNum3();
  console.log("4");
  console.log("5");
  console.log("6");
})(); */

// ----------------------------

const getProductById = (id) => {
  const products = [
    { id: 1, nombre: "fideos" },
    { id: 4, nombre: "lentejas" },
  ];
  return new Promise((resolve, reject) => {
    const product = products.find((product) => product.id === id);

    setTimeout(() => {
      if (isNaN(id)) {
        reject(
          new Error("El argumento de la función tiene que ser un id valido")
        );
      }

      if (!product) {
        resolve("No existe ningún producto con ese ID");
      }
      resolve(product);
    }, 3000);
  });
};

getProductById(4)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err.message));