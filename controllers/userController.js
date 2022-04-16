'use strict';

const generateToken = require("../config/generateToken");
const matchPassword = require("../config/matchPassword");
const userData = require('../data/user');
const bcrypt = require("bcryptjs");

const login = async (req, res, next) => {
    try {
        const data = req.body;
        
        const user = await userData.getUserByUserName(data);
        
        if (user[0]) {
            bcrypt.compare(data.password, user[0].PasswordHash, (err, response) => {
                // res == true or res == false
                if(response){
                  res.status(200).json({
                      message: "Login Successfully",
                      response: {
                        _id: user[0].Id,
                        name: user[0].Name,
                        token: generateToken(user._id)
                      },
                    });
                }else{
                  res.status(400).json({
                      message: "Invalid password",
                    });
                }
              });
        }else{
            res.status(400).json({
                message: "Invalid userName",
              });
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const createUser = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await userData.createUser(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    login,
    createUser
}