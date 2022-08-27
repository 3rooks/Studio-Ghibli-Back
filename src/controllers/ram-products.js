export default class Products {
    constructor() {
        this.products = [];
    }

    // CRUD
    getAll() {
        return this.products;
    }

    getById(id) {
        const results = this.products.find((i) => i.id === id);
        if (!results) return { error: 'not found' };
        return results;
    }

    saveOne(data) {
        const results = this.products.push(data);
        return results;
    }

    saveMany(_) {}

    updateById(id, data) {
        const toDelete = this.getById(id);
        if (toDelete.error === 'not found') return { error: 'not found' };
        this.deleteById(toDelete.id);
        const { name, description, price, code, stock, thumbnail } = data;
        const updatedItem = {
            id,
            name,
            description,
            price,
            code,
            stock,
            thumbnail
        };
        this.saveOne(updatedItem);
        return { updated: updatedItem };
    }

    updateMany(_) {}

    deleteById(id) {
        const products = this.getAll();
        const itemIndex = products.findIndex((i) => i.id === id);
        if (itemIndex === -1) return { error: 'not found' };
        products.splice(itemIndex, 1);
        return { success: 'deleted' };
    }

    deleteMany(_) {}
}
