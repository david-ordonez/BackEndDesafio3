const contenedor =  require('./contenedor');

const testContenedor = new contenedor('productos.txt');

const testSave = () =>{
    console.log('========== Test - Save ==========');
    const primerElemento = {
        title: 'Escuadra',                                                                                                                                 
        price: 123.45,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'                                                                                                                                                               
    };
        
    testContenedor.save(primerElemento).then(res =>console.log(`Id del elemento insertado ${res}`));
    testContenedor.DeleteAll().catch(error => console.log(error));
}

const testGetById = () => {
    console.log('========== Test - Get By Id ==========');
    const primerElemento = {
        title: 'Escuadra',                                                                                                                                 
        price: 123.45,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'                                                                                                                                                               
    };
    const segundoElemento = {
      title: 'Calculadora',
      price: 234.56,
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
    }
    const tecerElemento = {
        title: 'Globo Terráqueo',
        price: 345.67,
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'
    };

    
    testContenedor.save(primerElemento).then(res =>console.log(`Insertado primer elemento id: ${res}`));
    testContenedor.save(segundoElemento).then(res => console.log(`Insertado segundo elemento id: ${res}`));
    testContenedor.save(tecerElemento).then(res => console.log(`Insertado tercero elemento id: ${res}`));
    testContenedor.getById(3).then(res => console.log(res));
    testContenedor.DeleteAll();
}

const testGetAll = () => {
    console.log('========== Test - Get All ==========');
    const primerElemento = {
        title: 'Escuadra',                                                                                                                                 
        price: 123.45,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'                                                                                                                                                               
    };
    const segundoElemento = {
      title: 'Calculadora',
      price: 234.56,
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
    }
    
    testContenedor.save(primerElemento).then(res =>console.log(`Insertado primer elemento id: ${res}`));
    testContenedor.save(segundoElemento).then(res => console.log(`Insertado segundo elemento id: ${res}`));

    testContenedor.getAll().then(res => console.log(res));
    testContenedor.DeleteAll();
}

const testDeleteById = () => {
    console.log('========== Test - Delete By Id ==========');
    const primerElemento = {
        title: 'Escuadra',                                                                                                                                 
        price: 123.45,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'                                                                                                                                                               
    };
    const segundoElemento = {
      title: 'Calculadora',
      price: 234.56,
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
    }
    
    testContenedor.save(primerElemento).then(res =>console.log(`Insertado primer elemento id: ${res}`));
    testContenedor.save(segundoElemento).then(res => console.log(`Insertado segundo elemento id: ${res}`));
    
    testContenedor.DeleteById(2);
    testContenedor.getAll((res) => console.log(res));    
}

const testDeleteAll = () => {
    console.log('========== Test - Delete All ==========');
    const primerElemento = {
        title: 'Escuadra',                                                                                                                                 
        price: 123.45,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'                                                                                                                                                               
    };
    const segundoElemento = {
      title: 'Calculadora',
      price: 234.56,
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
    }
    
    testContenedor.save(primerElemento).then(res =>console.log(`Insertado primer elemento id: ${res}`));
    testContenedor.save(segundoElemento).then(res => console.log(`Insertado segundo elemento id: ${res}`));
    
    testContenedor.DeleteAll();
    testContenedor.getAll((res) => console.log(res));
}

testSave();
testGetById();
testGetAll();
testDeleteById();
testDeleteAll();