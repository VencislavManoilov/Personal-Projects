let graph = [[1, 3], [0, 4], [3, 4], [0, 2], [1, 2]], graphP = [], selected1 = -1, selected2 = -1, stepsToGo = -1;

for(let i = 0; i < graph.length; i++) {
    graphP[i] = new Vector2(randomInteger(150, windowSizeX - 150), randomInteger(150, windowSizeY - 150));
}

function update() {

}

function draw() {
    for(let i = 0; i < graph.length; i++) {
        if(selected1 != -1 && i == selected1) {
            color = "Chartreuse";
        } else if(selected2 != -1 && i == selected2) {
            color = "red";
        } else {
            color = "green";
        }


        for(let j = 0; j < graph[i].length; j++) {
            drawLine(graphP[i], graphP[graph[i][j]], 2, "black");
        }

        fillArc(graphP[i], 25, color);
        fillText(i, graphP[i], 25, "Arial", "white");

        if(i == selected2) {
            fillText(stepsToGo, new Vector2(graphP[i].x, graphP[i].y), 25, "Arial", "black");
        }

    }
}

function findPath(index, indexToGo, steps, allreadyBeen) {
    let needToBreak = false;
    console.log(index,indexToGo)

    for(let i = 0; i < graph[index].length; i++) {
        for(let j = 0; j < allreadyBeen.length; j++) {
            if(allreadyBeen.includes(graph[index][i])) {
                needToBreak = true;
            }
        }

        if(!needToBreak) {
            if(index != indexToGo) {
                allreadyBeen[allreadyBeen.length] = graph[index][i];
                return findPath(graph[index][i], indexToGo, steps+1, allreadyBeen);
            }
        }
    }

    return steps;
}

function mousedown() {
    if(selected1 == -1) {
        for(let i = 0; i < graph.length; i++) {
            if(distance(graphP[i], new Vector2(mouseX, mouseY)) <= 25) {
                selected1 = i;
            }
        }
    } else if(selected2 == -1) {
        for(let i = 0; i < graph.length; i++) {
            if(distance(graphP[i], new Vector2(mouseX, mouseY)) <= 25) {
                selected2 = i;
                stepsToGo = findPath(selected1, selected2, 0, [selected1]);
            }
        }
    } else {
        for(let i = 0; i < graph.length; i++) {
            if(distance(graphP[i], new Vector2(mouseX, mouseY)) <= 25) {
                selected1 = i;
                selected2 = -1;
            }
        }
    }
}