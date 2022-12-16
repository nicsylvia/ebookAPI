import mongoose from "mongoose";

type book = {
    author: string,
    tittle: string,
    summary: string,
    ISBN: string,
    authorImage: string,
    coverImage: string,
    category: string,
    views:[],
}

interface iBook extends book, mongoose.Document {}

const bookSchema = new mongoose.Schema({
    author: String,
    title: String,
    summary: String,
    ISBN: String,
    authorImage: String,
    coverImage: String,
    category: String,
    views:[],
})

export default mongoose.model<iBook>("myBook", bookSchema)