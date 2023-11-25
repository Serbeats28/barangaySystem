//Showing Password
showPass = () =>{
    let pass1 = document.getElementById('password');
    let pass2 = document.getElementById('confirmPassword');

    if(pass1.type == 'password' && pass2.type == 'password'){
        pass1.type = 'text';
        pass2.type = 'text';
    }else{
        pass1.type = 'password';
        pass2.type = 'password';
    }
}

//Store user data
handleRegister = () =>{
  let email = document.getElementById('email').value;
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let conPass = document.getElementById('confirmPassword').value;

  if(email == ''){
    let error_email = 'Email is required';
    document.getElementById('error_email').innerHTML = error_email;
  }else if(username == ''){
    document.getElementById('error_email').innerHTML = '';
    let error_username = 'Username is required';
    document.getElementById('error_username').innerHTML = error_username;
  }else if(password == ''){
    document.getElementById('error_email').innerHTML = '';
    document.getElementById('error_username').innerHTML = '';
    let error_password = 'Password is required';
    document.getElementById('error_password').innerHTML = error_password;
  }else if(conPass == ''){
    document.getElementById('error_email').innerHTML = '';
    document.getElementById('error_username').innerHTML = '';
    document.getElementById('error_password').innerHTML = '';
    let error_conPass = 'Confirm Password is required';
    document.getElementById('error_conPass').innerHTML = error_conPass;
  }else{
    document.getElementById('error_email').innerHTML = '';
    document.getElementById('error_username').innerHTML = '';
    document.getElementById('error_password').innerHTML = '';
    document.getElementById('error_conPass').innerHTML = '';
    let btnRegister = document.getElementById('btnRegister');
    btnRegister.innerHTML = 'Registering....';

    let formData = new FormData();
    formData.append('user', 1);
    formData.append("email", email);
    formData.append("username", username);
    formData.append('password', password);
    formData.append('conPass', conPass);

    let req = new XMLHttpRequest();
    req.open('POST','http://localhost:8080/store',true);
    req.onload = function(){
        if(this.status == 200){
         let response = JSON.parse(this.responseText);
         let message = document.querySelector('#message');
         if(response.status == 'error'){
            message.classList.add('text-danger');
            message.innerHTML = response.message;
            btnRegister.innerHTML = 'Register';
         }else if(response.status == 'success'){
            message.classList.remove('text-danger');
            message.classList.add('text-success');
            message.innerHTML = response.message;
            btnRegister.innerHTML = 'Register';
            document.querySelector('#registerForm').reset();
         }
        }
    }
    req.send(formData);
  }
}


//Sign in User
handleLogin = () =>{
    let email2 = document.getElementById('email2').value;
    let password2 = document.getElementById('password2').value;
  
    if(email2 == '' || password2 == ''){
      let error = 'All fields required'
      document.getElementById('error_login').innerHTML = error;
    }else{
      let fd = new FormData();
      fd.append('userLogin',1);
      fd.append('email', email2);
      fd.append('password', password2);
      let req = new XMLHttpRequest();
      req.open('POST','http://localhost:8080/sign_in', true);
      req.onload = function(){
        if(this.status == 200){
          let response = JSON.parse(this.responseText);
          if(response.status == 'error'){
            document.getElementById('error_login').innerHTML = response.message;
          }else if(response.status == 'success'){
            localStorage.setItem('user_id', response.user_id);
            document.querySelector('#loginFalse').style.display = 'none'
            document.getElementById('homePages').style.display = 'none';
            document.getElementById('registerPages').style.display = 'none';
            document.getElementById('loginPages').style.display = 'none';
            document.querySelector('#loginTrue').style.display = '';
            document.querySelector('#logedPages').style.display = '';
          }
        }
      }
      req.send(fd);
    }
  }

  //Handle Requesting Documents\
  handleDocumentRequest = () =>{
    let first_name = document.getElementById('first_name').value;
    let middle_name = document.getElementById('middle_name').value;
    let last_name = document.getElementById('last_name').value;
    let contact_number = document.getElementById('contact_number').value;
    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;
    let optionValue = document.querySelector('#document_type');
    output = optionValue.options[optionValue.selectedIndex].text;
    let documentType = output;
    let purpose = document.getElementById('purpose').value;
    let msg = document.querySelector('#messageResponse');
    let btnSubmit = document.getElementById('btnSubmit');
    if(first_name == '' || middle_name == '' || last_name == '' || contact_number == '' || age == '' ||
    address == '' || purpose == ''){
      let message = "All fields Required";
      msg.classList.add('text-danger');
      msg.innerHTML = message;
    }else{
      btnSubmit.innerHTML = 'Submitting....';
      let user_id = localStorage.getItem('user_id');
      let dataForm = new FormData();
      dataForm.append("userRequestDocument",1)
      dataForm.append("user_id" ,user_id);
      dataForm.append("first_name", first_name,);
      dataForm.append("middle_name", middle_name);
      dataForm.append("last_name", last_name,);
      dataForm.append("contact_number",contact_number);
      dataForm.append("age",age);
      dataForm.append("address",address);
      dataForm.append("requestedDocument",documentType);
      dataForm.append("purpose",purpose);

      let req = new XMLHttpRequest();
      req.open('POST','http://localhost:8080/store_request',true);
      req.onload = function(){
        if(this.status == 200){
          let response = JSON.parse(this.responseText);
          let modal = bootstrap.Modal.getOrCreateInstance('#exampleModal');
          modal.hide();
          document.querySelector('#dataForm').reset()
          btnSubmit.innerHTML = 'Submit';
          alertify.set('notifier', 'position', 'top-right')
          alertify.success(response.message);
        }
      }
      req.send(dataForm);
    }
  }
//Notification Bar for Request
  NotificationBar = ()=>{
    let id = localStorage.getItem("user_id");
    let req = new XMLHttpRequest();
    req.open('GET','http://localhost:8080/notification/' + id,true);
    req.onload = function(){
      if(this.status == 200){
       let response = JSON.parse(this.responseText);
       if(response.data != null){
        document.getElementById('requested_bar').innerHTML = response.data.user_id
       }else{
        document.getElementById('requested_bar').innerHTML = ''
       }
       
      }
    }
    req.send()
  }
  NotificationBar();

//View Request
RequestedPage = () =>{
  document.querySelector('#requested_bar').innerHTML = ''
  document.getElementById('logedPages').style.display = 'none';
  document.getElementById('userRequestedTable').style.display = '';
  let id = localStorage.getItem('user_id');
  let req = new XMLHttpRequest();
  req.open('GET','http://localhost:8080/view_request/' + id,true);
  req.onload = function(){
    if(this.status == 200){
       let data = JSON.parse(this.responseText);
       let output = ''
       for(i in data){
        output +=`
         <tr>
           <td>${data[i].user_id}</td>
           <td>${data[i].notification_type}</td>
           <td>${data[i].created_at}</td>
           <td>
             <a href="http://localhost:8080/assets/pdf/${data[i].pdf_name}" target="__blank" class="btn btn-primary">View Pdf</a>
           </td>
         </tr>
        `;
       }
       document.getElementById('tableData').innerHTML = output;
    }
  }
  req.send();
}