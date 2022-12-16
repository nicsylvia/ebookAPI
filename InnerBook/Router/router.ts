import { Router } from "express";
import ViewImage from "../Config/multer";
import { getAllBooks, getOneBook, UpdateViews, uploadBooks } from "../Controller/bookControls";
const router = Router()

router.route("/createbooks").post(ViewImage, uploadBooks)
router.route("/getbooks").get(getAllBooks)
router.route("/getone/:id").get(getOneBook)
router.route("/views").patch(UpdateViews)

export default router