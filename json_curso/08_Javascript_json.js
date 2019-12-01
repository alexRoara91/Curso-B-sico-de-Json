//imaginemos que recibimos este objeto json de un API REST
var obj = '{"nombre" : "Anaximandro","nota" : "sobresaliente"}';

var obj_json = JSON.parse(obj);

console.log("json.parse: ");
console.table(obj_json);

console.log("\njson.parse: propiedad 'nombre': ");
console.log(obj_json.nombre);

console.log("\njson.parse: propiedad 'nota': ");
console.log(obj_json.nota);

var str_cadena = JSON.stringify(obj_json);
console.log("\nobjeto json stringifado");
console.log(str_cadena);