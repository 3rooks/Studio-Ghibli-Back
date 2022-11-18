import test from 'ava';
import axios from 'axios';
import setupTests from './utils/setup-tests.js';

// const endpoint = `http://localhost:8080`;

setupTests(test);
// multipart/form-data
// application/json

const USER = {
    username: 'qwerty',
    email: 'qwerty@qwerty.com',
    password: 'Admin123',
    image: ''
};

const fetchRegister = async (t, user) => {
    try {
        const response = await axios.post(
            `http://localhost:8080/api/register`,
            user,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
        return response;
    } catch (error) {
        t.fail(error);
    }
};

test('user-register', async (t) => {
    const response = await fetchRegister(t, USER);

    const expectStatusCode = (t, expectedCode, response) => {
        t.is(
            response.status,
            expectedCode,
            `Expected status code ${expectedCode}, but received ${response.status}`
        );
    };

    expectStatusCode(t, 201, response);
});

// test('products', async (t) => {
//     const response = await fetchRegister(t);

//     const expectStatusCode = (t, expectedCode, response) => {
//         t.is(
//             response.status,
//             expectedCode,
//             `Expected status code ${expectedCode}, but received ${response.status}`
//         );
//     };

//     expectStatusCode(t, 200, response);
// });
