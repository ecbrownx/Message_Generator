# Plan

## Message

The message will consist of an animal action. There will be eight animals, four actions, and the result of the action. The result will sometimes be a wacky output for humor.

### Animals

Cat, Dog, Cow, Duck, Bear, Frog, Snake, Owl

### Actions

Speak, Walk, Eat, Play

### Result1

Speak - Meow, Bark, Moo, Quack, Roar, Ribbit, Hiss, Who
Walk - "into the house", "outside", "into a cave", "into a barn", "into a pond", "into a tree", "into a bar
Eat - kibble, treats, grass, candy, cake, flies, honey, bread, garbage out of the garbage can, broccoli, 

### Result2
Speak - "and sings a tune.", "recites poetry", "reads Shakespear out loud", "mutters to self", "starts insulting humans", "asks about what's on TV tonight", "and demands to know why the food dish is empty", 
Walks - "and asks the bartender for a drink.", "and slips on a banana peel.", "and pukes on the rug", "and decides the furniture needs a good scratching.", "and stops to take a nap", "decides to skip instead.", "and takes all the jewelry.
Eat - "and decides ice cream is better", 

Example, The bear walks into the hous and decides to skip instead.

## Plan

1. Animals Array does not affect other arrays.
2. Actions Array - Will affect Result1 and Result2 arrays (if/else statement). "Speak" will only allow Result1 and Result2 "speak" options and so forth.
3. Result1 Array - is the result of the Action Array, continues to Result2.
4. Results2 Array - is a continuation of Results1 Array.

Animals-->Actions-->Result1 + Result2
                 \
                  ->Result1 + Result2
                  \
                   ->Result1 + Result2