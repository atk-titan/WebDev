const inp = document.querySelectorAll("input");

const button = document.querySelector("button");

button.onclick = () => {
    console.log(parseInt(inp[0].value) + parseInt(inp[1].value)); // Concatenate the values of the first two inputs
    const ele = document.querySelector("#finalSum");
    ele.innerHTML=parseInt(inp[0].value) + parseInt(inp[1].value);
};