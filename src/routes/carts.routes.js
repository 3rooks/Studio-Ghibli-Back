import db from '#config/sqlite.js';
import uuidV4 from '#lib/uuidRandom.js';
import { Router } from 'express';

const carts = Router();

carts.get('/carts', async (req, res) => {
    // const allCards = await MY_CART.getAll();
    // if (allCards.length === 0)
    //     return res.status(404).send({ error: 'Not carts yet' });
    // return res.status(200).json({ allCards });
    try {
        const data = await db('products').select('*');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
});

carts.post('/carts', async (req, res) => {
    // const newCart = {
    //     id: uuidV4(),
    //     products: [
    //         {
    //             created: Date.now()
    //         }
    //     ]
    // };
    // const { id } = newCart;
    // await MY_CART.addCart(newCart);
    // return res.status(201).json({ cardCreated: id });

    try {
        const toSend = {
            id: uuidV4(),
            products: []
        };

        const data = await db('carts').insert(toSend);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
});

carts.delete('/carts/:id', async (req, res) => {
    // const cartDeleted = await MY_CART.deleteById(req.params.id);
    // if (cartDeleted === 'Cart not found')
    //     return res.status(404).send({ error: 'Cart not found' });
    // return res.status(202).json({ success: 'Cart deleted' });

    try {
        const data = await db('carts')
            .where({ id: `${req.params.id}` })
            .del();

        res.status(202).json(data);
    } catch (err) {
        console.log(err);
    }
});

// carts.get('/carts/:id/products', async (req, res) => {
//     // const cartSearched = await MY_CART.getById(req.params.id);
//     // const { products } = cartSearched;
//     // if (cartSearched === 'Cart not found')
//     //     return res.status(404).json({ error: 'Cart not found' });

//     // const allProducts = await MY_STORAGE.getAll();
//     // const productsInCart = allProducts.filter((item) => {
//     //     return item.product === MY_STORAGE.getById(item.product).id;
//     // });

//     // return res
//     //     .status(302)
//     //     .json({ cartProducts: products, detailProducts: productsInCart });

//     try {
//         const data = await db('carts').where({ id: `${req.params.id}` });

//         res.status(200).json(data);
//     } catch (err) {
//         console.log(err);
//     }
// });

// carts.post('/carts/:id/products', async (req, res) => {
//     // const idCart = req.params.id;
//     // const { id } = req.body;

//     // if (!id) return res.status(400).send({ error: 'Bad request' });

//     // const itemSearched = await MY_STORAGE.getById(id);
//     // if (itemSearched.id !== id)
//     //     return res.status(404).json({ error: 'Product not exist' });

//     // const newProduct = {
//     //     product: id,
//     //     quantity: 0
//     // };

//     // await MY_CART.addProductInCart(idCart, newProduct);

//     // return res.status(201).json({ success: 'Product Added' });

//     try {
//         const idCart = req.params.id;
//         const { id } = req.body;
//         const newProduct = {
//             product: id,
//             quantity: 1
//         };

//         const data = db('carts')
//             .where({ id: `${idCart}` })
//             .select('products')
//             .insert([newProduct]);

//         res.status(200).json(data);
//     } catch (err) {
//         console.log(err);
//     }
// });

// carts.delete('/carts/:idCart/products/:idProduct', async (req, res) => {
//     // const { idCart, idProduct } = req.params;

//     // const itemDeleted = await MY_CART.deleteProductInCart(idCart, idProduct);

//     // if (itemDeleted === 'Cart not found')
//     //     return res.status(404).json({ error: 'Cart not found' });

//     // return res.status(202).json({ success: itemDeleted });

//     try {
//         const data = await db('carts')
//             .where({ id: `${req.params.idCart}` })
//             .hasColumn('products')
//             .then((exits) => {
//                 console.log(exits);
//             });
//         res.status(200).json(data);
//     } catch (err) {
//         console.log(err);
//     }
// });

export default carts;
