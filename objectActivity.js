let car = {
    type: "Honda",
    model: "Civic",
    color: "Blue"
  };
  
  console.log("Type of car:", typeof car);

  car.type = "Toyota";
  console.log("Updated car:", car);

  car.wheels = 4;
  console.log("Car with wheels:", car);