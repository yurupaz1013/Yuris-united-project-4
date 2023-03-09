let input = document.querySelector("input");
let greeting = document.querySelector(".currentUser");
let submit = document.querySelector("button");
submit.onclick = function() {
    let Q1 = document.querySelector(".Question1").value;
    let Q2 = document.querySelector(".Question2").value;
    let result = document.querySelector(".result");
    console.log(Q1);
    console.log(Q2);

    //result.innerHTML = (Q2);//

    if (Q1 <= 2 && Q2 === "Sweet") {
        document.querySelector(".result").innerHTML = "Mushroom Pizza";
    }

    if (Q1 <= 3  && Q2 === "Salty") {
        document.querySelector(".result").innerHTML = "Peperoni Pizza.";}
};