import fs from "fs";

const URL = "src/files/storage.json";

export class Container {
  static countId = 1;

  getAll = async () => {
    try {
      if (fs.existsSync(URL)) {
        const allData = await fs.promises.readFile(URL, "utf-8");
        const allProducts = await JSON.parse(allData);
        return allProducts;
      } else {
        return [];
      }
    } catch (err) {
      console.log(`error read ${err}`);
    }
  };

  addProduct = async (product) => {
    try {
      const allProducts = await this.getAll();
      if (allProducts.length >= 0) {
        product.id = `${Container.countId++}`;
        allProducts.push(product);
        await fs.promises.writeFile(
          URL,
          JSON.stringify(allProducts, null, "\t")
        );
      }
    } catch (err) {
      console.log(`error write ${err}`);
    }
  };

  getById = async (id) => {
    try {
      const allProducts = await this.getAll();
      const findById = await allProducts.find((item) => item.id === id);
      if (findById) {
        console.log(
          `#${findById.id}- Title: ${findById.name}, Price: ${findById.price}, Thumbnail: ${findById.thumbnail}\n`
        );
      } else {
        console.log(`not found ID: ${id}\n`);
      }
    } catch (err) {
      console.log(`"error search by ID ${err}`);
    }
  };

  deleteById = async (id) => {
    try {
      const allProducts = await this.getAll();
      let productsNoDeleted = [];
      allProducts.filter((item) => {
        if (item.id !== id) {
          return productsNoDeleted.push(item);
        } else {
          console.log(`Item Deleted ID: ${item.id}\n`);
        }
      });

      const currentProducts = productsNoDeleted;
      await fs.promises.writeFile(
        URL,
        JSON.stringify(currentProducts, null, "\t")
      );
    } catch (err) {
      console.log("error delete by id");
    }
  };

  showAllbyConsole = async () => {
    try {
      const allProducts = await this.getAll();
      if (allProducts.length >= 0) {
        allProducts.map((item) =>
          console.log(
            `ID: ${item.id}, Title: ${item.name}, Price: ${item.price}, Thumbnail: ${item.thumbnail}\n`
          )
        );
      } else {
        console.log(`empty`);
      }
    } catch (err) {
      console.log(`show info console ${err}`);
    }
  };

  deleteAll = async () => {
    try {
      let Products = await this.getAll();
      await fs.promises.writeFile(
        URL,
        JSON.stringify((Products = []), null, "\t")
      );
      console.log("storage clean now");
    } catch (err) {
      console.log(`error delete all ${err}`);
    }
  };
}
