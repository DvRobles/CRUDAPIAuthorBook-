import Book from '../models/Book.js';

// Crear un libro
export const createBook = async (req, res) => {
    const { title, genre, author_id } = req.body;
    try {
        const newBook = await Book.create({ title, genre, author_id });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener todos los libros
export const getBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un libro por ID
export const getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({ message: 'Libro no encontrado' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un libro
export const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, genre, author_id } = req.body;
    try {
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({ message: 'Libro no encontrado' });
        }
        book.title = title;
        book.genre = genre;
        book.author_id = author_id;
        await book.save();
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un libro
export const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({ message: 'Libro no encontrado' });
        }
        await book.destroy();
        res.status(200).json({ message: 'Libro eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
