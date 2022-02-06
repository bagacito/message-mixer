let message = [];

const initialMessage = `This is what the stars reveal about you today.`

message.push(initialMessage);

const colors = {
    "BLACK": "black",
    "SILVER": "silver",
    "WHITE": "white",
    "GRAY": "gray",
    "MARRON": "marron",
    "RED": "red",
    "PURPLE": "purple",
    "GREEN": "green",
    "LIME": "lime",
    "OLIVE": "olive",
    "YELLOW": "yellow",
    "BLUE": "blue",
    "TEAL": "teal",
    "AQUA": "aqua",
}

let currentColor = colors[Object.keys(colors)[Math.floor(Math.random()*Object.keys(colors).length)]];

const colorOfTheDayMessage = `You should wear something ${currentColor} it will bring you good luck!`;

message.push(colorOfTheDayMessage);

const rate = {
    "BAD": "bad",
    "POOR": "poor",
    "AVERAGE": "average",
    "GOOD": "good",
    "GREAT": "great",
    "EXCEPTIONAL": "exceptional",
}

const sexDrive = rate[Object.keys(rate)[Math.floor(Math.random()*Object.keys(rate).length)]];

const sexDriveMessage = `Your sex drive will be ${sexDrive}.`

message.push(sexDriveMessage);

const workDecisions = rate[Object.keys(rate)[Math.floor(Math.random()*Object.keys(rate).length)]];

const workDecisionsMessage = `Your decisions at work will be ${workDecisions}.`;

message.push(workDecisionsMessage);



message.forEach(messageLine => {
    console.log(messageLine);
})






