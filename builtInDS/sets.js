//Duplicate values are not allowed
//sets are dynamic in size
//sets do not maintain insertion order

const set = new Set([1, 2, 3])
set.add(4)
console.log(set.has(4))
set.delete(2)
console.log(set.size);
set.clear()

for(const item of set){
    console.log(item);
}