'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getNews = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('news');
        const newsList = await pool.request().query(sqlQueries.newslist);
        return newsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(newsId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('news');
        const news = await pool.request()
                            .input('newsId', sql.Int, newsId)
                            .query(sqlQueries.newsbyId);
        return news.recordset;
    } catch (error) {
        return error.message;
    }
}

const createNews = async (newsdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('news');
        const insertEvent = await pool.request()
                            .input('title', sql.NVarChar(100), newsdata.title)
                            .input('shortDescription', sql.NVarChar(1500), newsdata.shortDescription)
                            .input('poster', sql.NVarChar(1500), newsdata.poster)
                            .query(sqlQueries.createNews);                            
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateNews = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('news');
        const update = await pool.request()
                        .input('newsId', sql.Int, data.newsId)
                        .input('title', sql.NVarChar(100), data.title)
                        .input('shortDescription', sql.NVarChar(1500), data.shortDescription)
                        .input('poster', sql.NVarChar(1500), data.poster)
                        .query(sqlQueries.updateNews);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteNews = async (newsId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('news');
        const deleteEvent = await pool.request()
                            .input('newsId', sql.Int, newsId)
                            .query(sqlQueries.deleteNews);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getNews,
    getById,
    createNews,
    updateNews,
    deleteNews
}