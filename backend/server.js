const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a la API REST. Para interactuar, utiliza las rutas /api/hello, /api/json, o /api/csv.');
});

// Rutas de la API

// Rutas /api/hello
app.get('/api/hello', (req, res) => {
    res.json({ mensaje: 'Hola desde la API' });
});

app.get('/api/hello/:filename', (req, res) => {
    const { filename } = req.params;
    res.json({ mensaje: `Has solicitado el archivo: ${filename}` });
});

app.post('/api/hello', (req, res) => {
    const data = req.body;
    res.json({ mensaje: 'Datos recibidos', datos: data });
});

app.put('/api/hello/:filename', (req, res) => {
    const { filename } = req.params;
    const data = req.body;
    res.json({ mensaje: `Archivo ${filename} actualizado`, datos: data });
});

app.delete('/api/hello/:filename', (req, res) => {
    const { filename } = req.params;
    res.json({ mensaje: `Archivo ${filename} eliminado` });
});

// Rutas /api/json
app.get('/api/json', (req, res) => {
    res.json({ mensaje: 'Lista de archivos JSON', contenido: [] });
});

app.get('/api/json/:filename', (req, res) => {
    const { filename } = req.params;
    res.json({ mensaje: `Archivo JSON solicitado: ${filename}`, contenido: {} });
});

app.post('/api/json', (req, res) => {
    const data = req.body;
    res.json({ mensaje: 'Archivo JSON creado', datos: data });
});

app.put('/api/json/:filename', (req, res) => {
    const { filename } = req.params;
    const data = req.body;
    res.json({ mensaje: `Archivo JSON ${filename} actualizado`, datos: data });
});

app.delete('/api/json/:filename', (req, res) => {
    const { filename } = req.params;
    res.json({ mensaje: `Archivo JSON ${filename} eliminado` });
});

// Rutas /api/csv
app.get('/api/csv', (req, res) => {
    res.json({ mensaje: 'Lista de archivos CSV', contenido: [] });
});

app.get('/api/csv/:filename', (req, res) => {
    const { filename } = req.params;
    res.json({ mensaje: `Archivo CSV solicitado: ${filename}`, contenido: '' });
});

app.post('/api/csv', (req, res) => {
    const data = req.body;
    res.json({ mensaje: 'Archivo CSV creado', datos: data });
});

app.put('/api/csv/:filename', (req, res) => {
    const { filename } = req.params;
    const data = req.body;
    res.json({ mensaje: `Archivo CSV ${filename} actualizado`, datos: data });
});

app.delete('/api/csv/:filename', (req, res) => {
    const { filename } = req.params;
    res.json({ mensaje: `Archivo CSV ${filename} eliminado` });
});

// Puerto de la aplicación
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
