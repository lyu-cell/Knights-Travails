
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






function includeArray(container, array) {
    let result = false

    for (let i = 0; i < container.length; i++) {
        if(container[i].toString() === array.toString()) {
            result = true
        }
    }
    return result
}



// this function is used to filter our any duplicate edges that 
// "possibleMoves" output might throw
function filter(storage, item) {
    let duplicate = false
    for (let i = 0; i < storage.length; i++) {
        if(storage[i].toString() === item.toString()) duplicate = true
    }

    if(duplicate === false) storage.push(item)
}



//this function is used to encase the possibleMoves output and the current edge which is used to get
// those outputs from "possibleMoves" into an object.
function d(edge) {
    let result = possibleMoves(edge)
    let storage = []
    
    storage.push(result[0])

    if(result.length !== 0) {
        for (let i = 0; i < result.length; i++) {
            filter(storage, result[i])
        }
    }

    return storage
}









let root = d([2, 1])



function  show(index, child, mother) {
    let childVer = d(child)
    console.log(childVer)

    mother.children[0][index] = childVer
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
            let possibleChildren = d(lastNode.data)
            let possibleChildrenObj = []
            for (let i = 0; i < possibleChildren.length; i++) {
                possibleChildrenObj.push({data: possibleChildren[i]})
            }

            lastNode.children = possibleChildrenObj
            possibleChildrenObj.forEach((e) => queue.push(e))
            return lastNodeProcessor()
        }
    }

    lastNodeProcessor()

    return mother
}
let mother = buildKnightTree([2, 1], [3, 3])






























