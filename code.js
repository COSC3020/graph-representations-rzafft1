
function convertToAdjMatrix (adjList)
{
    var matrix = Array(adjList.length).fill().map(() => Array(adjList.length).fill(0))
    for (let i = 0; i < adjList.length; i++)       
    {
        for (let m = 0; m < adjList[i].length; m++)
        {
            matrix[i][adjList[i][m]] = 1
        }
    }
    return matrix
}

/// testing convert to matrix //////////////////////////////////////////////////
var adjList1 = [[1], [0], [0,1]]
var adjList2 = [ [ 1, 4 ], [ 0, 2, 3, 4 ], [ 1, 3 ], [ 1, 2, 4 ], [ 0, 1, 3 ] ]
var res1 = convertToAdjMatrix(adjList1)
var res2 = convertToAdjMatrix(adjList2)
console.log(res1)
console.log(res2)
////////////////////////////////////////////////////////////////////////////////

function convertToAdjList (adjMatrix)
{
    var adjlist = Array(adjMatrix.length).fill().map(() => Array(0).fill())
    for (let i = 0; i < adjMatrix.length; i++)       
    {
        for (let m = 0; m < adjMatrix[i].length; m++)
        {
            if (adjMatrix[i][m] == 1) 
            {
                adjlist[i].push(m) 
            }
        }
    }
    return adjlist
}

/// testing convert to matrix //////////////////////////////////////////////////
var adjMatrix1 = [ [ 0, 1, 0 ], [ 1, 0, 0 ], [ 1, 1, 0 ] ]
var adjMatrix2 = [
  [ 0, 1, 0, 0, 1 ],
  [ 1, 0, 1, 1, 1 ],
  [ 0, 1, 0, 1, 0 ],
  [ 0, 1, 1, 0, 1 ],
  [ 1, 1, 0, 1, 0 ]
]
var res3 = convertToAdjList(adjMatrix1)
var res4 = convertToAdjList(adjMatrix2)
console.log(res3)
console.log(res4)
////////////////////////////////////////////////////////////////////////////////

