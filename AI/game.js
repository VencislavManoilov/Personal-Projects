class Nevron {
    stojnost = 0;
    sasediOtzad = [];
}
stepSize=0.0001
let mreja = [[new Nevron(), new Nevron()], [new Nevron(), new Nevron(), new Nevron()], [new Nevron(), new Nevron(), new Nevron()]];

for(let i = 1; i < mreja.length; i++) {
    for(let j = 0; j < mreja[i].length; j++) {
        for(let k = 0; k < mreja[i - 1].length; k++) {
            mreja[i][j].sasediOtzad.push({sased: mreja[i - 1][k], weigth: Math.random()})
        }
    }
}

console.log(mreja);
function runNetwork() {
    for(let i = 1; i < mreja.length; i++) {
        for(let j = 0; j < mreja[i].length; j++) {
            mreja[i][j].stojnost=0
            for(let k = 0; k < mreja[i - 1].length; k++) {
                mreja[i][j].stojnost += mreja[i - 1][k].stojnost * mreja[i][j].sasediOtzad[k].weigth;
            }
            // mreja[i][j].stojnost=1/(2.7**-)
        }
    }
}


function getError(){
    runNetwork()
    return {x:mreja[0][0].stojnost-(Math.cos(mreja[2][0].stojnost)+Math.cos(mreja[2][1].stojnost)+Math.cos(mreja[2][2].stojnost)),y:mreja[0][1].stojnost-(Math.sin(mreja[2][0].stojnost)+Math.sin(mreja[2][1].stojnost)+Math.sin(mreja[2][2].stojnost))}
}
function train(){
    skolkodamurdam=[]
    for(let i = 1; i < mreja.length; i++) {
        skolkodamurdam[i]=[]
        for(let j = 0; j < mreja[i].length; j++) {
            skolkodamurdam[i][j]=[]
            for(let k = 0; k < mreja[i - 1].length; k++) {
                rezultatpredi=(getError().x+getError().y)**2
                mreja[i][j].sasediOtzad[k].weigth+=stepSize
                rezultatsled=(getError().x+getError().y)**2
                if(rezultatsled<rezultatpredi){
                    skolkodamurdam[i][j][k]=stepSize
                }else{
                    skolkodamurdam[i][j][k]=-stepSize

                }
            }
        }
    }
    for(let i = 1; i < mreja.length; i++) {

        for(let j = 0; j < mreja[i].length; j++) {

            for(let k = 0; k < mreja[i - 1].length; k++) {
                mreja[i][j].sasediOtzad[k].weigth+=skolkodamurdam[i][j][k]
            }}}
            // console.log((getError().x+getError().y)**2)
}
function update() {
    mreja[0][0].stojnost=(mouseX/100)+4
    mreja[0][1].stojnost=(mouseY/100)+4
    runNetwork()
}

function draw() {
    firstVector=new Vector2(Math.cos(mreja[2][0].stojnost),Math.sin(mreja[2][0].stojnost))
    secondVector=new Vector2(firstVector.x+Math.cos(mreja[2][1].stojnost),firstVector.y+Math.sin(mreja[2][1].stojnost))
    thirdVector=new Vector2(secondVector+Math.cos(mreja[2][1].stojnost,secondVector+Math.sin(mreja[2][1].stojnost)))

    drawLine(new Vector2(200,200),new Vector2(firstVector.x*100+200,firstVector.y*100+200));

    drawLine(new Vector2(firstVector.x*100+200,firstVector.y*100+200),new Vector2(secondVector.x*100+200,secondVector.y*100+200));
    drawLine(new Vector2(secondVector.x*100+200,secondVector.y*100+200),new Vector2(thirdVector.x*100+200,thirdVector.y*100+200));

    // drawLine(new Vector2(200+Math.cos(mreja[2][0].stojnost)*100,300+Math.sin(mreja[2][0].stojnost)*100),new Vector2(200+(Math.cos(mreja[2][0].stojnost)+Math.cos(mreja[2][1].stojnost))*100,300+(Math.sin(mreja[2][0].stojnost)+Math.sin(mreja[2][1].stojnost))*100));
    // drawLine(new Vector2(200+(Math.cos(mreja[2][0].stojnost)+Math.cos(mreja[2][1].stojnost))*100,300+(Math.sin(mreja[2][0].stojnost)+Math.sin(mreja[2][1].stojnost))*100),new Vector2(200+(Math.cos(mreja[2][0].stojnost)+Math.cos(mreja[2][1].stojnost)+Math.cos(mreja[2][2].stojnost))*100,300+(Math.sin(mreja[2][0].stojnost)+Math.sin(mreja[2][1].stojnost)+Math.sin(mreja[2][2].stojnost))*100))
    for(let i=0;i<10;i++){
        train()
    }
}

function angleFromTwoPoints(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}