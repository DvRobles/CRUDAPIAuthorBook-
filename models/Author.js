import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Book from './Book.js'; // Importar Book.js

const Author = db.define('Authors', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.TEXT
    }
});

// Relación uno a muchos (un autor puede tener muchos libros)
Author.hasMany(Book, { foreignKey: 'author_id' });
Book.belongsTo(Author, { foreignKey: 'author_id' });

export default Author;
