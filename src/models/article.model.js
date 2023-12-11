const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const article = sequelize.define('article', {
    article_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    article_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = article;