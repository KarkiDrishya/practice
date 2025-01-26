function display_function(value)
{
    let display = document.querySelector("#display");
    display.innerHTML = display.innerHTML + value;
    return value;
}
function del(){
    let del = document.querySelector("#display");
    let a =Array.from(del);
    a= del.innerHTML;
    display.innerHTML=a.slice(0,-1);
}
// function add(value)
// {
//     let digits = document.querySelector("#display");
//     let a = Array.from(digits);
//     a = digits.innerHTML;
//     console.log(a);
//     display.innerHTML = display.innerHTML + value;
//     let b = Number(display.innerHTML);
//     // console.log(b);
//     console.log((b));
//     return b;
// }
// function back_value(value)
// {
//     let full_value = document.querySelector("#display");
//     let full_value_final = display.innerHTML;
//     console.log(full_value_final);
//     let a= Array.from(full_value_final);
//     // console.log(a);
//     console.log(a);
// }

function equals()
{
    let disp = document.querySelector("#display");
    display.innnerHTML = eval(disp);
    console.log(display.innerHTML);
}