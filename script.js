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
const ex2 = {image: "hallway.jpg", text: "I sure hope this doesn't lead me to my death", choices: ['', '' ,'']}
const ex3 = {image: "entrance.jpg", text: "HMMM, I wonder if i can fit through", choices: ['', '' ,'']}
const ex4 = {image: "gamingroom.jpg", text: "A gaming room; to me, just a room, thats how twisted my mind really is", choices: ['', '' ,'']}
const storyNodes = [exampleNode, ex2, ex3, ex4]

console.log(storyNodes[0].choices[0])

function displayNode(n) {
    document.getElementById("fort").innerText = storyNodes[n].text;
    document.getElementById("nite").src = storyNodes[n].image;
    document.getElementById("diversion").innerText = storyNodes[n].choices;
}
displayNode(0);

