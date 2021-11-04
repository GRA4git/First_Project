const e = require("express")
const News = require("../models/News.model")

module.exports.newsController = {
    addNews: async((req,res)=>{
        try {
            News.create({
                heading: req.body.heading,
                text: req.body.text,
                category: req.body.category,
                img: req.body.img
            })
            res.json('news add')
        } catch (error) {
            res.json("news add error:" + error )
        }
    }),
    getNews: async((req,res)=>{
        try {
           const news = await News.find()
           return res.json(news) 
        } catch (error) {
            res.json( "ne polu4ilos" + error)
        }
    }),
    getNewsByCategory: async((req,res) =>{
        try {
            const newsCategory = await News.find({category: req.params.idCategory})
            return res.json(newsCategory)
        } catch (error) {
            return res.json(error)
        }
    }),
    getNewsById: async (req, res) => {
        try {
            const news = await News.findById(req.params.idNews)
            res.json(news)
        } catch (error) {
            return res.json(error)
        }
    }
}


