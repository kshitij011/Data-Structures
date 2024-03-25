class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        const index = this.hash(key)
        // this.table[index] = value
        if(!this.table[index]){
            this.table[index] = [[key, value]]
        } else {
            this.table[index].push([key, value])
        }
    }

    get(key){
        const index = this.hash(key);
        // return this.table[index]
        if(this.table[index]){
            for (let i = 0; i < this.table[index].length; i++) {
                if(this.table[index][i][0] === key){
                    return this.table[index][i][1]
                }
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        // this.table[index] = undefined
        if(this.table[index]){
            for (let i = 0; i < this.table[index].length; i++) {
                if(this.table[index][i][0] === key){
                    this.table[index].splice(i, 1)
                    return
                }
            }
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            // if(this.table[i]){
            //     console.log(i, this.table[i]);
            // }
            console.log(i, this.table[i]);

        }
    }
}

const table = new HashTable(4)

table.set("name", "Bruce")
table.set("mane", "Vruce")
table.set("age", 23)
table.set("mob", 91)

// table.set("name", "Bruce")

table.display()
table.remove('name')
table.display()