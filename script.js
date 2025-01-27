
/*
This function returns all 8 possible moves of a knight regardless of its position on the board.
The moves are generated as absolute positions and may include invalid ones
(e.g., positions outside the board).
*/

function knightLader(move, edge) {
    let b = move
    
    move.push([edge[0]+2, edge[1]+1])
    move.push([edge[0]+2, edge[1]-1])
    move.push([edge[0]-2, edge[1]+1])
    move.push([edge[0]-2, edge[1]-1])
    
    move.push([edge[1]+2, edge[0]+1])
    move.push([edge[1]+2, edge[0]-1])
    move.push([edge[1]-2, edge[0]+1])
    move.push([edge[1]-2, edge[0]-1])

    return b
}

/*Only filters moves returned by 'knightLader' that has went outside the board
*/
function possibleMoves(edge) {
    let move = []
    let validMoves = []
    let condition = [0, 1, 2, 3, 4, 5, 6, 7]

    knightLader(move, edge)

    for (let i = 0; i < move.length; i++) {
        if(condition.includes(move[i][0]) === true && condition.includes(move[i][1]) === true) {
            validMoves.push(move[i])
        }
    }
    
    return validMoves 
}



console.log("result: ", possibleMoves([3, 3]))



function includeArray(container, array) {
    let result = false

    for (let i = 0; i < container.length; i++) {
        if(container[i].toString() === array.toString()) {
            result = true
        }
    }
    return result
}


//function edgeListMaker() {
//    let edgeList = []
//
//    if()
//}