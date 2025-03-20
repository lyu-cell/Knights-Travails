// this function returns an array of knight moves possible from the input which is given to it
// it takes in the current location of the knight and returns a range of possible moves form that location
// it doesn't include any duplicate moves or repeated moves or moves that goes outside the board 
function knightMovesPossible(edge) {
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

    function bstNodeBlockAdder() {
        let lastNode = queue.shift()
        if(lastNode.data.toString() === destination.toString()) return
        else {
            let possibleMoves = knightMovesPossible(lastNode.data)
            lastNode.children = possibleMoves
            for (let i = 0; i < possibleMoves.length; i++) {
                queue.push(possibleMoves[i])
            }
    
            return bstNodeBlockAdder()
        }
    }
    
    bstNodeBlockAdder()
    return mother
}









function knightMoves(currentLocation, finalLocation) {
    let mother = buildKnightTree(currentLocation, finalLocation)
    let mainInventory = []
    let activeInventory = []
    let finalEdge = finalLocation

    // this is a DFS algorithm which traverses the inputted branch
    // the function only the path at the end of which exist the destination edge
    // this function sends that whole path to the mainInventory from activeInventory
    // the idea here is to store each path that has dest edge in it 
    // and compare them to get the shortest path from the current knight location to the destination

    function searchAndRecord(branch) {
        let branchData = branch.data.toString()
        let destEdge = finalEdge.toString()
    
        if (branchData === destEdge) {
            mainInventory.push(freeLoop(activeInventory, branch.data))
            return
        } else if (branch.children === undefined) {
            return
        } else {
            activeInventory.push(branch.data)
            for (let i = 0; i < branch.children.length; i++) {
                searchAndRecord(branch.children[i])            
            }
            activeInventory.pop()
            return
        }
    }
    
    function freeLoop(mainArray, extraValue) {
        let a = []
    
        for (let i = 0; i < mainArray.length; i++) {
            a.push(mainArray[i])
        }
    
        a.push(extraValue)
        return a
    }
    
    searchAndRecord(mother)

    return shortestPath(mainInventory)[1]
}


// the function takes in an array of lists and returns the shortest array among them.
// it is so that we can get the shortest path among all the paths which the searchAndRecord 
// function returns
function shortestPath(edgeLists) {
    let shortestList = [edgeLists[0].length, edgeLists[0]]
    edgeLists.shift()

    for (let i = 0; i < edgeLists.length; i++) {
        if(edgeLists[i].length < shortestList[0]) {
            shortestList[0] = edgeLists[i].length;
            shortestList[1] = edgeLists[i];
        }
    }
    
    return shortestList
}

console.log(knightMoves([5, 0], [5, 1]))