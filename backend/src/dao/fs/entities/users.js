import { USER_PATH } from '#utils/paths.js';
import fs from 'fs';
import uuid from 'uuid-random';

class UserFS {
    constructor(path) {
        this.path = path;
    }

    connection = async () => {
        try {
            if (!fs.existsSync(this.path)) {
                await fs.promises.writeFile(this.path, JSON.stringify([]));
                return true;
            }
            return true;
        } catch (error) {
            return false;
        }
    };

    find = async () => {
        try {
            const users = await fs.promises.readFile(this.path, 'utf8');
            const results = await JSON.parse(users);
            return results;
        } catch (error) {
            console.log(error);
        }
    };

    findOne = async (data) => {
        const users = await this.find();
        const results = await users.find((i) => i.email === data.email);
        return results;
    };

    findById = async (id) => {
        try {
            const users = await this.find();
            const findById = await users.find((item) => item._id === id);
            if (!findById) return false;
            return findById;
        } catch (err) {
            console.log(err);
        }
    };

    findByIdAndDelete = async (id) => {
        try {
            const users = await this.find();
            const userIndex = await users.findIndex((i) => i._id === id);
            if (userIndex === -1) return false;
            users.splice(userIndex, 1);
            await fs.promises.writeFile(
                this.path,
                JSON.stringify(users, null, '\t')
            );
            return true;
        } catch (err) {
            console.log(err);
        }
    };

    create = async (user) => {
        try {
            const users = await this.find();
            const indexedUser = {
                _id: uuid(),
                image: '',
                ...user
            };
            users.push(indexedUser);
            await fs.promises.writeFile(
                this.path,
                JSON.stringify(users, null, '\t')
            );
            return true;
        } catch (err) {
            console.log(err);
        }
    };

    findByIdAndUpdate = async (id, user) => {
        try {
            const { username, email, password, cart, image } = user;

            const users = await this.find();

            const productIndex = await users.findIndex((i) => i._id === id);
            if (productIndex === -1) return false;
            users.splice(productIndex, 1);

            const updatedUser = {
                _id: id,
                image,
                username,
                email,
                password,
                cart
            };
            users.push(updatedUser);

            await fs.promises.writeFile(
                this.path,
                JSON.stringify(users, null, '\t')
            );
            return true;
        } catch (err) {
            console.log(err);
        }
    };
}

const fsUsers = new UserFS(USER_PATH);

export default fsUsers;
