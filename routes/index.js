import express from 'express';
import { createAuthor, getAuthors, getAuthorById, updateAuthor, deleteAuthor } from '../controllers/authorController.js';
import { createBook, getBooks, getBookById, updateBook, deleteBook } from '../controllers/bookController.js';

const router = express.Router();

// Rutas de Autores
router.post('/authors', createAuthor);
router.get('/authors', getAuthors);
router.get('/authors/:id', getAuthorById);
router.put('/authors/:id', updateAuthor);
router.delete('/authors/:id', deleteAuthor);

// Rutas de Libros
router.post('/books', createBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;
