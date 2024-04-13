class Solution{
    print2largest(arr,n){
        //code here
        let highestNum = -1;
        let secondNum
        for(let i=0; i<n; i++){
            if(arr[i]>highestNum){
                secondNum = highestNum;
                highestNum = arr[i]
            }
            else if(arr[i]>secondNum && arr[i]<highestNum){
                secondNum = arr[i]
            }
        }
        return secondNum
    }
}

const sh = new Solution
let arr = [12, 35, 1, 10, 34, 1]
console.log(sh.print2largest(arr, arr.length))