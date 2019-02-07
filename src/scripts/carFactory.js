import ActivityLogger from "./activityLogger"


const CarFactory = (make, model) => {
    const newCar = {
        "make": make,
        "model": model,
        "drive": function (destination) {
            console.log(`The ${this.model} goes VROOOOOOOOM!!!!!!! To ${destination}!`)
        }
    }
    ActivityLogger.add(`Created a ${newCar.make} ${newCar.model}.`)

    return newCar
}

export default CarFactory