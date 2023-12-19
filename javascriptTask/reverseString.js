function reverseString(str){
    
    let poeme=str.split(' ')
    let len=poeme.length
    for(let i=0;i<len;i++){
        poeme[i]=reverse(poeme[i])
    }
    let reverseSent=poeme.join(' ')
    return reverseSent
}
function reverse(str){
    let poeme=''
    let len =str.length
    for(let i=len-1;i>=0;i--){
        poeme+=str[i]
    }
    return poeme
}

let input="This is a sunny day"
let ans=reverseString(input)
console.log("Reverse String is: "+ ans)