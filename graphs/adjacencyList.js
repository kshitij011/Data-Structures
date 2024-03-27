//In adjacency list vertices are stored in map like data structure and every vertex stores a list of its adjacent vertices
//e.g: A-> B    B-> A, C    C-> B

adjaceneyList = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['A']
}

console.log(adjaceneyList['B']);