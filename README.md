[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12174513&assignment_repo_type=AssignmentRepo)
# Graph Representations

Implement a function that converts an adjacency list to an adjacency matrix for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

1. Adjacency list to matrix 
- this conversion is dependent on the number of edges. The number of edges in the graph will reflect the size of our adjacency list, since each nested list in the adjacency list corresponds to an edge in the graph, therefore this conversion is dependent on the number of edges, not the number of vertices
- the outer loop goes through each of the entry in the adjacency list to get a time complexity $O(E)$
- the inner nested loop goes through each edge (nested list) of the given vertice, and pushes a 1 to that position in the converted matrix. All other entries will be 0. Since we evaluate an edge for every nested list, the time complexity for the inner loop is dependent on the number of edges therefore its complexity is also $O(E)$
- the total time complexity would then be $O(E^2)$ where $E$ is the number of edges in the graph

2. Adjacency matrix to list 
- this conversion is dependent on the number of vertices and necessarily the number of edges. The number of 1's in the matrix is equal to the number of edges in the graph, however we need to check for an edge at every possible connection, therefore the conversions time complexity will not be dependent on the number of edges, since checking if the connection is a 1 or 0 is a constant time operation. 
- the outer loop goes through each of the vertices to get a time complexity $O(V)$
- the inner nested loop goes through each possible edge of the given vertice and checks if there is a 1 (an edge exists) or a 0 (an edge does not exist). The number of 1's and 0's in a given row will still be equal to the number of vertices in the graph since we check for an edge with every possible node. Therefore, the time complexity for the inner loop is not dependent on the number of edges, but on the number of vertices, so its complexity is also $O(V)$
- the total time complexity would then be $O(V^2)$ where $V$ is the number of vertices in the graph

## Bonus

Implement a function to convert an adjacency matrix to an adjacency list and
analyze it as above.
