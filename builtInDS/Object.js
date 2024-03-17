//the key in object must be either string or symbol datatype.

const obj = {
    name:'COmp',
    age: 23,
    sayMyName: function(){
        console.log(`${this.name} is my name`);
    }
}

delete obj.age

console.log(obj);
obj.sayMyName()

// obj.keys() .values() .entries()