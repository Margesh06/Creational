# Vehicle Factory - Factory Method and Singleton Pattern

This project demonstrates the use of **Factory Method** and **Singleton** design patterns in creating a dynamic vehicle creation system. Users can create vehicles (Cars or Bikes), log their creation with a unique ID, and display them on a webpage.

## Table of Contents
1. [Design Patterns Used](#design-patterns-used)
2. [Features](#features)
3. [How the System Works](#how-the-system-works)
4. [Code Structure](#code-structure)
5. [UI Integration](#ui-integration)
6. [Example Usage](#example-usage)

## Design Patterns Used

### 1. **Factory Method Pattern**
The **Factory Method** pattern is used to delegate the instantiation of different types of vehicles (Cars or Bikes) to specialized factories. This allows the creation of objects to be more flexible and extensible, without changing the core logic.

- **Creator**: The `VehicleFactory` abstract class defines a method `createVehicle` that is implemented by concrete factories.
- **Concrete Factories**: 
  - `CarFactory`: Responsible for creating `Car` objects.
  - `BikeFactory`: Responsible for creating `Bike` objects.
- **Concrete Products**: 
  - `Car`: Represents a car with `name`, `model`, and a method to drive.
  - `Bike`: Represents a bike with `name`, `model`, and a method to ride.
  
**Why Factory Method?**
- The Factory Method pattern promotes code flexibility by allowing the addition of new vehicle types without modifying existing code. Each factory is responsible for creating its respective object, adhering to the open/closed principle of object-oriented design.

### 2. **Singleton Pattern**
The **Singleton** pattern ensures that there is only one instance of the `Logger` class throughout the application. The logger generates unique vehicle IDs and logs every created vehicle.

- **Singleton Class**: 
  - `Logger`: This class implements a private constructor and provides a global access point through the `getInstance` method. It maintains a unique ID counter and stores log messages in memory.
  
**Why Singleton?**
- The Singleton pattern is ideal for maintaining a single logging system across the application. It ensures that no additional instances of the logger are created, thus maintaining consistency and managing log data efficiently.

## Features

- **Vehicle Creation**: Users can create vehicles (Cars or Bikes) by entering the name and model, then selecting the vehicle type (Car or Bike) from the dropdown.
- **Logging with Unique IDs**: Every time a vehicle is created, a unique ID is generated, and a log message is stored.
- **Dynamic UI Update**: Created vehicles are displayed dynamically on the UI with animations.

## How the System Works

1. **Vehicle Creation**:
   - When the user submits the form, the selected vehicle type, name, and model are used to create a `Vehicle`.
   - The `CarFactory` or `BikeFactory` creates the respective `Vehicle` object by implementing the Factory Method pattern.
   
2. **Logging**:
   - The `Logger` Singleton generates a unique vehicle ID and logs a message describing the vehicle. The logger ensures that each vehicle receives a unique ID across the application.

3. **UI Display**:
   - The vehicle information (ID, name, model, and type) is displayed on the webpage. The UI updates dynamically when new vehicles are created.

## Code Structure

### Interfaces
- **`Vehicle` (Abstract Product)**: Represents a generic vehicle with `name`, `model`, `type`, and a `drive()` method.

### Classes

- **Concrete Products**:
  - **`Car`**: Implements the `Vehicle` interface. It defines a car's attributes and behavior.
  - **`Bike`**: Implements the `Vehicle` interface. It defines a bike's attributes and behavior.
  
- **Creator**:
  - **`VehicleFactory`**: Abstract class that declares the `createVehicle` method, implemented by concrete factories.

- **Concrete Factories**:
  - **`CarFactory`**: Implements `VehicleFactory` and creates `Car` objects.
  - **`BikeFactory`**: Implements `VehicleFactory` and creates `Bike` objects.

- **Singleton**:
  - **`Logger`**: Ensures only one instance of the logger is created, responsible for logging vehicle creation with unique IDs.

## UI Integration

The project uses vanilla JavaScript to interact with the DOM:

- **Form Elements**:
  - Users enter vehicle details (name, model) and select the vehicle type (Car or Bike) from a dropdown menu.
  
- **Logging and Display**:
  - Each vehicle is created using the appropriate factory, and the `Logger` logs the creation. The log includes a unique vehicle ID.
  
- **Dynamic UI**:
  - The created vehicles are displayed dynamically on the page, with each new entry animated for better UX.

## Example Usage

1. **Create a Vehicle**: 
   - Enter a name and model for the vehicle, select the type (Car or Bike), and click "Create Vehicle".
   
2. **Logging**: 
   - A unique ID is generated, and a log message is displayed in the console and saved internally.
   
3. **UI Update**: 
   - The newly created vehicle is dynamically added to the page with a smooth animation.

## Conclusion

This project showcases how to implement both the **Factory Method** and **Singleton** design patterns effectively. The system dynamically creates and manages different types of vehicles while ensuring consistent logging through a singleton instance of the logger.


## Snapshots 

![image](https://github.com/user-attachments/assets/15b728be-174a-4629-9730-a84b3a5f585e)

![image](https://github.com/user-attachments/assets/c58dcf66-e783-4042-8e8d-94b80580514c)

