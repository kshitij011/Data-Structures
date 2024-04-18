let height = [1,8,6,2,5,4,8,3,7]

var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length -1;

    while(left<right){
        let area = Math.min(height[left], height[right]) * (right - left);

        maxWater = Math.max(area, maxWater)
        if(height[left]<height[right]){
            left++;
        }else{
            right--
        }
    }

    return maxWater;
}

console.log(maxArea(height));