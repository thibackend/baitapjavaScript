
function age(){
    var youryear =parseInt(prompt("nhap nam "));
    var present = new Date();
    var age = present.getFullYear() - youryear;
    document.getElementById("age").innerHTML=" your age is: "+age
    alert(present.getFullYear())
}


