$(document).ready(function() {
  $("#panel ").css("display", "none");

  $("#flip , #close").click(function() {
      $("#panel").slideToggle("slow");
  });
});



function Fun1() {
  inputtxt = document.getElementById("firstName");

  var letters = /^[a-zA-Z]+$/;
  if (inputtxt.value.match(letters)) {
      document.getElementById('firstName').style.border = "1px solid black"
      document.getElementById('firstName').style.backgroundImage = "none";

      return true;
  } else {
      document.getElementById('firstName').style.border = "1px solid red"
      document.getElementById('firstName').style.backgroundImage = "url('./img/invalid.png')";
      document.getElementById('firstName').style.backgroundRepeat = "no-repeat";
      document.getElementById('firstName').style.backgroundPosition = "right";

      return false;
  }
}


function Fun2() {
  inputtxt = document.getElementById("lastName");

  var letters = /^[a-zA-Z]+$/;
  if (inputtxt.value.match(letters)) {
      document.getElementById('lastName').style.border = "1px solid black"
      document.getElementById('lastName').style.backgroundImage = "none";

      return true;
  } else {
      document.getElementById('lastName').style.border = "1px solid red"
      document.getElementById('lastName').style.backgroundImage = "url('./img/invalid.png')";
      document.getElementById('lastName').style.backgroundRepeat = "no-repeat";
      document.getElementById('lastName').style.backgroundPosition = "right";

      return false;
  }
}




function Fun3() {
  var email = document.getElementById('email').value;
  var patt = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
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
  var patt = new RegExp("[0][0-9]{9}");

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

  var urlRegex = /https?:\/\/[^\s]/;



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



// This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
  of_beautifier();
} else {
  var a = b ? (c % d) : e[f];
}