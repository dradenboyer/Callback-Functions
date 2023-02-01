// Write your code below

function hasUniqueChars(word){
    let hasUniqueChars = new Set([])
    for (let i = 0; i < word.length; i++){
        hasUniqueChars.add(word[i])
    }
    return hasUniqueChars.size === word.length
}

console.log(hasUniqueChars('Monday'))

const hasUnique = str => {
    for (let i=0; i<str.length; i++){
        for(let j = i +1; j <str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true

}

console.log(hasUnique('Monday'))
console.log(hasUnique('Moonday'))

const hasUniqueSet = str => new Set(str).size === str.length
// {
//     let uniqueSet = new Set(str)
//     console.log(uniqueSet)
//     // if(uniqueSet.size === str.length){
//     //     return true
//     // }else{
//     //     return false
//     // }
//     return uniqueSet.size === str.length
// }


console.log(hasUniqueSet("Moooooooooooooooooooooooo"))