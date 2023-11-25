//count all requested document
countRequest = () =>{
   let req = new XMLHttpRequest();
   req.open('GET','http://localhost:8080/countRequest',true);
   req.onload = function(){
    if(this.status == 200){
       let response = JSON.parse(this.responseText);
       document.getElementById('countRequest').innerHTML = response.user_id;
    }
   }
   req.send();
}
countRequest();

//Add Document for request
handleAddDocument = () =>{
    let documentName = document.getElementById('DocumentName').value;
    let description = document.getElementById('description').value;
    let form = document.querySelector('#documentForm');
    if(documentName == '' || description == ''){
        error_message = "All fields required";
        document.getElementById('error_message').classList.add('text-danger');
        document.getElementById('error_message').innerHTML = error_message;
    }else{
        let btnSubmit = document.getElementById('btnAddDocument');
        btnSubmit.innerHTML = 'Adding....';

        let formData = new FormData();
        formData.append("documentName", documentName);
        formData.append("description", description);
        let req = new XMLHttpRequest();
        req.open('POST','http://localhost:8080/storeDocument',true);
        req.onload = function(){
            if(this.status == 200){
                let response = JSON.parse(this.responseText);
                btnSubmit.innerHTML = 'Add Document';
                form.reset();
                alertify.set('notifier', 'position', 'top-right')
                alertify.success(response.message);
            }
        }
        req.send(formData);
    }
}

//Display All requested Document
DisplayRequest = () =>{
 let req = new XMLHttpRequest();
 req.open('GET','http://localhost:8080/retrieve_requested',true);
 req.onload = function(){
    if(this.status == 200){
       let data = JSON.parse(this.responseText);
       let table = '' 
     for(i in data){
        table +=`
        <tr>
          <td>${data[i].user_id}</td>
          <td>${data[i].requestedDocument}</td>
          <td>${data[i].date_requested}</td>
          <td>${data[i].status}</td>
          <td>
            <button type="button" onclick="handleView(${data[i].user_id})" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal1">Detail</button>
            <a href="http://localhost:8080/pdf/${data[i].id}" target="_blank" class="btn btn-success">View PDF</a>
            <button class="btn btn-primary" onclick="handlePdfModal(${data[i].id})" data-bs-toggle="modal" data-bs-target="#modal2">Send PDF</button>
          </td>
        </tr>
        `
     }
     document.getElementById('tableRequest').innerHTML = table;
    }
 }
 req.send();
}
DisplayRequest();

//View All details 
handleView = (id) => {
   let req = new XMLHttpRequest();
   req.open('GET','http://localhost:8080/view_details/' + id ,true);
   req.onload = function(){
    if(this.status == 200){
       let data = JSON.parse(this.responseText);
       for(i in data){
        document.querySelector('#first_name').value = data[i].first_name;
        document.querySelector('#middle_name').value = data[i].middle_name;
        document.querySelector('#last_name').value = data[i].last_name;
        document.querySelector('#contact_number').value = data[i].contact_number;
        document.querySelector('#age').value = data[i].age;
        document.querySelector('#address').value = data[i].address;
        document.querySelector('#document_type').value = data[i].requestedDocument;
        document.querySelector('#purpose').innerHTML = data[i].purpose;
        
       }
    }
   }
   req.send();
}



//handle Pdf Modal
handlePdfModal = (id) =>{
  document.getElementById('user_id').value = id;
}

handleSendPdf = (e) =>{
   let id = document.getElementById('user_id').value
   let pdf_file = e.file.files[0];
   let file = document.querySelector('#file').value;

   if(file == ''){
      error = 'Select Pdf file'
      document.getElementById('error').innerHTML = error;
   }else{
     let btnSendPdf = document.getElementById('btnSendPdf');
     btnSendPdf.innerHTML = 'Sending...';

     let fd = new FormData();
     fd.append("id", id);
     fd.append("file", pdf_file)
     let req = new XMLHttpRequest();
     req.open('POST','http://localhost:8080/sendPdf/',true);
     req.onload = function(){
       if(this.status == 200){
         let response = JSON.parse(this.responseText);
         if(response.status == 'success'){
           let modal = bootstrap.Modal.getOrCreateInstance("#modal2");
           modal.hide();
           btnSendPdf.innerHTML = 'Send';
           document.querySelector('#pdf_form').reset();
           alertify.set('notifier', 'position', 'top-right')
           alertify.success(response.message);
           document.getElementById('tableRequest').innerHTML = '';
           DisplayRequest();
         }
       }
     }
     req.send(fd);

   }
}