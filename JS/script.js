function verify() {
  var fname = document.myform.firstname.value;
  var lname = document.myform.lastname.value;

  if(fname == null || fname == "") {
    document.getElementById('fname').innerHTML="You left the first name blank.";
    if(lname == null || lname == "") {
      document.getElementById('lname').innerHTML="You left the last name blank.";
    } else if(containsInt(lname) == true) {
      document.getElementById('lname').innerHTML="Last name cannot contain a number.";
    } else {
      document.getElementById('lname').innerHTML="";
    }
    return false;
  } else if(containsInt(fname) == true) {
    document.getElementById('fname').innerHTML="First name cannot contain a number.";
    if(lname == null || lname == "") {
      document.getElementById('lname').innerHTML="You left the last name blank.";
    } else if(containsInt(lname) == true) {
      document.getElementById('lname').innerHTML="Last name cannot contain a number.";
    } else {
      document.getElementById('lname').innerHTML="";
    }
    return false;
  } else if(lname == null || lname == "") {
    document.getElementById('fname').innerHTML="";
    document.getElementById('lname').innerHTML="You left the last name blank.";
    return false;
  } else if(containsInt(lname) == true) {
    document.getElementById('fname').innerHTML="";
    document.getElementById('lname').innerHTML="Last name cannot contain a number.";
    return false;
  } else {
    document.getElementById('fname').innerHTML="";
    document.getElementById('lname').innerHTML="";
    return true;
  }
}

//returns true if text contains an int
function containsInt(value) {
  return /\d/.test(value)
}
