const express = require('express');
const contenedor = require('./contenedor');

const app = express();
const PORT = 8080;

app.get('/productos', (req,res) => {
    const productos = new contenedor('productos.txt');    

    productos.getAll().then(allProducts => res.send(allProducts));
});

app.get('/productosrandom', async (req,res) => {
    const productos = new contenedor('productos.txt');

    const allProducts = await productos.getAll();
    const random = parseInt(Math.random() * allProducts.length) + 1;
    res.send(allProducts.find(item => item.id === random));
});

const server = app.listen(PORT,() => {
    console.log(`Server listening port: ${PORT}`);
});

server.on('error',error => console.log(`Error: ${error}`));