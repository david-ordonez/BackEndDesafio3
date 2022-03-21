const fs = require('fs');
const fm = require('./filemanager');

class Contenedor {
    constructor(fileName) {
        this._fileName = fileName;
    }

    async save(product) {
        try {
            const products = await fm.readFile(this._fileName);
            const ultimoId = products.length > 0 ? products[products.length - 1].id : 0;
            const nuevoId = ultimoId + 1;

            const newProduct = {...product,id: nuevoId };

            products.push(newProduct);
            
            await fm.saveFile(this._fileName,JSON.stringify(products,null,2));

            return nuevoId;

        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            const productos = await fm.readFile(this._fileName);
            return productos.find(element => element.id === id);
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const productos = await fm.readFile(this._fileName);
            return productos;       
        } catch (error) {
            throw error;
        }
    }

    async DeleteById(id) {
        try {
            const products = await fm.readFile(this._fileName);
            const filterProducts = products.filter(element => element.id !== id);            
            await fm.saveFile(this._fileName,JSON.stringify(filterProducts,null,2));
        } catch (error) {
            console.log(error);
        }
    }

    async DeleteAll() {
        try {
            const data = await fs.promises.writeFile(this._fileName, '');
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Contenedor;