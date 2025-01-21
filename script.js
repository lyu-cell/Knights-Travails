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



console.log("result: ", possibleMoves([7, 3]))







