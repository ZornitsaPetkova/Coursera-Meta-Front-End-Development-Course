function wardrobe() {

    var clothes = [];

    clothes.push("jeans");
    clothes.push("skirt");
    clothes.push("scarf");
    clothes.push("handbag");
    clothes.push("shoes");

    console.log(clothes);

    clothes.pop("shoes");
    console.log(clothes);
    clothes.push("heels");
    console.log(clothes);
    console.log(clothes[2]);

    var favCar = {}
    favCar.color = "pink";
    favCar.covertible = true

    console.log(favCar);
}
wardrobe()



