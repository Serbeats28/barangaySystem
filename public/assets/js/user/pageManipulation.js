homePage = () => {
    document.getElementById('homePages').style.display = 'block';
    document.getElementById('registerPages').style.display = 'none';
    document.getElementById('loginPages').style.display = 'none';
}

registerPage = () => {
    document.getElementById('homePages').style.display = 'none';
    document.getElementById('registerPages').style.display = 'block';
    document.getElementById('loginPages').style.display = 'none';
}

loginPage = () => {
    document.getElementById('homePages').style.display = 'none';
    document.getElementById('registerPages').style.display = 'none';
    document.getElementById('loginPages').style.display = 'block';
}



let RegisterPage = '';
RegisterPage += `
<div class="container w-50">
 <div class="row">
  <div class="card">
   <div class="card-header bg-white">
    <h2 class="text-success fw-bold mt-3">Register</h2>
   </div>
   <div class="container">
     <div class="row">
        <span class="fw-bold text-center mt-3" id="message"></span>
     </div>
   </div>
   <form id="registerForm" action="javascript:void(0)" onsubmit="handleRegister(this)">
   <div class="card-body">
     <div class="mt-2">
      <label for="email" class="fw-bold mb-2">Email</label>
      <input type="text" class="form-control" id="email" name="email" placeholder="Email">
      <span class="text-danger fw-bold" id="error_email"></span>
     </div>
     <div class="mt-2">
      <label for="username" class="fw-bold mb-2">Username</label>
      <input type="text" class="form-control" id="username" name="username" placeholder="Username">
      <span class="text-danger fw-bold" id="error_username"></span>
     </div>
     <div class="mt-2">
      <label for="password" class="fw-bold mb-2">Password</label>
      <input type="password" class="form-control" id="password" name="password" placeholder="Password">
      <span class="text-danger fw-bold" id="error_password"></span>
     </div>
     <div class="mt-2">
      <label for="confirmPassword" class="fw-bold mb-2">Confirm Password</label>
      <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password">
      <span class="text-danger fw-bold" id="error_conPass"></span>
     </div>
     <br>
     <input type="checkbox" onclick="showPass()"> <span class="fw-bold">Show Password</span>
     <br>
     <p class="text-center text-danger fw-bold">You are agree to our terms and policies
     <input type="checkbox" id="setEnable" class="setEnable"> <hr></p> 
     <button type="submit" class="btn btn-success w-100" id="btnRegister" disabled>Register</button>
   </div>
   </form>
  </div>
 </div>
</div>
`;
document.getElementById('registerPages').innerHTML = RegisterPage;

let setEnable = document.querySelector('#setEnable');
setEnable.addEventListener('change', function () {
    let checkbox = document.getElementById('setEnable');
    let btnRegister = document.getElementById('btnRegister');
    if (checkbox.checked == true) {
        btnRegister.disabled = false;
    } else {
        btnRegister.disabled = true;
    }
});

let LoginPage = '';
LoginPage += `
<div class="container mt-5 w-50">
                <div class="row">
                    <form action="javascript:void(0)" id="loginForm" onsubmit="handleLogin(this)">
                    <div class="card shadow-sm">
                        <div class="card-header bg-white">
                            <h2 class="fw-bold mt-2 text-success text-center">Login</h2>
                        </div>
                        <div class="card-body">
                        <p class="text-danger fw-bold mt-2 text-center" id="error_login"></p>
                            <div class="mt-2">
                                <label for="email">Email</label>
                                <input type="text" id="email2" name="email" class="form-control" placeholder="Email">
                            </div>
                            <div class="mt-2">
                                <label for="password">Password</label>
                                <input type="password" id="password2" name="password" class="form-control" placeholder="Password">
                            </div>
                            <div class="mt-3">
                                <button type="submit" id="btnLogin" class="btn btn-success w-100">Login</button>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
</div>`;
document.getElementById('loginPages').innerHTML = LoginPage;

verify = () =>{
   let user_id = localStorage.getItem('user_id');

   let req = new XMLHttpRequest();
   req.open('GET','http://localhost:8080/verify/' + user_id ,true);
   req.onload = function(){
     if(this.status == 200){
       let response = JSON.parse(this.responseText);
       if(response.status == 'success'){
        document.querySelector('#loginTrue').style.display = ''
        document.querySelector('#loginFalse').style.display = 'none'
        document.getElementById('homePages').style.display = 'none';
        document.getElementById('registerPages').style.display = 'none';
        document.getElementById('loginPages').style.display = 'none';
        document.querySelector('#logedPages').style.display = '';
       }else{
        document.querySelector('#loginTrue').style.display = 'none'
        document.querySelector('#loginFalse').style.display = ''
       }
     }
   }
   req.send();
}
verify();
//User success Login
let logPage = '';
logPage += `
<div class="container">
                    <div class="row">
                        <div class="col-lg-6 custom-col">
                            <h1 class="display-3 fw-bold" id="text">Request and Inquiry Management System</h1>
                            <p class="lead">Sumacab Sur is a barangay of Cabanatuan City under the province of Nueva Ecija. It is one of the common vegetable farming location for farmers 
                                who want to make a source of living through agriculture, hence Sumacab Sur is one of the barangay that has maintained
                                 its peaceful, economical, secured environment due to the people's environment-friendly way of living.
                            </p>
                            <div class="d-flex">
                               <button type="button"data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-dark mr-3 p-1 m-2">Request Document</button>
                               <button class="btn btn-outline-dark mr-3 p-1 m-2">Inquiry</button>
                               <button class="btn btn-outline-dark mr-3 p-1 m-2">Complain</button>
                            </div>
                        </div>
                        <div class="col-lg-6 imgLogo">
                          <div class="container"> 
                           <div class="customImage">
                           <img src="assets/image/logo cab.png" alt="logo" height="500px">
                           </div>
                          </div>
                        </div>
                    </div>`;
document.getElementById('logedPages').innerHTML = logPage;

//Modal Content
let ModalContent = '';
ModalContent += `
<div class="modal-header">
<h1 class="modal-title fs-5 title" id="exampleModalLabel">Request Document</h1>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<form action="javascript:void(0)" id="dataForm" onsubmit="handleDocumentRequest()">

<div class="container">
 <div class="row">
   <p id="messageResponse" class="fw-bold text-center"></p>
 </div>
</div>

<div class="row mt-2">
<div class="col-12 col-sm-6">
 <label for="first_name">First Name</label>
 <input type="text" class="form-control" id="first_name" name="first_name" placeholder="First Name">
</div>
<div class="col-12 col-sm-6">
 <label for="middle_name">Middle Name</label>
 <input type="text" class="form-control" id="middle_name" name="middle_name" placeholder="Middle Name">
</div>
</div>

<div class="row mt-2">
<div class="col-12 col-sm-6">
 <label for="last_name">Last Name</label>
 <input type="text" class="form-control" id="last_name" name="last_name" placeholder="Last Name">
</div>
<div class="col-12 col-sm-6">
 <label for="contact_number">Contact Number</label>
 <input type="text" class="form-control" id="contact_number" name="contact_number" placeholder="Contact Number">
</div>
</div>

<div class="row mt-2">
<div class="col-12 col-sm-6">
 <label for="age">Age</label>
 <input type="text" class="form-control" id="age" name="age" placeholder="Age">
</div>
<div class="col-12 col-sm-6">
 <label for="address">Address</label>
 <input type="text" class="form-control" id="address" name="address" placeholder="Address">
</div>
</div>

<div class="mt-2">
  <label for="document_type">Document Type</label>
  <select type="select" class="form-select document_type" id="document_type" 
  aria-label="Default select example" name="document_type"">
      
  </select>
</div>

<div class="mt-2">
  <label for="purpose">Purpose</label>
  <textarea id="purpose" name="purpose" class="form-control" rows="3"></textarea>
</div>

<div class="mt-2">
 <button type="submit" class="btn btn-primary float-end" id="btnSubmit">Submit</button>
</div>
</form>
</div>
`;
document.getElementById('modalContent').innerHTML = ModalContent;

documentType = () =>{
 let req = new XMLHttpRequest();
 req.open('GET','http://localhost:8080/documentType',true);
 req.onload = function(){
    if(this.status == 200){
       let data = JSON.parse(this.responseText);
       let output ='';
       for(i in data){
        output +=`
         <option value="${data[i].id}">${data[i].document_name}</option>
        `;
       }
       document.getElementById('document_type').innerHTML = output;
    }
 }
 req.send();
}
documentType();

//Requested Table 
let RequestedTable = '';
RequestedTable +=`
<div class="container">
 <div class="row">
  <div class="card">
   <div class="card-header bg-white">
     <h3 class="text-center fw-bold mt-2">All Requested Document</h3>
   </div>
   <div class="card-body">
    <table class="table table-responsive">
     <thead>
       <th>User_id</th>
       <th>Document Type</th>
       <th>Date Release</th>
       <th>Action</th>
     </thead>
     <tbody id="tableData"></tbody>
    </table>
   </div>
  </div>
 </div>
</div>
`;

document.getElementById('userRequestedTable').innerHTML = RequestedTable;