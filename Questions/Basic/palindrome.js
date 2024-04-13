const pal = (num) => {
    return num === +num.toString().split('').reverse().join('')
}

console.log(pal(124321));