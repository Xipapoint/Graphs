class Graph{
    constructor(){
        this.vertices = [];
        this.edges = []; 
        this.weight = [];
    }

    addVertices(vertex){
        if (!this.vertices.includes(vertex)) {
            this.vertices.push(vertex);
        }
    } 

    addEdge(vertex1, vertex2, weight) {
        this.edges.push([[vertex1, vertex2], [weight]]);
    }
}

const graph = new Graph()
for(let i = 0; i < 8; i++){
    graph.addVertices(i)
}

const fillingGraph = new Graph()
for(let i = 0; i < 8; i++){
    fillingGraph.addVertices(i)
}

graph.addEdge(0,1,3);
graph.addEdge(0,3,2);
graph.addEdge(0,2,8);
graph.addEdge(1,4,1);
graph.addEdge(1,5,6);
graph.addEdge(2,6,3);
graph.addEdge(3,6,4);
graph.addEdge(3,4,2);
graph.addEdge(5,6,5);
graph.addEdge(5,4,4);

let visited = new Array(graph.vertices.length).fill(false)

let adjecent = 0
let minWeihtEdgeIndex = 0
let minWeight = graph.edges[0][2]
let i = 0

console.log(graph.edges[0][2]);



function KruskalaSearch(graph, start, visited, fillingGraph) {
    adjecent++;
    i = 0
    while(adjecent < graph.vertices.length){
        if(graph.edges[i] != null && graph.edges[i][0][0].includes(start) && graph.edges[i][0][1].includes(adjecent)){
            if(start == 0 && !visited[start]){
                continue
            }
            if(graph.edges[i][1] < minWeight){
                graph.edges[i][1] = minWeight
            }
        }
    }

}

KruskalaSearch(graph, 0, visited, fillingGraph)