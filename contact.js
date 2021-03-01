
$(document).ready(function() {
    $("#panel ").css("display", "none");
  
    $("#flip , #close").click(function() {
        $("#panel").slideToggle("slow");
    });
  });
  




function Fun() {
    var first_name = document.getElementById("firstName");
    var last_name = document.getElementById("lastName").value;
    var email = document.getElementById('email').value;
    var numb = document.getElementById('numb').value;
    var com_name = document.getElementById("comName").value;
    var com_web = document.getElementById('comWeb').value;
    var j_title = document.getElementById('job').value;
    var size = document.getElementById('select').value;
    var letters = /^[a-zA-Z]+$/;
    var e_patt = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
    var n_patt = new RegExp("[0][0-9]{9}");
    var urlRegex = /https?:\/\/[^\s]/;



//check the first name 
    if (first_name.value.match(letters)) {
        first_name.classList.remove("invalid");
    } else {
        first_name.classList.add("invalid");

    }

//check the last name 

    if (last_name.value.match(letters)) {
        last_name.classList.remove("invalid");

        return true;
    } else {
        first_name.classList.add("invalid");


        return false;
    }

  }//end of the function 
  
  
  
  
  
  function Fun3() {
    var email = document.getElementById('email').value;
    var res = patt.test(email);
  
    if (!res) {
        document.getElementById('email').style.border = "1px solid red"
        document.getElementById('email').style.backgroundImage = "url('./img/invalid.png')";
        document.getElementById('email').style.backgroundRepeat = "no-repeat";
        document.getElementById('email').style.backgroundPosition = "right";
  
  
    } else {
        document.getElementById('email').style.border = "1px solid black"
        document.getElementById('email').style.backgroundImage = "none";
    }
  
  }
  
  
  
  
  function Fun4() {
    var numb = document.getElementById('numb').value;
  
    var res = patt.test(numb);
  
    if (!res) {
        document.getElementById('numb').style.border = "1px solid red"
        document.getElementById('numb').style.backgroundImage = "url('./img/invalid.png')";
        document.getElementById('numb').style.backgroundRepeat = "no-repeat";
        document.getElementById('numb').style.backgroundPosition = "right";
  
  
    } else {
        document.getElementById('numb').style.border = "1px solid black"
        document.getElementById('numb').style.backgroundImage = "none";
    }
  
  }
  
  
  function Fun5() {
    inputtxt = document.getElementById("comName");
  
    var letters = /^[a-zA-Z]+$/;
    if (inputtxt.value.match(letters)) {
        document.getElementById('comName').style.border = "1px solid black"
        document.getElementById('comName').style.backgroundImage = "none";
  
        return true;
    } else {
        document.getElementById('comName').style.border = "1px solid red"
        document.getElementById('comName').style.backgroundImage = "url('./img/invalid.png')";
        document.getElementById('comName').style.backgroundRepeat = "no-repeat";
        document.getElementById('comName').style.backgroundPosition = "right";
  
        return false;
    }
  }
  
  
  
  function Fun6() {
    var inputtxt = document.getElementById('comWeb').value;
  
  
  
  
    if (inputtxt.match(urlRegex)) {
        document.getElementById('comWeb').style.border = "1px solid black"
        document.getElementById('comWeb').style.backgroundImage = "none";
  
        return true;
    } else {
        document.getElementById('comWeb').style.border = "1px solid red"
        document.getElementById('comWeb').style.backgroundImage = "url('./img/invalid.png')";
        document.getElementById('comWeb').style.backgroundRepeat = "no-repeat";
        document.getElementById('comWeb').style.backgroundPosition = "right";
  
        return false;
    }
  }
  
  
  
  function Fun7() {
    var j_title = document.getElementById('job').value;
  
    if (j_title == "" || j_title == null) {
        document.getElementById('job').style.border = "1px solid red"
        document.getElementById('job').style.backgroundImage = "url('./img/invalid.png')";
        document.getElementById('job').style.backgroundRepeat = "no-repeat";
        document.getElementById('job').style.backgroundPosition = "right";
  
  
    } else {
        document.getElementById('job').style.border = "1px solid black"
        document.getElementById('job').style.backgroundImage = "none";
    }
  }
  
  
  
  
  function Fun8() {
    var size = document.getElementById('select').value;
  
    if ($("#select")[0].selectedIndex <= 0) {
        $("#select").css('border', '2px solid red');
  
  
    } else {
        $("#select").css('border', '2px solid blacks');
    }
  }
  
  
  