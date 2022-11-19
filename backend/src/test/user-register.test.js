import { USER_A, USER_B } from '#test/utils/faker-data.js';
import { fetchRegister, FETCH_URL } from '#test/utils/fetch-tests.js';
import setupTests from '#test/utils/setup-tests.js';
import expectStatusCode from '#test/utils/status-expect.js';
import test from 'ava';

setupTests(test);

// Register

test.serial('Register succesfully', async (t) => {
    const response = await fetchRegister(t, USER_A, FETCH_URL.REGISTER);
    expectStatusCode(t, 201, response);
});

test('Register failed - Duplicated email', async (t) => {
    const user = {
        ...USER_B,
        email: USER_A.email
    };

    const response = await fetchRegister(t, user, FETCH_URL.REGISTER);
    expectStatusCode(t, 409, response);
});

test('Register failed - Invalid email format', async (t) => {
    const user = {
        ...USER_B,
        email: 'emailatemail.com'
    };

    const response = await fetchRegister(t, user, FETCH_URL.REGISTER);
    expectStatusCode(t, 400, response);
});

test('Register failed - Invalid password format', async (t) => {
    const user = {
        ...USER_B,
        password: '1234'
    };

    const response = await fetchRegister(t, user, FETCH_URL.REGISTER);
    expectStatusCode(t, 400, response);
});

test('Register failed - Missing fields', async (t) => {
    const { email, password } = USER_B;

    const user = { email, password };

    const response = await fetchRegister(t, user, FETCH_URL.REGISTER);
    expectStatusCode(t, 400, response);
});

test('Register failed - Unnecesary fields', async (t) => {
    const user = {
        ...USER_B,
        age: 25
    };

    const response = await fetchRegister(t, user, FETCH_URL.REGISTER);
    expectStatusCode(t, 400, response, FETCH_URL.REGISTER);
});

// Login

test('Login succesfully', async (t) => {
    const { email, password } = USER_A;

    const user = {
        email,
        password
    };

    const response = await fetchRegister(t, user, FETCH_URL.LOGIN);
    expectStatusCode(t, 200, response);
});

test('Login failed - Invalid email', async (t) => {
    const { password } = USER_A;

    const user = {
        email: 'false@false.com',
        password
    };

    const response = await fetchRegister(t, user, FETCH_URL.LOGIN);
    expectStatusCode(t, 401, response);
});

test('Login failed - Invalid password', async (t) => {
    const { email } = USER_A;

    const user = {
        email,
        password: '123Admin'
    };

    const response = await fetchRegister(t, user, FETCH_URL.LOGIN);
    expectStatusCode(t, 401, response);
});
