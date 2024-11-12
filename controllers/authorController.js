import Author from '../models/Author.js';

// Crear un autor
export const createAuthor = async (req, res) => {
    const { name, bio } = req.body;
    try {
        const newAuthor = await Author.create({ name, bio });
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener todos los autores
export const getAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll();
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un autor por ID
export const getAuthorById = async (req, res) => {
    const { id } = req.params;
    try {
        const author = await Author.findByPk(id);
        if (!author) {
            return res.status(404).json({ message: 'Autor no encontrado' });
        }
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un autor
export const updateAuthor = async (req, res) => {
    const { id } = req.params;
    const { name, bio } = req.body;
    try {
        const author = await Author.findByPk(id);
        if (!author) {
            return res.status(404).json({ message: 'Autor no encontrado' });
        }
        author.name = name;
        author.bio = bio;
        await author.save();
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un autor
export const deleteAuthor = async (req, res) => {
    const { id } = req.params;
    try {
        const author = await Author.findByPk(id);
        if (!author) {
            return res.status(404).json({ message: 'Autor no encontrado' });
        }
        await author.destroy();
        res.status(200).json({ message: 'Autor eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
