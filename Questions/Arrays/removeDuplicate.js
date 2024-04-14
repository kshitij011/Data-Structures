arr = [0, 1, 1, 2, 2 ,2 ,2, 3, 3, 3,4]

function removeDuplicate(arr){
    for(let i =0; i<arr.length-1; i++){
        if(arr[i]===arr[i+1]){
            arr.splice(i+1,1);
            i--;
        }
    }
    return arr.length
    // newArr = new Array(new Set(arr))
}

console.log(removeDuplicate(arr));