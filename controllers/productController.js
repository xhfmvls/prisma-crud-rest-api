import { PrismaClient } from "@prisma/client";
import generateId from "../utils/generateId.js";

const prisma = new PrismaClient();

export const getProducts = async (req, res, next) => {
    const products = await prisma.Product.findMany({
        include: { Category: true }
    });

    // [You may use this one if you want to sort it by category]
    // const products = await prisma.ProductCategory.findMany({
    //     include: { products: true }
    // });

    return res.status(200).json({
        success: true,
        count: products.length,
        products: products
    });
};

export const postProduct = async (req, res, next) => {
    const { name, price, categoryId } = req.body

    const product = await prisma.Product.create({
        data: {
            id: generateId(),
            name: name,
            price: price,
            categoryId: categoryId
        }
    });

    return res.status(200).json({
        success: true,
        product: product
    });
};

export const getProduct = async (req, res, next) => {
    const { productId } = req.params;

    const product = await prisma.Product.findUnique({
        where: {
            id: productId
        },
        include: {
            Category: true
        }
    });

    if (!product) {
        throw new Error('Product Not Found');
    };

    return res.status(200).json({
        success: true,
        product: product
    });
};

export const deleteProduct = async (req, res, next) => {
    const { productId } = req.body;
    const deletedProduct = await prisma.Product.delete({
        where: {
            id: productId
        }
    });

    return res.status(200).json({
        success: true,
        deletedProduct: deletedProduct
    });
};

export const patchProduct = async (req, res, next) => {
    const { productId, productData } = req.body; 
    const updatedProduct = await prisma.Product.update({
        where: {
            id: productId
        }, 
        data: productData, 
        include: {
            Category: true
        }
    }); 

    return res.status(200).json({
        success: true,
        updatedProduct: updatedProduct
    });
}; 