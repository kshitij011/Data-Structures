arr = [1, 2, 3, 4, 5, 6, 7]

function rotateArray(arr, k){
    const shift = arr.splice(arr.length - k)
    newArr = [...shift, ...arr]
    console.log(newArr);
}

rotateArray(arr, 4)