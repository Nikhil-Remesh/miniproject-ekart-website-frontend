$(document).ready(function(){
    //searchbox
    $('#sbox').hide();
    $("#search").click(function(){
        $('#sbox').show();
        $('#sbox').blur(function(){
            $('#sbox').hide();
        });
    })
    
    
    // quantity
        $('#minus').click(function(){
          var value =  $('#qty').val();
          if (value > 1) {
            value--;
          }
          $('#qty').val(value);
        });
        
        $('#plus').click(function() {
          var value =  $('#qty').val();
          value++;
          $('#qty').val(value);
        })

    //product image
     
     $('.small-imga').click(function(){
      var smallimage=$(this).attr('src');
      $('#big-imga').attr('src',smallimage);
     })
})


//checkout form validation
placeorder=()=> {
  if(document.getElementById("first-name").value==""){
    document.getElementById("error").innerHTML='Please enter your First Name!!!';
  }
  else if (document.getElementById("last-name").value == '') {
      document.getElementById("error").innerHTML = 'Please enter your Last Name!!!';

  }
  else if (document.getElementById("country").value == '') {
    document.getElementById("error").innerHTML = 'Please enter your country!!!';

}
  else if (document.getElementById("address").value == '') {
      document.getElementById("error").innerHTML = 'Please enter your Address!!!';

  }
  else if (document.getElementById('post-code').value == '') {
      document.getElementById("error").innerHTML = 'Please enter zipcode!!!';

  }
  else if (document.getElementById('town').value == '') {
    document.getElementById("error").innerHTML = 'Please enter town!!!';

}
else if (document.getElementById('phone').value == '') {
  document.getElementById("error").innerHTML = 'Please enter Phone number!!!';

}
else if (document.getElementById('email').value == '') {
  document.getElementById("error").innerHTML = 'Please enter email!!!';

}
else{
  document.getElementById("error").innerHTML = 'Successfully Placed Order';
  setTimeout(()=>{
    document.getElementById('checkout-form').submit();
  },3000); 
}
}

/////newsletter email validation
subscribe=()=>{
if(document.getElementById('subemail').value==""){
  document.getElementById('error1').innerHTML="Please Enter your email";
}
else{
  document.getElementById('error1').innerHTML="Thankyou for Subscribing";
}
}

///////////contact form validation

validatecontact=()=>{
  if(document.getElementById('name').value==""){
    document.getElementById('errorcontact').innerHTML="Please Enter your name";
  }
  else if(document.getElementById('email').value==""){
    document.getElementById('errorcontact').innerHTML="Please Enter your email";
  }
  else if(document.getElementById('message').value==""){
    document.getElementById('errorcontact').innerHTML="Please say something";
  }
  else{
    document.getElementById('contact-form').submit();
  }
  }
