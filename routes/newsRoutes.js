'use strict';

const express = require('express');
const newsController = require('../controllers/newsController');
const { protect } = require("../config/authMiddleware");
const router = express.Router();

router.get('/news', newsController.getAllNews);
router.route("/news/:id").get(protect, newsController.getNews);
router.route("/createNews").post(protect, newsController.addNews);
router.route("/updateNews").post(protect, newsController.updateNews);
router.route("/deleteNews/:id").get(protect, newsController.deleteNews);


module.exports = {
    routes: router
}