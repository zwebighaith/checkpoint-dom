var plusbtn =document.getElementsByClassName("plusbtn");
var moinbtn =document.getElementsByClassName("moinbtn");
var count = document.getElementsByClassName("count");
var remove = document.getElementsByClassName("remove");
var like = document.getElementsByClassName("like");


plusbtn[0].addEventListener ("click",function(){
    count[0].innerHTML = +count[0].innerHTML + 1 
});



moinbtn[0].addEventListener("click",function(){
    if (+count[0].innerHTML > 0){
        count[0].innerHTML = +count[0].innerHTML - 1
    }
    else{
        alert("attention");
    }
});


plusbtn[1].addEventListener ("click",function(){
    count[1].innerHTML = +count[1].innerHTML + 1 
});



moinbtn[1].addEventListener("click",function(){
    if (+count[1].innerHTML > 0){
        count[1].innerHTML = +count[1].innerHTML - 1
    }
    else{
        alert("attention");
    }
});




plusbtn[2].addEventListener ("click",function(){
    count[2].innerHTML = +count[2].innerHTML + 1 
});



moinbtn[2].addEventListener("click",function(){
    if (+count[2].innerHTML > 0){
        count[2].innerHTML = +count[2].innerHTML - 1
    }
    else{
        alert("attention");
    }
});

remove[0].addEventListener("click",function(){
    var elem = document.getElementsByClassName('card');
    console.log(elem)
    elem[0].remove()
})
remove[1].addEventListener("click",function(){
    var elem = document.getElementsByClassName('card');
    console.log(elem)
    elem[1].remove()
})
remove[2].addEventListener("click",function(){
    var elem = document.getElementsByClassName('card');
    console.log(elem)
    elem[2].remove()
})
like[0].addEventListener("click",function(){
    
    document.getElementsByClassName("like")[0].style.background="rgb(0, 0, 0)";
    
})
like[1].addEventListener("click",function(){
    
    document.getElementsByClassName("like")[1].style.background="rgb(0, 0, 0)";
    
})
like[2].addEventListener("click",function(){
    
    document.getElementsByClassName("like")[2].style.background="rgb(0, 0, 0)";
    
})