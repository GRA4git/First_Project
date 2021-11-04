const { Router } = require("express")
const {newsController} = require('../controllers/news.controller')

const router = Router()

router.post( "/add", newsController.addNews)
router.get( "/", newsController.getNews)
router.get( "/category/:idCategory", newsController.addNews)
router.get( "/:idNews", newsController.addNews)
