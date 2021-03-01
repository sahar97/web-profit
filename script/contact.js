
$(document).ready(function() {
    $("#panel ").css("display", "none");
  
    $("#flip , #close").click(function() {
        $("#panel").slideToggle("slow");
    });
  });
  
function Fun(value) {

    var first_name = document.getElementById("firstName");
    var last_name = document.getElementById("lastName");
    var email = document.getElementById('email');
    var numb = document.getElementById('numb');
    var com_name = document.getElementById("comName");
    var com_web = document.getElementById('comWeb');
    var j_title = document.getElementById('job');
    var size = document.getElementById('select');
    var letters = /^[a-zA-Z]+$/;
    var com_patt = /^[0-9a-zA-Z]+$/;

    var e_patt = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
    var n_patt = new RegExp("[0][0-9]{9}");
    var urlRegex = /https?:\/\/[^\s]/;
    switch( value) {
    case 1:
        if (!(first_name.value.match(letters))) {
            first_name.classList.add('invalid')
        }
else{
    first_name.classList.remove('invalid')

}
        break;


        case 2:
            if (!(last_name.value.match(letters))) {
                last_name.classList.add('invalid')
            }
    else{
        last_name.classList.remove('invalid')
    
    }

    break; 




    case 3:
        if (!(email.value.match(e_patt))) {
            email.classList.add('invalid')
        }
else{
    email.classList.remove('invalid')

}

break;






case 4:
    if (!(numb.value.match(n_patt))) {
        numb.classList.add('invalid')
    }
else{
    numb.classList.remove('invalid')

}

break;











        

    case 5:
        if (!(com_name.value.match(com_patt))) {
            com_name.classList.add('invalid')
        }
else{
    com_name.classList.remove('invalid')

}

break;








    case 6:
        if (!(com_web.value.match(urlRegex))) {
            com_web.classList.add('invalid')
        }
else{
    com_web.classList.remove('invalid')

}

break; 










    


case 7:
  
    if (j_title.value =="" || j_title.value ==null){
        j_title.classList.add('invalid');
    }

    else {    j_title.classList.remove('invalid')
}
break; 







case 8:
  
    if ($("#select")[0].selectedIndex <= 0) {
        $("#select").addClass("invalid");

  
  
    } else {
        $("#select").removeClass("invalid");

    }

break;

    }
}





/*
function Fun() {
    
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

}
*/
  
/*
  function Fun8() {
    var size = document.getElementById('select').value;
  
    if ($("#select")[0].selectedIndex <= 0) {
        $("#select").css('border', '2px solid red');
  
  
    } else {
        $("#select").css('border', '2px solid blacks');
    }
  } */
  
  
  