import { USERS } from '#dao/dao.js';

const userUpdateImgController = async (req, res) => {
    const { id } = req;
    const { pic } = req.body;

    try {
        const existingUserById = await USERS.getById(id);
        if (!existingUserById)
            return res.status(401).json({ error: 'User no authorized' });

        existingUserById.pic = pic;
        await USERS.updateById(id, existingUserById);

        return res.json({ result: 'User img updated' });
    } catch (error) {
        console.log(error);
    }
};

export default userUpdateImgController;
