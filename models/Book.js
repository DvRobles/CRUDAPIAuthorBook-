import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Book = db.define('Books', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING
    }
});

export default Book;
