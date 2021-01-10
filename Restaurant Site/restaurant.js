function validateItems () {
  var check = true;
  var name = document.forms["contactMe"]["nameId"].value;
  var email = document.forms["contactMe"]["emailId"].value;
  var phone = document.forms["contactMe"]["phoneId"].value;

  if (name == "") {
    check = false;
  }

  if (email == "") {
    check = false;
  }

  if (phone == "") {
    check = false;
  }

  if (check == true) {
    alert("Thanks for reaching out. You will be contacted soon!");
  }
  return false;
}

function javascriptAlert() {
  alert("This page uses javascript. It may not fucntion properly if javascript has not been enabled in your browwer.");
}
