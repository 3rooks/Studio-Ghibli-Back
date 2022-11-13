import bcrypt from 'bcrypt';

export const createHash = async (password) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

export const compareHash = async (password, user) => {
    const comparedPassword = await bcrypt.compare(password, user.password);
    return comparedPassword;
};
