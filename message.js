const animalArray = ['Cat', 'Dog', 'Cow', 'Duck', 'Bear', 'Frog', 'Snake', 'Owl']
const actionArray = ['says ', 'walks into ', 'eats some ']
const speak1Array = ['meow', 'bark', 'mooooooo', 'quack', 'roar', 'ribbit', 'hiss', 'who, who', 'Look at me, I am a hooman! I talk like this! Derp! Derp! Derp!']
const walk1Array = ['a bar', 'a house', 'a cave', 
'a park outside', 'a barn', 'a pond', 'a tree']
const eat1Array = ['kibble ', 'treats ', 'grass ', 'candy ', 'cake ', 'flies ', 'honey ', 'bread ', 'garbage ', 'broccoli ', 'cheezburgers ']
const speak2Array = ['and sings a tune.', 'and recites some poetry.', 'and recites Shakespeare.', 'and mutters to self.', 'and starts making fun of humans.', 'and asks about what is on TV?', 
'and demands to know why the food dish is empty.']
const walk2Array = [ 'and asked the bartender for a drink.', 'and slips on a banana peel', 'and pukes on the rug.', 'and decides to scratch the furniture.',
'and stops to take a nap.', 'and decides to skip instead.', 'and decides to steal all the jewerly in the house.']
const eat2Array = [ 'and decides ice cream is better', 'and throws up.', 'and asks for seconds',
'and decides they are not hungry', 'and says "What? This again?"', 'and spills the food all over the floor.']

const animalSelection = () => {
let animalResult = animalArray[Math.floor(Math.random() * animalArray.length)]
return animalResult
}

const actionResult = () => {
    let concatResult = ''
    let actionResult = actionArray[Math.floor(Math.random() * actionArray.length)]
    switch (actionResult){
        case 'says ':
            let speak1result = speak1Array[Math.floor(Math.random() * speak1Array.length)]
            let speak2result = speak2Array[Math.floor(Math.random() * speak2Array.length)]
            return actionResult + speak1result + speak2result
            break;
        case 'walks into ':
            let walk1result = walk1Array[Math.floor(Math.random() * walk1Array.length)]
            let walk2result = walk2Array[Math.floor(Math.random() * walk2Array.length)]
            return actionResult + walk1result + walk2result           
            break;
        case 'eats some ':
            let eat1result = eat1Array[Math.floor(Math.random() * eat1Array.length)]
            let eat2result = eat2Array[Math.floor(Math.random() * eat2Array.length)]
            return actionResult + eat1result + eat2result
            break;
        default:
            speak1result = speak1Array[Math.floor(Math.random() * speak1Array.length)]
            speak2result = speak2Array[Math.floor(Math.random() * speak2Array.length)]
            return actionResult + speak1result + speak2result
            break;

    }
}

const output = () => {
    const animal = animalSelection()
    const action = actionResult()
    console.log(`The ${animal} ${action}`)
}
output()