const greetingMachine = (name,greeting) => {
    if(typeof name != "string" || typeof greeting(name) != "string"){
        return "You must use a name and a greeting function as arguments"
    } else if( typeof greeting(name) != "string"){
        return "YOu must use a greeting function as the second argument"
    }
    return greeting(name)
}

const hi = (name) => {
    return `Hi ${name}!`
}
const yo = (name) => {
    return `Yo ${name} what's up?`
}
const nice = (name) => {
    return `Nice to meet ya, ${name}`
}

console.log(greetingMachine('Draden', yo))


let greet = greetingMachine("Parker", yo)
console.log(typeof greet)
console.log(greet)

const multiplyTwo = num => {
    return num*2
}
console.log(greetingMachine(56,multiplyTwo))
console.log('===========================')


let people = {
    titles: ["Mr.", "Mrs.", "Dr.", "Professor", "President", "Supreme Leader"],
    firstNames: ["Draden", "Kaleb", "Jacob", "Matt", "Jordan"],
    lastNames: ["Boyer", "Boy", "Puckett", "Stoker", "Brunger"]
}

let greetings = {
    hi: (title, firstName, lastName) => {
        return `Hi, ${title} ${firstName} ${lastName}!`
    },
    yo:(title, firstName, lastName) => {
        return `Yo ${title} ${firstName} ${lastName} what's up?`
    },
    nice: (title, firstName, lastName) => {
        return `Nice to meet ya, ${title} ${firstName} ${lastName}!`
    }
}

// console.log(greetings.hi('Dre'))

const getRandom = arr => {
    let randInt = Math.floor(Math.random() * arr.length)
    return arr[randInt]
}

const getRandomKey = obj => {
    let count = 0
    for(let key in obj){
        count++
    }
    let randInt = Math.ceil(Math.random() * count)
    let currKey = 1
    for(let key in obj){
        if(currKey === randInt){
            return obj[key]
        }
        currKey++
    }
}

// const getRandom = arr =>[Math.floor(Math.random() * arr.length)]

const greetingMachineTwo = (personObj,functionObj) => {
    const { titles, firstNames, lastNames} = personObj 
    let title = getRandom(titles)
    let firstName = getRandom(firstNames)
    let lastName = getRandom(lastNames)


    let greeting = getRandomKey(functionObj)

    return greeting(title,firstName,lastName)
}

console.log(greetingMachineTwo(people,greetings))