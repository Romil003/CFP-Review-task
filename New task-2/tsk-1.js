$(document).ready( function(){
    showSearch();
})

var newArray = ["orange","mango","banana","apple"]


function showSearch(){

    var user = $("#searchInput").val();
    
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i].startsWith(user)) {
            document.getElementById("showOutput").innerHTML = newArray.join(", ");
            return;
        }
    }
    document.getElementById("showOutput").innerHTML = "";
}

function addValue(){

    var user = $("#searchInput").val();
    
    if(newArray.includes(user)){
        console.log("Already present");
    } else {
        newArray.push(user);
        $("#showOutput").html(newArray);
    }

     
}