let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;
let count = 0;
const winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {

    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color="rgb(230,45,9)";
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color="rgb(230, 94, 9)";
            turnO = true;
        }
        box.disabled = true;  //disabled function are used to disable any button that is the value of the button is not change after storing first value.
        checkWinner();
    });

});

const resetgame = () => {
    turnO = true;
    enablesboxes();
    msgcontainer.classList.add("hide");
};

const disablesboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enablesboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg.style.color="aquamarine";
    msgcontainer.classList.remove("hide");
    disablesboxes();

};

const checkWinner = () => {
    for (let pattern of winningpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showWinner(pos1);

            }
        }

    }

};

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        count++;
        if(count>=9){
            msg.innerText ="Match Is Draw";
             msgcontainer.classList.remove("hide");
        }
        
    })
});

newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);



