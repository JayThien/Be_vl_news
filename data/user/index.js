'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');
const bcrypt = require("bcryptjs");

const getUserByUserName = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('user');
        const user = await pool.request()
                            .input('userName', sql.NVarChar(100), data.userName)
                            .query(sqlQueries.getUserByUserName);
        return user.recordset;
    } catch (error) {
        return error.message;
    }
}

const getUserById = async(id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('user');
        const user = await pool.request()
                            .input('id', sql.NVarChar(100), id)
                            .query(sqlQueries.getUserById);
        return user.recordset;
    } catch (error) {
        return error.message;
    }
}

const createUser = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('user');
        
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(data.password, salt);
        const create = await pool.request()
                        .input('name', sql.NVarChar(100), data.name)
                        .input('userName', sql.NVarChar(100), data.userName)
                        .input('passwordHash', sql.NVarChar(1500), passwordHash)
                        .query(sqlQueries.createUser);
        return create.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getUserByUserName,
    createUser,
    getUserById
}