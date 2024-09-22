// Factory Method Example: Vehicle Factory

// Abstract Product
interface Vehicle {
    name: string;
    model: string;
    type: string;
    drive(): string;
  }
  
  // Concrete Products
  class Car implements Vehicle {
    constructor(public name: string, public model: string) {}
    type = "Car";
    drive(): string {
      return `Driving a car: ${this.name} (Model: ${this.model})`;
    }
  }
  
  class Bike implements Vehicle {
    constructor(public name: string, public model: string) {}
    type = "Bike";
    drive(): string {
      return `Riding a bike: ${this.name} (Model: ${this.model})`;
    }
  }
  
  // Creator
  abstract class VehicleFactory {
    abstract createVehicle(name: string, model: string): Vehicle;
  
    orderVehicle(name: string, model: string): Vehicle {
      return this.createVehicle(name, model);
    }
  }
  
  // Concrete Factories
  class CarFactory extends VehicleFactory {
    createVehicle(name: string, model: string): Vehicle {
      return new Car(name, model);
    }
  }
  
  class BikeFactory extends VehicleFactory {
    createVehicle(name: string, model: string): Vehicle {
      return new Bike(name, model);
    }
  }
  
  // Singleton Logger to generate unique vehicle IDs and log
  class Logger {
    private static instance: Logger;
    private logData: string[] = [];
    private idCounter = 0;
  
    private constructor() {}
  
    static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
  
    log(message: string) {
      const vehicleId = `Vehicle-${++this.idCounter}`;
      this.logData.push(`${vehicleId}: ${message}`);
      console.log(`Log: ${vehicleId}: ${message}`);
      return vehicleId; // Return unique ID for the vehicle
    }
  
    getLogs(): string[] {
      return this.logData;
    }
  }
  
  // UI Integration: Handling user input
  window.onload = () => {
    const logger = Logger.getInstance();
    const vehicleSelect = document.getElementById("vehicle-select") as HTMLSelectElement;
    const vehicleNameInput = document.getElementById("vehicle-name") as HTMLInputElement;
    const vehicleModelInput = document.getElementById("vehicle-model") as HTMLInputElement;
    const logDiv = document.getElementById("log") as HTMLDivElement;
    const vehicleList = document.getElementById("vehicle-list") as HTMLDivElement;
    const form = document.getElementById("vehicle-form") as HTMLFormElement;
  
    form.addEventListener("submit", (event: Event) => {
      event.preventDefault(); // Prevent form submission refresh
  
      const selectedVehicle = vehicleSelect.value;
      const name = vehicleNameInput.value;
      const model = vehicleModelInput.value;
      
      if (!name || !model) return;
  
      let factory: VehicleFactory;
      if (selectedVehicle === "car") {
        factory = new CarFactory();
      } else if (selectedVehicle === "bike") {
        factory = new BikeFactory();
      } else {
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
  