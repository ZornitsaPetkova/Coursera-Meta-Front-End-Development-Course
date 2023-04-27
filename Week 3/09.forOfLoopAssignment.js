function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    for (var product of dairy) {
        console.log(product);
    }
}
logDairy();

function birdCan() {
    const animal = {

        canJump: true

    };

    const bird = Object.create(animal);

    bird.canFly = true;

    bird.hasFeathers = true;

    for (var key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`)
    }
}
birdCan();

function animalCan() {

    const animal = {

        canJump: true

    };

    const bird = Object.create(animal);

    bird.canFly = true;

    bird.hasFeathers = true;

    for (var key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`)
    }
    for (var property in animal) {
        console.log(`${property}: ${animal[property]}`);
    }
}
animalCan();