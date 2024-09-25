class Vehicle {

    constructor(pmake, pmodel, pyear){
        this.make= pmake
        this.model=pmodel
        this.year=pyear
    }
    getDetails(){
        return `${this.year} ${this.make} ${this.model} `
    }
}



function displayForm(){

event.preventDefault()

let make= inputMake.value
let model= inputModel.value
let year= inputYear.value

let car = new Vehicle(make, model, year)
vehicleInfo.innerHTML= car.getDetails()
}