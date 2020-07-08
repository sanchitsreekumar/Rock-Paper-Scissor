let userScore = 0;
let compScore = 0;

let rock = document.querySelector("#rock1");
let paper = document.querySelector("#paper1");
let scissor = document.querySelector("#scissors1");

let rockComp = document.querySelector("#rock");
let paperComp = document.querySelector("#paper");
let scissorComp = document.querySelector("#scissors");

let compSelectionRock = 0;
let compSelectionPaper = 0;
let compSelectionScissor = 0;

// let clickedClass = document.getElementsByClassName("choice");






// clickedClass[0].addEventListener('click', function (e) {
//     let targetElement = e.target.id;
//     console.log(e.target.id)
//     // let targetElement = e.target.id;
//     e.target.id.classList.add("my_selection");
//     // console.log(e.target.id)
// });


let clicked = false;

document.querySelector(".choices").addEventListener('click', function (e) {
    clicked = true;
    let targetElement = e.target.id;

    if (targetElement == "rock1") {
        rock.classList.add("my_selection");
        console.log(e.target.id);

    } else if (targetElement == "paper1") {
        paper.classList.add("my_selection");
        console.log(e.target.id);

    } else if (targetElement == "scissors1") {
        scissor.classList.add("my_selection");
        console.log(e.target.id);
    }




    function checkClick() {

        if (clicked == true) {

            let compSelection = Math.floor(Math.random() * 12);  //number b/w 0 and 11
            console.log(compSelection);

            switch (compSelection) {
                case 0:
                case 1:
                case 2:
                case 3:
                    rockComp.classList.add("comp_selection");
                    compSelectionRock = 1;
                    console.log("comp selected rock" + compSelectionRock);
                    setTimeout(compare, 1000);
                    break;
                case 4:
                case 5:
                case 6:
                case 7:
                    paperComp.classList.add("comp_selection");
                    compSelectionPaper = 1;
                    console.log("comp selected paper" + compSelectionPaper);
                    setTimeout(compare, 1000);
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                    scissorComp.classList.add("comp_selection");
                    compSelectionScissor = 1;
                    console.log("comp selected scissor" + compSelectionScissor);
                    setTimeout(compare, 1000);
                    break;
            }
        }
    }

    function compare() {
        /* result 3 = draw
            result 2 = lose
            result 1 = win 
            */
        if (compSelectionRock === 1) {
            if (targetElement == "rock1") {
                document.getElementById("result3").style.visibility = "visible";
                console.log(compSelectionRock);

            } else if (targetElement == "paper1") {
                document.getElementById("result1").style.visibility = "visible";
                console.log("you win")
                console.log(compSelectionRock);
                updateUserScore()
            } else if (targetElement == "scissors1") {
                document.getElementById("result2").style.visibility = "visible";
                console.log("you lose")
                console.log(compSelectionRock);
                updateCompScore()
            }
        } else if (compSelectionPaper === 1) {
            if (targetElement == "paper1") {
                document.getElementById("result3").style.visibility = "visible";
                console.log(compSelectionPaper);
            } else if (targetElement == "scissors1") {
                document.getElementById("result1").style.visibility = "visible";
                console.log("you win")
                console.log(compSelectionPaper);
                updateUserScore()
            } else if (targetElement == "rock1") {
                document.getElementById("result2").style.visibility = "visible";
                console.log("you lose")
                console.log(compSelectionPaper);
                updateCompScore()
            }
        } else if (compSelectionScissor === 1) {
            if (targetElement == "scissors1") {
                document.getElementById("result3").style.visibility = "visible";
                console.log(compSelectionScissor);
            } else if (targetElement == "rock1") {
                document.getElementById("result1").style.visibility = "visible";
                console.log("you win")
                console.log(compSelectionScissor);
                updateUserScore()
            } else if (targetElement == "paper1") {
                document.getElementById("result2").style.visibility = "visible";
                console.log("you lose")
                console.log(compSelectionScissor);
                updateCompScore()
            }
        }
        setTimeout(hideTitle, 1000);
    }


    function updateUserScore() {
        userScore++;
        document.getElementById("user-score").innerHTML = userScore;
        // setTimeout(hideTitle, 1000);
    }
    function updateCompScore() {
        compScore++;
        document.getElementById("computer-score").innerHTML = compScore;
        // setTimeout(hideTitle, 1000);
    }

    function hideTitle() {
        document.getElementById("result3").style.visibility = "hidden";
        document.getElementById("result2").style.visibility = "hidden";
        document.getElementById("result1").style.visibility = "hidden";
        rock.classList.remove("my_selection");
        paper.classList.remove("my_selection");
        scissor.classList.remove("my_selection");
        rockComp.classList.remove("comp_selection");
        paperComp.classList.remove("comp_selection");
        scissorComp.classList.remove("comp_selection");
        compSelectionRock = 0;
        compSelectionPaper = 0;
        compSelectionScissor = 0;

        console.log("hidden");

    }



    // switch(compSelectionRock, compSelectionPaper, compSelectionScissor){
    //     case compSelectionRock == targetElement:
    //         document.getElementById(result3).style.visibility = "visible";
    //         break;
    //     case compSelectionRock != targetElement:

    // }

    setTimeout(checkClick, 1000);
    // setTimeout(compare, 4000);


});

