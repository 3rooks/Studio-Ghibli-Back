import faker from 'faker';

faker.locale = 'en_US';

export const USER_A = {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
};

export const USER_B = {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
};
