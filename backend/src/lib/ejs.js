import ejs from 'ejs';

export const renderTemplate = async (path, data) =>
    await ejs.renderFile(path, data);
