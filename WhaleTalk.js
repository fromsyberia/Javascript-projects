let input = 'turpentine and turtles'
const vowels = ['a', 'e', 'i' , 'o' , 'u']
let resultArray = ['']



for (let i = 0; i < input.length; i++) {
if(input[i] === 'e' || input[i] === 'u'){
  resultArray[0] += input[i].toUpperCase()
  

  //resultArray.push(input[i])
  }

for (let k = 0; k < vowels.length; k++) {
if(input[i] === vowels[k])
  resultArray[0] += input[i].toUpperCase()
 

    }
}

 /* if(input === vowels) {
    
  }
*/

 
console.log(resultArray)
