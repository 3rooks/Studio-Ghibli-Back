import { faker } from '@faker-js/faker';
import { Router } from 'express';

const tests = Router();

faker.locale = 'en_US';

tests.get('/tests', (req, res) => {
    const userTest = [];
    for (let i = 0; i < 20; i++) {
        userTest.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.product(),
            price: faker.commerce.price(),
            thumbnail: faker.image.imageUrl(),
            description: faker.commerce.productDescription()
        });
    }
    res.status(200).json({ userTest });
});

export default tests;
