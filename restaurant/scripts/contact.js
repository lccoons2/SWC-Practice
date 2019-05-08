function phonenumber(inputtxt)
{
  var checkPhone() = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if((inputtxt.value.match(checkPhone()))
        {
     alert("thank you for inputting a correct phone number.")
      return true;
        }
      else
        {
        alert("Please use the format 123-456-7890.");
        return false;
        }
}