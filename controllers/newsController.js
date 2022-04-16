'use strict';

const newsData = require('../data/news');

const getAllNews = async (req, res, next) => {
    try {

        const newsList = await newsData.getNews();
        res.send(newsList);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getNews = async (req, res, next) => {
    try {
        const newsId = req.params.id;
        const news = await newsData.getById(newsId);
        res.send(news[0]);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addNews = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await newsData.createNews(data);
        res.send(insert[0]);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateNews = async (req, res, next) => {
    try {
        const data = req.body;
        const updated = await newsData.updateNews(data);
        res.send(updated[0]);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteNews = async (req, res, next) => {
    try {
        const newsId = req.params.id;
        const deleteNews = await newsData.deleteNews(newsId);
        res.status(200).json({
            message: "Delete News Successfully"
          });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllNews,
    getNews,
    addNews,
    updateNews,
    deleteNews
}