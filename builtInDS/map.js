//map is an unordered collection of key value pairs.
// both keys and values can be of any data type

//Maps can be iterated by for of loop
//Apart from storing data, you can attach functionality to an object
//whereas methods are restricted to storing data

// the values are written in form of arrays inside the map

const map = new Map([['a', 1], ['b', 2]])
//here a and b are keys and 1, 2 are values

map.set('c', 3)
map.delete('c')
console.log(map.has('a'));
for(const [key, value] of map){
    console.log(`${key}: ${value}`)
}
