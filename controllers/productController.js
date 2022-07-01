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

export const getProduct = async (req, res, next) => {
    const { id, name, price, categoryId } = req.body

    return res.status(200).json({
        success: true,
    });
};

export const postProduct = async (req, res, next) => {


    return res.status(200).json({
        success: true,
    });
};

export const patchProduct = async (req, res, next) => {


    return res.status(200).json({
        success: true,
    });
};

export const deleteProduct = async (req, res, next) => {


    return res.status(200).json({
        success: true,
    });
}; 