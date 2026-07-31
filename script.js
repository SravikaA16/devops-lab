function submitForm(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    if(name && email && phone){
     document.getElementById('confirmation').innerText="Thankyou," + name + "!You have registered Successfully.";
     console.log('Registartion Details:',{Name: name,Email: email,Phone: phone});
    } else{
        alert('Please fill all the required fields.');
     }    
    }