import { Container } from "./managers/container.mjs";

const MY_STORAGE = new Container();

const runStorage = async () => {
  console.log("--> Starting...");
  await MY_STORAGE.getAll();

  console.log("--> Adding 3 products...");
  const productOne = {
    name: "Lapiz",
    price: "15",
    thumbnail: "google.com",
  };
  await MY_STORAGE.addProduct(productOne);
  const productTwo = {
    name: "Regla",
    price: "20",
    thumbnail: "google.com",
  };
  await MY_STORAGE.addProduct(productTwo);
  const productThree = {
    name: "Calculadora",
    price: "20",
    thumbnail: "google.com",
  };
  await MY_STORAGE.addProduct(productThree);

  console.log('--> Searching item by ID: "2"\n');
  await MY_STORAGE.getById("2");

  console.log('--> Deleting item by ID: "2"\n');
  await MY_STORAGE.deleteById("2");

  console.log("--> All products...\n");
  await MY_STORAGE.showAllbyConsole();

  console.log("--> Cleaning storage...\n");
  await MY_STORAGE.deleteAll();
};

runStorage();
