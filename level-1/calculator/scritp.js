let op = document.getElementById("ipbx");
let ans = "";
function display(num){
    ans += num;
    op.value = ans;
}
function Calculate(){
    try{
        op.value = eval(op.value);
    }
    catch(err)
    {
        alert("Invalid")
    }
}
function Clear(){
    op.value = "";
}
function del(){
    op.value = op.value.slice(0, -1);
}