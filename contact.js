
$(document).ready(function() {
    $("#panel ").css("display", "none");
  
    $("#flip , #close").click(function() {
        $("#panel").slideToggle("slow");
    });
  });
  




function Fun(event) {
    
    var first_name = document.getElementById("firstName");
    var last_name = document.getElementById("lastName");
    var email = document.getElementById('email');
    var numb = document.getElementById('numb');
    var com_name = document.getElementById("comName");
    var com_web = document.getElementById('comWeb');
    var j_title = document.getElementById('job');
    var size = document.getElementById('select');
    var letters = /^[a-zA-Z]+$/;
    var e_patt = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
    var n_patt = new RegExp("[0][0-9]{9}");
    var urlRegex = /https?:\/\/[^\s]/;


    if(first_name.blur)
{
    if (!(first_name.value.match(letters))) {
        first_name.classList.add("invalid");
        return true ;}
        else{
            first_name.classList.remove("invalid");

        }
}
else if(last_name.blur){
    if (!(last_name.value.match(letters))) {
        last_name.classList.add("invalid");
        return true ;}
        else{
            last_name.classList.remove("invalid");

        }

      alert("butm no click ")
}
}
/*
//check the first name 
    if (!(x.value.match(letters))) {
        x.classList.add("invalid");
        return true ;
    } else if(x.value.match(letters)) {
        first_name.classList.remove("invalid");
        last_name.classList.remove("invalid");

    }

  //end of the function 
  
  

  
/*
  function Fun8() {
    var size = document.getElementById('select').value;
  
    if ($("#select")[0].selectedIndex <= 0) {
        $("#select").css('border', '2px solid red');
  
  
    } else {
        $("#select").css('border', '2px solid blacks');
    }
  } */
  
  
  