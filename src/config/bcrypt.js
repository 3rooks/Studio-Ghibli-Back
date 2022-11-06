import bcrypt from 'bcrypt';

export const createHash = async (password) => {
    const hashedPassword = await bcrypt.hash(password, bcrypt.genSaltSync(10));
    return hashedPassword;
};

export const compareHash = async (password, user) => {
    const comparedPassword = await bcrypt.compare(password, user.password);
    return comparedPassword;
};
