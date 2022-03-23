//Without the DI:
class Engine{
    constructor(){} ;
};
class Tires{
    constructor(){};
}
class Car{
    engine;
    tires;
    constructor() {
        this.engine = new Engine();
        this.tires = new Tires();
    }
}
//if we add a new parameter on class Engine, class Car breaks, so code is not flexible

// With DI

class carDI{
    engine;
    tires;
    constructor(engine, tires) {
        this.engine = engine;
        this.tires = tires;
    }
}
//to make a car, now you need:
var myEngine = new Engine();
var myTires = new Tires();
var myCar = new carDI(myEngine, myTires);

//But if CarDI gets more paramethers, the list gets bigger.
var myTires = new Tires();
var myEngine = new Engine();
var depA = new DepA();
var depB = new DepB();
var depZ = new DepZ();
var myCar = new carDI(myEngine, myTires,depA,depB,depZ);

//So, the best case is to use injection