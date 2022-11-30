import expectStatusCode from '#test/expects/status-expect.js';
import { USER_A, USER_B } from '#test/utils/faker-data.js';
import { fetchRegisterLogin } from '#test/utils/fetch-enpoints.js';
import setupTests from '#test/utils/setup-tests.js';
import test from 'ava';
import expectField from './expects/fields-expect.js';
import { FETCH_URL } from './utils/test-env.js';

setupTests(test);

// Register

test.serial('Register succesfully', async (t) => {
    const response = await fetchRegisterLogin(t, USER_A, FETCH_URL.REGISTER);
    expectStatusCode(t, 201, response);
    expectField(t, JSON.stringify({ result: 'User created' }), response);
});

test('Register failed - Duplicated email', async (t) => {
    const user = {
        ...USER_B,
        email: USER_A.email
    };
    const field = JSON.stringify({ error: 'User email already exist' });

    const response = await fetchRegisterLogin(t, user, FETCH_URL.REGISTER);
    expectStatusCode(t, 409, response);
    expectField(t, field, response);
});

test('Register failed - Invalid email format', async (t) => {
    const user = {
        ...USER_B,
        email: 'emailatemail.com'
    };
    const field = JSON.stringify({ errors: ['"email" must comply RFC 5322'] });
    const response = await fetchRegisterLogin(t, user, FETCH_URL.REGISTER);

    expectStatusCode(t, 400, response);
    expectField(t, field, response);
});

test('Register failed - Invalid password format', async (t) => {
    const user = {
        ...USER_B,
        password: '1234'
    };
    const field = JSON.stringify({
        errors: [
            '"password" must have a lowercase, an uppercase and a number',
            '"password" must have at least 8 letters'
        ]
    });
    const response = await fetchRegisterLogin(t, user, FETCH_URL.REGISTER);

    expectStatusCode(t, 400, response);
    expectField(t, field, response);
});

test('Register failed - Missing fields', async (t) => {
    const { email, password } = USER_B;

    const user = { email, password };
    const field = JSON.stringify({
        errors: ["must have required property 'username'"]
    });
    const response = await fetchRegisterLogin(t, user, FETCH_URL.REGISTER);

    expectStatusCode(t, 400, response);
    expectField(t, field, response);
});

test('Register failed - Unnecesary fields', async (t) => {
    const user = {
        ...USER_B,
        age: 25
    };
    const field = JSON.stringify({ errors: ['Object format is invalid'] });
    const response = await fetchRegisterLogin(t, user, FETCH_URL.REGISTER);

    expectStatusCode(t, 400, response);
    expectField(t, field, response);
});

// Login

test('Login succesfully', async (t) => {
    const { email, password } = USER_A;

    const user = {
        email,
        password
    };

    const response = await fetchRegisterLogin(t, user, FETCH_URL.LOGIN);
    const field = response.body;

    expectStatusCode(t, 200, response);
    expectField(t, field, response);
});

test('Login failed - Invalid email', async (t) => {
    const { password } = USER_A;

    const user = {
        email: 'false@false.com',
        password
    };

    const field = JSON.stringify({ error: 'Wrong credentials' });

    const response = await fetchRegisterLogin(t, user, FETCH_URL.LOGIN);
    expectStatusCode(t, 401, response);
    expectField(t, field, response);
});

test('Login failed - Invalid password', async (t) => {
    const { email } = USER_A;

    const user = {
        email,
        password: '123Admin'
    };
    const field = JSON.stringify({ error: 'Wrong credentials' });
    const response = await fetchRegisterLogin(t, user, FETCH_URL.LOGIN);
    expectStatusCode(t, 401, response);
    expectField(t, field, response);
});
