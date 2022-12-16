import bookModel from "../model/bookModel";

import { Request, Response } from "express"

import cloudinary from "../Config/cloudinary";

// post:
const uploadBooks = async (req: Request, res: Response): Promise<Response> =>{
    try {
        let isbn1: number = Math.floor(Math.random() * 10000)
        let isbn2 = Math.floor(Math.random() * 10000)
        let isbn3 = Math.floor(Math.random() * 10000)
        let isbn4 = Math.floor(Math.random() * 10000)
        let cloudImage = await cloudinary.uploader.upload(req?.file!.path)
        const { author, tittle, summary, category, views} = req.body

       const newBooks = await bookModel.create({
        author,
        tittle,
        summary,
        ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
        authorImage: author.charAt(0),
        coverImage: cloudImage.secure_url,
        category,
        views,
       }) 
       return res.status(201).json({
        message: "Successfully uploaded books",
        data: newBooks
       })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in uploading books",
            data: error
        })
    }
}

// getAll:
const getAllBooks = async (req: Request, res: Response): Promise<Response> => {
    try {
        const getBooks = await bookModel.find();
        return res.status(200).json({
            message: "Successfully gotten all books",
            data: getBooks
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in getting all books",
            data: error
        })
    }
}
// getOne:
const getOneBook = async (req: Request, res: Response): Promise<Response> => {
    try {
        const getAbook = await bookModel.findById(req.params.id);
        return res.status(200).json({
            message: "Successfully uploaded this book",
            data: getAbook
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in getting this book",
            data: error
        })
    }
}
// Views:
const UpdateViews = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const userViews = await bookModel.findByIdAndUpdate(
            req.params.id, {
                $push: {views: req.body.ip}
            }, {new: true}
        )
        return res.status(200).json({
            message: "Successfully got the views of the users",
            data: userViews
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in getting views",
            data: error,
        })
    }
};

export { uploadBooks, getAllBooks, getOneBook, UpdateViews}