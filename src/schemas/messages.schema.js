const messagesSchema = (tbl) => {
    tbl.string('id');
    tbl.timestamps(true, true);
    tbl.string('messages');
};

export default messagesSchema;
