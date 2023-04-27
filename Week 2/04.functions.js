function walkTree(node) {
    if (node === null) {
        return;
    }
    // do something with node
    for (let i = 0; i < node.childNodes.length; i++) {
        walkTree(node.childNodes[i]);
    }
}

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
}


function addTwoNums(a, b) {

    try {
        console.log(a + b);

    } catch (err) {
        console.log(err)
    }
}
addTwoNums(5, "5")