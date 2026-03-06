function describeRoom(str) {
    if (str === "kitchen.jpg") {
        return "GAHDAHM, this kitchen looks lit!!";
    } else if (str === "hallway.jpg") {
        return "Lets's see if i can fit through this hallway";
    } else if (str === "entrance.jpg") {
        return "All doors leave to the othere side"
    } else {
        return "YEYE"
    }
}
console.log(describeRoom("kitchen.jpg"));

const exampleNode = {
    image: "kitchen.jpg",
    text: "AHA!, a kitchen!, that will be usefull If i am ever in need of... A kitchen ",
    choices: ['Open the bottle', 'Close the radioactive closet (optional)', 'Go down the hallway'],
};

console.log(exampleNode.choices[0]);
const ex2 = {image: "hallway.jpg", text: ""}
const storyNodes = [exampleNode, ex2]