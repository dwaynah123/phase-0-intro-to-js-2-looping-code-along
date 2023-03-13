
function writeCards() {
    const cards = [["Guadalupe", "Ollie", "Aki"], "surprise"];
    const tnx = [];
    for(let i = 0; i <= 2; i++) {
        tnx.push("Thank you, " + cards[0][i] + ", for the wonderful " + cards[1] + " gift!");
    }
    return tnx;
}

function countDown() {
    let int = 10;
    while(int >= 0) {
        console.log(int);
        int--;
    }
}