let livingthing={
    alive:true,
    breathe(){
console.log("Breathing....")
    }
}

let animal={
    eats:true,
    walk(){
        console.log("animals walking...")
    }
}
animal.__proto__=livingthing

let bird={
    fly(){
        console.log("Bird flying...")
    }
}
bird.__proto__=animal
console.log(bird.alive)
bird.breathe()
console.log(bird.eats)
bird.walk()
bird.fly()

