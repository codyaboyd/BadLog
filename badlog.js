const logInsults = [
    "Were you dropped as a child?",
    "Is that the best you can do?",
    "My grandmother could code better!",
    "Have you tried turning your brain off and on again?",
    "Even a broken clock is right twice a day, unlike that code.",
    "Your code is so bad, it's giving me a headache.",
    "I've seen better code in my sleep.",
    "You must have skipped coding 101.",
    "It's like you're playing a game of code roulette.",
    "I hope your code doesn't reflect your driving skills.",
    "Did you learn to code from a cereal box?",
    "I wouldn't wish your code on my worst enemy.",
    "You should apologize to your computer for running that code.",
    "I've seen more organized chaos in a tornado.",
    "This code is an insult to all programmers.",
    "You're like the Picasso of bad code.",
    "Do you even know what an if statement is?",
    "I've seen toddlers write better code.",
    "Your code is like a never-ending horror movie.",
    "My cat could type better code with its paws.",
    "This code should come with a warning label.",
    "I didn't know code could get this bad.",
    "I hope you have a good backup strategy.",
    "I'm not sure if this is code or a cry for help.",
    "I bet your computer cries when it runs your code.",
    "You must have a black belt in coding incompetence.",
    "I didn't know code could make me physically ill.",
    "I wouldn't wish this code on my worst enemy's worst enemy.",
    "Your code is like a virus for computers and human brains.",
    "Have you considered a career change? Coding might not be your thing.",
    "I've seen better code on a fortune cookie.",
    "Your code is so bad, it's a security risk.",
    "Your code is like a bad dream I can't wake up from.",
    "I've met 5-year-olds who code better than you.",
    "Your code is the reason aliens won't visit us.",
    "I've seen spaghetti code, but this is linguini.",
    "You must be a professional at writing bad code.",
    "I'd say you're coding blindfolded, but that would be an insult to blindfolded coders.",
    "Your code is a one-way ticket to bugsville.",
    "I hope you have good liability insurance for your code.",
    "I've seen better code on a bathroom stall.",
    "Your code is so bad, it's a new form of art.",
    "Is your code an attempt at avant-garde programming?",
    "I'd say your code is a masterpiece, but I'd be lying.",
    "Your code is the reason why AI will never take over programming jobs.",
    "I didn't know code could be used for torture until I saw yours.",
    "Your code is like a car crash - I can't look away.",
    "This code is an insult to binary.",
    "I can't believe I have to debug this mess.",
    "I hope you have a good excuse for this code.",
    "Your code is like a never-ending loop of pain.",
    "I've seen better code on the dark web.",
    "Your code is like a bad trip without the drugs.",
    "I'd rather use punch cards than read your code.",
    "Your code is so bad, it's a global threat.",
    "I bet your code has its own gravitational pull.",
    "I'd call your code trash, but that would be an insult to trash.",
    "I'm starting to think you're writing code in a foreign language you don't understand.",
    "Your code is like a ticking time bomb.",
    "I hope your code doesn't have siblings, because it's the black sheep of the family.",
    "I'd say your code is a work of art, but that would be an insult to art.",
    "Your code is the reason why aliens won't communicate with us.",
    "I've seen better code written by monkeys at a typewriter.",
    "Your code is like a haunted house - full of surprises, and none of them good.",
    "I'd rather have a root canal than work with your code.",
    "Your code is like a bad omen for the project.",
    "I hope you're not getting paid for this code.",
    "I've seen better code on the back of a cereal box.",
    "Your code is like a bad joke that never ends.",
    "I'd say your code is a trainwreck, but that would be an insult to trainwrecks.",
    "Your code is like a puzzle with missing pieces, and it's not fun to solve.",
    "I hope your code is a joke, because it's making me laugh.",
    "I've seen better code in my nightmares.",
    "Your code is like a virus that infects my brain.",
    "I'd say your code is a masterpiece, but that would be an insult to masterpieces.",
    "Your code is like a car crash in slow motion.",
    "I hope your code is in the Witness Protection Program, because it's a danger to itself.",
    "I'd rather read the phone book than your code.",
    "Your code is like a bad soap opera - full of drama and bad acting.",
    "Your code is like a black hole - it sucks everything into it.",
    "I hope your code has a good therapist, because it needs one.",
    "I'd say your code is a masterpiece of chaos, but that would be too kind.",
    "Your code is like a bad tattoo - it's there forever.",
    "Your code is like a bad smell that lingers in the room.",
    "I hope your code is not contagious.",
    "I'd say your code is a work of fiction, but that would be an insult to fiction.",
    "Your code is like a maze with no exit.",
    "I'd say your code is a rollercoaster, but that would be an insult to rollercoasters.",
    "Your code is like a time bomb waiting to explode.",
    "I hope your code is not a reflection of your personality.",
    "I'd say your code is a masterpiece of confusion, but that would be an understatement.",
    "Your code is like a never-ending nightmare.",
    "Your code is like a bad hair day - it's all over the place.",
    "I hope your code is not a reflection of your IQ.",
    "I'd say your code is a symphony of errors, but that would be an insult to symphonies.",
    "Your code is like a bad song that gets stuck in my head.",
    "Your code is like a bad dream that I can't wake up from.",
    "I hope your code is not a reflection of your work ethic.",
    "I'd say your code is a masterpiece of incompetence, but that would be too generous.",
    "Your code is like a bad movie with no plot.",
    "Your code is like a bad meal that leaves a bad taste in my mouth.",
    "I hope your code is not a reflection of your intelligence.",
    "I'd say your code is a masterpiece of disaster, but that would be an insult to disasters.",
    "Your code is like a bad trip with no return ticket.",
    "Your code is like a bad joke that keeps getting worse.",
    "I hope your code is not a reflection of your attention to detail.",
    "I'd say your code is a masterpiece of confusion, but that would be too kind.",
    "Your code is like a bad habit that's hard to break.",
    "Your code is like a bad movie with a terrible ending.",
    "I hope your code is not a reflection of your problem-solving skills.",
    "I'd say your code is a masterpiece of chaos, but that would be an understatement.",
    "Your code is like a bad book with no plot or character development.",
    "Your code is like a bad video game with no instructions.",
    "I hope your code is not a reflection of your decision-making abilities.",
    "I'd say your code is a symphony of errors, but that would be an insult to symphonies.",
    "Your code is like a bad website with broken links.",
    "Your code is like a bad app that crashes on launch.",
    "I hope your code is not a reflection of your communication skills.",
    "I'd say your code is a masterpiece of incompetence, but that would be too generous.",
    "Your code is like a bad product with no customer support.",
    "Your code is like a bad service that leaves customers frustrated.",
    "I hope your code is not a reflection of your professionalism.",
    "I'd say your code is a masterpiece of disaster, but that would be an insult to disasters.",
    "Your code is like a bad idea that should never have been implemented.",
    "Your code is like a bad design that's hard to use.",
];

const errorInsults = [
    "Oops! Another mistake? Color me surprised.",
    "Are you even trying?",
    "Error? Must be a day that ends in 'y'.",
    "Did your rubber duck quit on you?",
    "Your code is bad and you should feel bad!",
    "You should file a bug report against your own code.",
    "This code is a trainwreck waiting to happen.",
    "I hope you have a good therapist for your code issues.",
    "You're the reason why software has warranties.",
    "Your code is like a maze with no exit.",
    "Even the compiler is shaking its head at your code.",
    "I'd say your code is a dumpster fire, but that's an insult to dumpsters.",
    "You must have a degree in code destruction.",
    "I've seen more graceful crashes at a demolition derby.",
    "You code like it's opposite day.",
    "I can't decide if this is code or abstract art.",
    "This code is like a bad horror movie sequel - it just won't die.",
    "I've seen better error handling in a choose-your-own-adventure book.",
    "Your code is a monument to human error.",
    "Is your code a secret government experiment?",
    "I bet your code has its own fan club... of masochists.",
    "Even my grandma writes better code, and she's been dead for 10 years.",
    "You must be allergic to good code.",
    "I hope your code never sees the light of production.",
    "Your code is like a comedy of errors, without the comedy.",
    "I've seen more elegant solutions in a Rube Goldberg machine.",
    "You code like a one-legged duck trying to tap dance.",
    "This code is an affront to logic and reason.",
    "I'd say your code is a masterpiece, but that would be a lie.",
    "Your code is the reason why aliens won't visit us.",
    "I'm not sure if your code is a joke or a tragedy.",
    "I've seen better code from a 404 page.",
    "Your code is like a bad dream that never ends.",
    "You must have a PhD in coding disasters.",
    "I'd say your code is a work of fiction, but that would be an insult to fiction.",
    "Your code is like a broken record - it keeps repeating the same mistakes.",
    "I hope your code is not a reflection of your life choices.",
    "I'd say your code is a masterpiece of confusion, but that would be too kind.",
    "Your code is like a broken compass - it has no sense of direction.",
    "Your code is like a broken promise - it's full of empty words.",
    "I hope your code is not a reflection of your values.",
    "I'd say your code is a symphony of errors, but that would be an insult to symphonies.",
    "Your code is like a broken toy - it's not fun to play with.",
    "Your code is like a broken clock - it's right twice a day, but the rest of the time it's a mess.",
    "I hope your code is not a reflection of your character.",
    "I'd say your code is a masterpiece of incompetence, but that would be too generous.",
    "Your code is like a broken puzzle - it's missing pieces and the ones that are there don't fit.",
    "Your code is like a broken machine - it's constantly malfunctioning.",
    "I hope your code is not a reflection of your integrity.",
    "I'd say your code is a masterpiece of disaster, but that would be an insult to disasters.",
    "Your code is like a broken phone - it drops calls and the battery dies quickly.",
    "Your code is like a broken TV - it only shows static.",
    "I hope your code is not a reflection of your ethics.",
    "I'd say your code is a work of fiction, but that would be an insult to fiction.",
    "Your code is like a broken car - it's always in the shop and never runs properly.",
    "Your code is like a broken website - it's slow and full of errors.",
    "I hope your code is not a reflection of your professionalism.",
    "I'd say your code is a masterpiece of confusion, but that would be an understatement.",
    "Your code is like a broken app - it crashes and freezes constantly.",
    "Your code is like a broken product - it's unreliable and falls apart easily.",
    "I hope your code is not a reflection of your competence.",
    "I'd say your code is a symphony of errors, but that would be an insult to symphonies.",
    "Your code is like a broken service - it provides no value and only causes problems.",
    "Your code is like a broken tool - it's more of a hindrance than a help.",
    "I hope your code is not a reflection of your intelligence.",
    "I'd say your code is a masterpiece of incompetence, but that would be too generous.",
    "Your code is like a broken idea - it's flawed from the start.",
    "Your code is like a broken design - it's confusing and hard to use.",
    "I hope your code is not a reflection of your problem-solving skills.",
    "I'd say your code is a masterpiece of disaster, but that would be an insult to disasters.",
    "Your code is like a broken plan - it never works out as intended.",
    "Your code is like a broken recipe - it produces inedible results.",
    "I hope your code is not a reflection of your creativity.",
    "I'd say your code is a work of fiction, but that would be an insult to fiction.",
    "Your code is like a broken dream - it's unachievable and unrealistic.",
    "Your code is like a broken vision - it lacks clarity and direction.",
    "I hope your code is not a reflection of your leadership.",
    "I'd say your code is a masterpiece of confusion, but that would be too kind.",
    "Your code is like a broken promise - it's empty and unfulfilled.",
    "Your code is like a broken commitment - it's unreliable and inconsistent.",
];

function getRandomItem(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

function logWithInsult(...args) {
    console.log(...args);
    console.log(getRandomItem(logInsults));
}

function errorWithInsult(...args) {
    console.error(...args);
    console.error(getRandomItem(errorInsults));
}

module.exports = {
    log: logWithInsult,
    error: errorWithInsult
};

