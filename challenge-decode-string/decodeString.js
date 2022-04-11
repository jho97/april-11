// Write your code below this line
// needs more work to improve
// const decoder = code => {
//     let str = code.split('')
//     let letters = []
//     for (let i=0; i < str.length; i++) {
//         if (!isNaN(str[i])) {
//             let solution = code[i].charCodeAt() + str[0]
//             console.log(solution)
//             emptyStr += String.fromCharCode(solution)
//         } 
//     }
//     return emptyStr
// }


//teammates code
const decoder = code => {
    let solution = ''
    let decipher = Number(code[0])
    console.log(decipher)
    for (let i = 1; i < code.length; i++) {
        let strValue = code[i].charCodeAt() + decipher 
        solution += String.fromCharCode(strValue)
    }
    return solution
}

console.log(decoder("2fcjjm"))
