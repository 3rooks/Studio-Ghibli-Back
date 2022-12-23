import { PRODUCT_RESPONSE } from '#constants/response-status-json.js';
import { PRODUCTS } from '#services/repositories.service.js';

export const deleteProductController = async (req, res, next) => {
    try {
        const { productId } = req.params;

        const existProduct = await PRODUCTS.deleteProductById(productId);
        if (!existProduct) return res.status(404).json(PRODUCT_RESPONSE[404]);

        return res.status(200).json(PRODUCT_RESPONSE[204]);
    } catch (error) {
        next(error);
    }
};

export const getProductIdController = async (req, res, next) => {
    try {
        const { productId } = req.params;

        const existProduct = await PRODUCTS.getProductById(productId);
        if (!existProduct) return res.status(404).json(PRODUCT_RESPONSE[404]);

        return res.status(200).json({ results: existProduct });
    } catch (error) {
        next(error);
    }
};

export const getProductController = async (req, res, next) => {
    try {
        const results = await PRODUCTS.getAllProducts();
        return res.status(200).json({ results });
    } catch (error) {
        next(error);
    }
};

export const postProductController = async (req, res, next) => {
    try {
        const {
            title,
            originalTitle,
            originalTitleRomanised,
            image,
            description,
            director,
            producer,
            releaseYear,
            minDuration,
            info,
            price
        } = req.body;

        const existProduct = await PRODUCTS.getProductByTitle(title);
        if (existProduct) return res.status(409).json(PRODUCT_RESPONSE[409]);

        const newProduct = {
            title,
            originalTitle,
            originalTitleRomanised,
            image,
            description,
            director,
            producer,
            releaseYear,
            minDuration,
            info,
            price
        };

        await PRODUCTS.saveNewProduct(newProduct);
        return res.status(201).json(PRODUCT_RESPONSE[201]);
    } catch (error) {
        next(error);
    }
};

export const putProductController = async (req, res, next) => {
    try {
        const { productId } = req.params;

        const {
            title,
            originalTitle,
            originalTitleRomanised,
            image,
            description,
            director,
            producer,
            releaseYear,
            minDuration,
            info,
            price
        } = req.body;

        const existProduct = await PRODUCTS.getProductById(productId);
        if (!existProduct) return res.status(404).json(PRODUCT_RESPONSE[404]);

        const newProduct = {
            title,
            originalTitle,
            originalTitleRomanised,
            image,
            description,
            director,
            producer,
            releaseYear,
            minDuration,
            info,
            price
        };

        await PRODUCTS.updateProduct(productId, newProduct);
        return res.status(202).json(PRODUCT_RESPONSE[202]);
    } catch (error) {
        next(error);
    }
};
