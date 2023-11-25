HomePages = () =>{
    document.getElementById('requestPage').style.display = 'none';
    document.getElementById('homePage').style.display = '';
    document.getElementById('addRequestingPage').style.display = 'none';
}

RequestPages = () =>{
    document.getElementById('requestPage').style.display = '';
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('addRequestingPage').style.display = 'none';
}

addRequestDocument = ()=>{
    document.getElementById('addRequestingPage').style.display = '';
    document.getElementById('requestPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'none';
}

let homePage = '';
homePage += `
<div class="container">
<div class="row">
 <h3 class="fw-bold text-center text-uppercase mt-5">Welcome Admin</h3>
 <div class="grid">
 <div class="card card-grid" style="width:18 rem;">
 <div class="card-header bg-success">
 <h5 class="text-center fw-bold text-white pt-2">Citizen Request</h5>
 </div>
 <div class="card-body">
  <div class="text-center pt-2">
  <span class="fw-bold fs-4">Request</span>
  <hr>
  <span class="fw-bold fs-4" id="countRequest"></span>
  </div>
 </div>
 </div>
 <div class="card card-grid" style="width:18 rem;">
 <div class="card-header bg-primary">
 <h5 class="text-center fw-bold text-white pt-2">Citizen Inquire</h5>
 </div>
 <div class="card-body">
  <div class="text-center pt-2">
  <span class="fw-bold fs-4">Inquire</span>
  <hr>
  <span class="fw-bold fs-4">()</span>
  </div>
 </div>
 </div>
 <div class="card card-grid" style="width:18 rem;">
 <div class="card-header bg-warning">
 <h5 class="text-center fw-bold text-white pt-2">Citizen Complain</h5>
 </div>
 <div class="card-body">
  <div class="text-center pt-2">
  <span class="fw-bold fs-4">Complain</span>
  <hr>
  <span class="fw-bold fs-4">()</span>
  </div>
 </div>
 </div>
 </div>
 <br><br>
 <div class="row">
  <div class="card shadow">
    <h5 class="text-bold pt-3">List of Citizen Request, Inquire and Complain</h5>
    <hr>
    <table class="table table-responsive">
      <thead>
        <tr>
          <th>User ID</th>
          <th>Type of Request</th>
          <th>Date Requested</th>
          <th>Action</th>
        </tr>
      </thead>
    </table>
  </div>
 </div>
</div>

  
`; 
document.getElementById('homePage').innerHTML = homePage;

let requestPage = '';
requestPage += `
 <div class="container py-5">
  <div class="row">
   <div class="card">
    <div class="card-header bg-white">
      <h2 class="pt-2 fw-bold text-center">Citizen File Request</h2>
    </div>
    <div class="card-body">
      <table class="table table-responsive">
       <thead>
        <tr>
          <th>User ID</th>
          <th>Type of Request</th>
          <th>Date Requested</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
       </thead>
       <tbody id="tableRequest"></tbody>
      </table>
    </div>
   </div>
  </div>
 </div>
`;
document.getElementById('requestPage').innerHTML = requestPage;

let RequestingPage = '';
RequestingPage += `
<div class="container py-5 w-50">
 <div class="row">
  <div class="card">
   <div class="card-header bg-white">
    <h4 class="fw-bold text-center mt-1">Add Document</h4>
   </div>
   <div class="card-body">
     <form action="javascript:void(0)" id="documentForm" onsubmit="handleAddDocument(this)">
     <div class="container">
      <div class="row text-center">
       <p class="fw-bold" id="error_message"></p>
      </div>
     </div>
     <div class="mt-2">
     <label for="DocumentName">Document Name</label>
     <input type="text" class="form-control" id="DocumentName" name="DocumentName" placeholder="Document Name">
     </div>
     <div class="mt-2">
     <label for="description">Description</label>
     <textarea cols="3" class="form-control" id="description" name="description"></textarea>
    </div>
    <div class="mt-2">
     <button type="submit" class="btn btn-success float-end" id="btnAddDocument">Add Document</button>
    </div>
     </form>
   </div>
  </div>
 </div>
</div>
`;
document.getElementById('addRequestingPage').innerHTML = RequestingPage;
//View Details
let ModalView = '';
ModalView += `
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
 <input type="text" class="form-control" id="first_name" name="first_name" disabled>
</div>
<div class="col-12 col-sm-6">
 <label for="middle_name">Middle Name</label>
 <input type="text" class="form-control" id="middle_name" name="middle_name" disabled>
</div>
</div>

<div class="row mt-2">
<div class="col-12 col-sm-6">
 <label for="last_name">Last Name</label>
 <input type="text" class="form-control" id="last_name" name="last_name" disabled>
</div>
<div class="col-12 col-sm-6">
 <label for="contact_number">Contact Number</label>
 <input type="text" class="form-control" id="contact_number" name="contact_number" disabled>
</div>
</div>

<div class="row mt-2">
<div class="col-12 col-sm-6">
 <label for="age">Age</label>
 <input type="text" class="form-control" id="age" name="age" disabled>
</div>
<div class="col-12 col-sm-6">
 <label for="address">Address</label>
 <input type="text" class="form-control" id="address" name="address" disabled>
</div>
</div>

<div class="mt-2">
 <label for="document_type">Document Type</label>
 <input type="text" class="form-control" id="document_type" name="document_type" disabled>
</div>

<div class="mt-2">
  <label for="purpose">Purpose</label>
  <textarea id="purpose" name="purpose" class="form-control" rows="3" disabled></textarea>
</div>
 <div class="float-end m-2">
 <button class="btn btn-warning">Decline</button>
<button class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button>
 </div>
 
</form>
</div>
`;
document.getElementById('modalView').innerHTML = ModalView;


let ModalSendingPDF = '';
ModalSendingPDF += `
<div class="modal-header">
<h1 class="modal-title fs-5 title" id="exampleModalLabel">Send PDF Document</h1>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>

<div class="modal-body">
<form id="pdf_form" action="javascript:void(0)" onsubmit="handleSendPdf(this)" enctype="multipart/form-data">
 <div class="container">
  <div class="row">
   <span id="error" class="text-center text-danger fw-bold"></span>
  </div>
 </div>
 <input type="hidden" id="user_id" name="user_id">
 <label for="file" class="fw-bold">Pdf File</label>
 <input type="file" class="form-control" name="file" id="file">
 <br><br>
 <button type="submit" id="btnSendPdf" class="btn btn-primary float-end">Send</button>
  
 </form>
</div>

`; 

document.getElementById('modalSendingPDF').innerHTML = ModalSendingPDF;