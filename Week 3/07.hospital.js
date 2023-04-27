// OOP principles 

class Hospital {
    useBed() {
        console.log("Pacient of this hospital.")
    }
}
class EmergencyRoom extends Hospital {
    useBed() {
        super.useBed() 
        console.log("This pacient needs a doctor, stat.")
    }
}
class Doctor extends EmergencyRoom {
    useBed() {
        console.log("I need to perform a surgery.")
    }
}
var roomOne = new EmergencyRoom();
var surgeon = new Doctor();
roomOne.useBed();
surgeon.useBed();


class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }
    turboOn() {
        console.log("Turbo is ON");
    }
}
const car1 = new Car("blue", 140);
car1.turboOn();