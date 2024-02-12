class Graph{
    constructor(){
        this.vertices = [];
        this.edges = []; 
        this.weight;
    }

    addVertices(vertex){
        if (!this.vertices.includes(vertex)) {
            this.vertices.push(vertex);
        }
    } 

    addEdge(vertex1, vertex2, weight) {
        this.edges.push([vertex1, vertex2, weight]);
    }
}

const graph = new Graph()
for(let i = 0; i < 8; i++){
    graph.addVertices(i)
}

graph.addEdge(0,1,3);
graph.addEdge(0,3,2);
graph.addEdge(0,2,8);