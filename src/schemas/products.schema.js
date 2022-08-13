const productsSchema = (tbl) => {
    tbl.string('id');
    tbl.timestamps(true, true);
    tbl.string('name');
    tbl.string('description');
    tbl.integer('price');
    tbl.integer('code');
    tbl.integer('stock');
    tbl.string('thumbnail');
};

export default productsSchema;
