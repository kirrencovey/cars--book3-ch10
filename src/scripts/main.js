import CarFactory from "./carFactory"
import GarageManager from "./garage"
import ActivityLogger from "./activityLogger"
import printToDOM from "./printToDOM"

// Create two cars using the function you imported
const mustang = CarFactory("Ford", "Mustang")
const accord = CarFactory("Honda", "Accord")
const santafe = CarFactory("Hyundai", "Santa Fe")
const sierra = CarFactory("GMC", "Sierra")

// Drive the cars for a while
console.log(mustang.drive("the grocery store"))
console.log(accord.drive("Indianapolis"))

// Park the cars in the garage
GarageManager.store(mustang)
GarageManager.store(accord)
GarageManager.store(santafe)
GarageManager.store(sierra)

// console.table(garage)
console.table(GarageManager.retrieve(sierra))

printToDOM(GarageManager.html(), "#garageInventory")
printToDOM(ActivityLogger.html(), "#logMessages")