// this function returns an array of knight moves possible from the input which is given to it
// it takes in the current location of the knight and returns a range of possible moves form that location
// it doesn't include any duplicate moves or repeated moves or moves that goes outside the board 
function knightMoves(edge) {
    let possibleMoves = []
    let validMoveStr = []   
    let validMoves = []
    let condition = [0, 1, 2, 3, 4, 5, 6, 7]

    possibleMoves.push([edge[0]+2, edge[1]+1])
    possibleMoves.push([edge[0]+2, edge[1]-1])
    possibleMoves.push([edge[0]-2, edge[1]+1])
    possibleMoves.push([edge[0]-2, edge[1]-1])
    possibleMoves.push([edge[1]+2, edge[0]+1])
    possibleMoves.push([edge[1]+2, edge[0]-1])
    possibleMoves.push([edge[1]-2, edge[0]+1])
    possibleMoves.push([edge[1]-2, edge[0]-1])
  

    for (let i = 0; i < possibleMoves.length; i++) {
        if(condition.includes(possibleMoves[i][0]) === true &&
           condition.includes(possibleMoves[i][1]) === true && 
           validMoveStr.includes(possibleMoves[i].toString()) === false) {
            validMoveStr.push(possibleMoves[i].toString())
            validMoves.push({data: possibleMoves[i]})
        }
    }

    return validMoves
}



// this function takes in knightPosition and destination 
// then it step by step produces a BST and stops when the bst gets the destination node  
function buildKnightTree(knightPosition, destination) {
    let mother = {data: knightPosition}
    let queue = [mother]

    function lastNodeProcessor() {
        let lastNode = queue.shift()
        if(lastNode.data.toString() === destination.toString()) return
        else {
            let possibleMoves = knightMoves(lastNode.data)
            lastNode.children = possibleMoves
            for (let i = 0; i < possibleMoves.length; i++) {
                queue.push(possibleMoves[i])
            }

            return lastNodeProcessor()
        }
    }

    lastNodeProcessor()

    return mother
}

let mother = buildKnightTree([2, 1], [3, 3])

console.log(mother)