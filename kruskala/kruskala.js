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
        this.edges.push([vertex1, vertex2, weight]);
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

let count = 0

function SortByWeiht(graph){
    for(let i = 1; i < graph.edges.length; i++){
        for(let j = i; j > 0; j--){
            count++
            if(graph.edges[j][2] < graph.edges[j-1][2]){
                const temp = graph.edges[j];
                graph.edges[j] = graph.edges[j-1];
                graph.edges[j-1] = temp;
            } else {
                break;
            }
        }
    }
}

SortByWeiht(graph)

let visited = new Array(graph.vertices.length).fill(false)

 let adjecent = 0
 let i = 0
 let end = graph.vertices.length - 1
function KruskalaSearch(graph, visited){
    while(!visited[end]){
        count++
        if(graph.edges[i] == undefined){
            return
        }
        start = graph.edges[i][0];
        adjecent = graph.edges[i][1]
        if(visited[start] && visited[adjecent]){
            i++
            continue
        }
        fillingGraph.addEdge(start, adjecent, graph.edges[i][2])
        i++
        if(visited[start]){
            visited[adjecent] = true
        }
        visited[start] = true
        // KruskalaSearch(graph, visited)  Dont know for sure is it really neccessary to call recursive function
    }
}

KruskalaSearch(graph, visited)

console.log("filling graph: ", fillingGraph);
console.log("count is: ", count);
