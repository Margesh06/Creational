"use strict";
// Factory Method Example: Vehicle Factory
// Concrete Products
class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
        this.type = "Car";
    }
    drive() {
        return `Driving a car: ${this.name} (Model: ${this.model})`;
    }
}
class Bike {
    constructor(name, model) {
        this.name = name;
        this.model = model;
        this.type = "Bike";
    }
    drive() {
        return `Riding a bike: ${this.name} (Model: ${this.model})`;
    }
}
// Creator
class VehicleFactory {
    orderVehicle(name, model) {
        return this.createVehicle(name, model);
    }
}
// Concrete Factories
class CarFactory extends VehicleFactory {
    createVehicle(name, model) {
        return new Car(name, model);
    }
}
class BikeFactory extends VehicleFactory {
    createVehicle(name, model) {
        return new Bike(name, model);
    }
}
// Singleton Logger to generate unique vehicle IDs and log
class Logger {
    constructor() {
        this.logData = [];
        this.idCounter = 0;
    }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        const vehicleId = `Vehicle-${++this.idCounter}`;
        this.logData.push(`${vehicleId}: ${message}`);
        console.log(`Log: ${vehicleId}: ${message}`);
        return vehicleId; // Return unique ID for the vehicle
    }
    getLogs() {
        return this.logData;
    }
}
// UI Integration: Handling user input
window.onload = () => {
    const logger = Logger.getInstance();
    const vehicleSelect = document.getElementById("vehicle-select");
    const vehicleNameInput = document.getElementById("vehicle-name");
    const vehicleModelInput = document.getElementById("vehicle-model");
    const logDiv = document.getElementById("log");
    const vehicleList = document.getElementById("vehicle-list");
    const form = document.getElementById("vehicle-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission refresh
        const selectedVehicle = vehicleSelect.value;
        const name = vehicleNameInput.value;
        const model = vehicleModelInput.value;
        if (!name || !model)
            return;
        let factory;
        if (selectedVehicle === "car") {
            factory = new CarFactory();
        }
        else if (selectedVehicle === "bike") {
            factory = new BikeFactory();
        }
        else {
            return;
        }
        // Create the vehicle
        const vehicle = factory.orderVehicle(name, model);
        // Log the vehicle creation with unique ID
        const vehicleId = logger.log(vehicle.drive());
        // Add vehicle to UI with animation
        const vehicleItem = document.createElement("div");
        vehicleItem.className = "vehicle-item";
        vehicleItem.innerHTML = `<strong>${vehicleId}</strong>: ${vehicle.type} - ${vehicle.name} (Model: ${vehicle.model})`;
        vehicleList.appendChild(vehicleItem);
        // Clear inputs
        vehicleNameInput.value = '';
        vehicleModelInput.value = '';
        // Animate new vehicle entry
        setTimeout(() => {
            vehicleItem.classList.add("visible");
        }, 10);
    });
};
