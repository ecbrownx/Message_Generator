const animalArray = ['Cat', 'Dog', 'Cow', 'Duck', 'Bear', 'Frog', 'Snake', 'Owl']
const actionArray = ['says ', 'walks into ', 'eats some ']
const speak1Array = ['meow ', 'bark ', 'mooooooo ', 'quack ', 'roar ', 'ribbit ', 'hiss ', 'who, who ', 'Look at me, I am a hooman! I talk like this! Derp! Derp! Derp! ']
const walk1Array = ['a bar ', 'a house ', 'a cave ', 
'a park outside ', 'a barn ', 'a pond ', 'a tree ']
const eat1Array = ['kibble ', 'treats ', 'grass ', 'candy ', 'cake ', 'flies ', 'honey ', 'bread ', 'garbage ', 'broccoli ', 'cheezburgers ']
const speak2Array = ['and sings a tune.', 'and recites some poetry.', 'and recites Shakespeare.', 'and mutters to self.', 'and starts making fun of humans.', 'and asks about what is on TV?', 
'and demands to know why the food dish is empty.']
const walk2Array = [ 'and asks the bartender for a drink.', 'and slips on a banana peel', 'and pukes on the rug.', 'and decides to scratch the furniture.',
'and stops to take a nap.', 'and decides to skip instead.', 'and decides to steal all the jewerly in the house.']
const eat2Array = [ 'and decides ice cream is better', 'and throws up.', 'and asks for seconds',
'and decides they are not hungry', 'and says "What? This again?"', 'and spills the food all over the floor.']

const arrayResult = (arr) => {
    let strValue = arr[Math.floor(Math.random() * arr.length)]
    return strValue
}

const animalSelection = () => {
    let animalResult = arrayResult(animalArray)
    return animalResult
}

const actionResult = () => {
    
    let actionResult = arrayResult(actionArray)
    switch (actionResult){
        case 'says ':
            let speak1result = arrayResult(speak1Array)
            let speak2result = arrayResult(speak2Array)
            return actionResult + speak1result + speak2result
        case 'walks into ':
            let walk1result = arrayResult(walk1Array)
            let walk2result = arrayResult(walk2Array)
            return actionResult + walk1result + walk2result           
        case 'eats some ':
            let eat1result = arrayResult(eat1Array)
            let eat2result = arrayResult(eat2Array)
            return actionResult + eat1result + eat2result
           
        default:
            speak1result = arrayResult(speak1Array)
            speak2result = arrayResult(speak2Array)
            return actionResult + speak1result + speak2result
    }
}

const output = () => {
    const animal = animalSelection()
    const action = actionResult()
    console.log(`The ${animal} ${action}`)
}

output()