import { PrismaClient } from "@prisma/client";
import generateId from "../utils/generateId.js";

const prisma = new PrismaClient();

export const getProducts = async (req, res, next) => {
    const products = await prisma.Product.findMany({});

    return res.status(200).json({
        success: true,
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