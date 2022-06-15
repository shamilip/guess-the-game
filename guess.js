let random;
let clue1, clue2, clue3;
document.getElementById("start").addEventListener("click", (e) => {
    clue1 = false;
    clue2 = false;
    clue3 = false;
    ShowElements();
    randomNumber();
    e.target.innerText = "try again";

});
let count = 1;

document.getElementById("check").addEventListener("click", () => {
    let result = document.getElementById("number").value;

    // console.log(result);
    if (count <= 3) {


        if (result == random) {
            // console.log("your massage is currect");
            document.getElementById("answer").innerHTML = "ANSWER :your guess is correct";
        }
        // console.log("your guess is wrong");
        else
            document.getElementById("answer").innerHTML = "ANSWER :your guess is wrong";

        count++
    } else {

        // console.log("your try is over");
        let hide = document.getElementsByClassName("hide");
        hide = [...hide];
        hide.forEach((single) => {
            // console.log(single);
            single.style.visibility = "hidden";
        });
        let allclue = document.getElementsByClassName("singleclue");
        allclue = [...allclue];
        allclue.forEach((single) => {
            // console.log(single);
            single.innerHTML = "";
        });
        document.getElementById("final-answer").innerHTML = "your try is over,answer is:" + random;

    }
});

let cluleButton = document.getElementById("clue-button");
cluleButton.addEventListener("click", (e) => {
    e.target.innerText = "get another clue";
    if (!clue1) {
        if (random % 2 == 0) {
            // console.log("clue:the number is even");
            clue1 = "CLUE 1:The number is even";
            document.getElementById("clue").innerHTML = clue1;
        } else {
            // console.log("clue:the number is odd");
            clue1 = "CLUE 1:The number is odd";
            document.getElementById("clue").innerHTML = clue1;
        }
    } else if (!clue2) {
        if (random % 4 == 0) {
            // console.log("the number divisible by 4");
            clue2 = "CLUE 2: The number  divisible by 4";
            document.getElementById("secondclue").innerHTML = clue2;

        } else {
            // console.log("the number not divisible by4");
            clue2 = "CLUE 2: The number NOT divisible by 4";
            document.getElementById("secondclue").innerHTML = clue2;
        }
    } else if (!clue3) {
        if (random < 50) {
            // console.log("the number between 1 and 50");
            clue3 = "CLUE3: the number between 1 and 50";
            document.getElementById("thirdclue").innerHTML = clue3;
        } else {
            // console.log("the number between 50 and 100");
            clue3 = "CLUE3:the number between 50 and 100";
            document.getElementById("thirdclue").innerHTML = clue3;

        }
    }
});
function ShowElements() {
    let hide = document.getElementsByClassName("hide");
    hide = [...hide];
    hide.forEach((single) => {
        // console.log(single);
        single.style.visibility = "visible";
    });
    let allclue = document.getElementsByClassName("singleclue");
    allclue = [...allclue];
    allclue.forEach((single) => {
        // console.log(single);
        single.innerHTML = "";
    });
    document.getElementById("answer").innerHTML = "";
    document.getElementById("final-answer").innerHTML = "";
    document.getElementById("number").value = "";
}
function randomNumber() {
    let a = Math.random();
    random = Math.floor(a * 100) + 1;
    console.log(random);

}
