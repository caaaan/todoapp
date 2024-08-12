
type caterer = {
    name: string;
    address: string;
    phone: number;
}

type seats = {
    [key:string]:{}; //bunun yerine [key:string]: string; daha mantıklıymış
    
}
type plane = {
    model: string;
    flightNumber: string;
    timeOfDeparture: Date;
    timeOfArrival: Date;
    caterer: caterer;
    seats: seats;
}


let airplane: plane = {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
      name: "Special Food Ltd",
      address: "484, Some Street, New York",
      phone: 7867856751,
    },
    seats: {
      A1: "John Doe",
      A2: "Mark Doe",
      A3: "Sam Doe",
    },
  };