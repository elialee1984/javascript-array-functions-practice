const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
function getAllNames(array) {
    return array.name;
};

console.log(characters.map(getAllNames))

//2. Get array of all heights
function getAllHeights(array) {
    return array.height;
};

console.log(characters.map(getAllHeights))

//3. Get array of objects with just name and height properties
function namesAndHeights(array) {
    return { name: array.name, height: array.height };
}

console.log(characters.map(namesAndHeights));

//4. Get array of all first names
function firstNames(array) {
    return array.name.split(" ")[0];
}

console.log(characters.map(firstNames));


//***REDUCE***
//1. Get total mass of all characters
function totalMass(accumulator, array) {
    return accumulator + array.mass;
}

console.log(`The total mass is: ${characters.reduce(totalMass, 0)}.`);

//2. Get total height of all characters
function totalHeight(accumulator, array) {
    return accumulator + array.height;
}

console.log(`The total height is: ${characters.reduce(totalHeight, 0)}.`);


//3. Get total number of characters by eye color
function charByEyeColor(prev, array) {
    if (array.eye_color in prev) {
        prev[array.eye_color] += 1;
    } else {
        prev[array.eye_color] = 1;
    }
    return prev;
};
// console.log(characters.reduce(charByEyeColor, {}));
console.log(`The total number of characters by eye color is: ${characters.reduce(charByEyeColor, {})}.`);


// var charactersEyeColors = characters.reduce(function (prev, character) {
//     if (character.eye_color in prev) {
//         prev[character.eye_color] += 1;
//     } else {
//         prev[character.eye_color] = 1;
//     }
//     return prev;
// }, {});
// console.log(charactersEyeColors);

//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
