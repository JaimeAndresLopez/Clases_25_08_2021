// class calculadora{
//     constructor(NUM1, NUM2){
//         this.num1 = NUM1;
//         this.num2 = NUM2;  //Tomo los argumentos de la constructor de calculadora para asignarlo como entidade
//     }
//     suma(){
//         return `Suma de la clase calculadora ${this.num1 + this.num2}`;
//     }
// }

// class avion extends calculadora{ //Creo una nueva clase heredando la clase calculadora

//      constructor(NUM1, NUM2, ALAS, MODELO){
//          super(NUM1, NUM2);
//          this.alas = ALAS;
//          this.modelo = MODELO;
//      }
//      suma(){
//          return `El calculo para construir el avion es de : ${this.num1 + this.num2 + 10}`;
//      }
//      construirAvion(){
//          return this.suma();
//      }
// }

// let llave = new calculadora(1,3);
// console.log(llave.suma());

// let avioneta = new avion(5,5,2,"Jet");
// console.log(avioneta.suma());

// class Personaje{
//     Nombre;//Public Publico
//     #poder;//Private Privado
//     _salusar;//Protected Protejido
//     static personaje = null;
//     constructor(){

//     }
//     static getInstance(){
//         if(!(Personaje.personaje instanceof Object)){
//             Personaje.personaje = new Personaje();
//         }
//         return Personaje.personaje;

//     }
//     #saludarConLaMano(p1="Hola Como estas"){
//         return p1;
//     }
//     get getsaludarConLaMano(){
//         return this.#saludarConLaMano();
//     }
//     set setsaludarConLaMano(SALUDO){
//         return this.#saludarConLaMano(SALUDO);
//     }
//     get getpoder(){
//         return this.#poder;
//     }
//     set setpoder(PODER){
//         this.#poder = PODER;
//     }
// }
// class Hechicero extends Personaje{
//     static hechicero = null;
//     constructor(){
//         super(200);
//     }
//     static getInstance(){
//         if(!(Hechicero.personaje instanceof Object)){
//             Personaje.personaje = new Personaje();
//         }
//         return Personaje.personaje;

//     }
//     obtener(){
//         return this.getpoder;
//     }
// }
// Personaje.getInstance().setpoder = 200;
// console.log(Personaje.getInstance());


class Personaje{
    #poder;//Private Privado
    static personaje = null;
    constructor(p1){
        this.#poder = p1;
    }
    static getInstance(p1){
        if(!(Personaje.personaje instanceof Object)){
            Personaje.personaje = new Personaje(p1);
        }
        return Personaje.personaje;
    }
    get getpoder(){
        return this.#poder;
    }
    set setpoder(PODER){
        this.#poder = PODER;
    }
}
class Hechicero extends Personaje{
    static hechicero = null;
    constructor(p1){
        super(p1);
    }
    static getInstance(){
        if(!(Hechicero.hechicero instanceof Object)){
            Hechicero.hechicero = new Hechicero(200);
        }
        return Hechicero.hechicero;

    }
    saludo(){
        return "Hola Como estas";
    }
}

console.log(Personaje.getInstance(5));
console.log(Personaje.getInstance().getpoder);
console.log(Hechicero.getInstance(100).getpoder);
console.log(Hechicero.getInstance().setpoder = 500);
console.log(Hechicero.getInstance().getpoder);
console.log(Hechicero.getInstance().saludo());
