import { USERS } from '#dao/dao.js';

const userInfoController = async (req, res) => {
    const { id } = req;

    try {
        const user = await USERS.getById(id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        return res.status(200).json({ result: user });
    } catch (error) {
        console.log(error);
    }
};

export default userInfoController;
