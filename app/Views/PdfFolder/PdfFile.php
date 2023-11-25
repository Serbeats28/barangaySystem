<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
    
</head>
<style>
    .main{
            height: 600px;
            width: 800px;
            margin: auto;
            background-color: rgb(255, 0, 238);
            margin-top: 10px;
            border: 6px solid black;
            position: relative;
    }
    .certificate-body{
            height: 500px;
            width: 750px;
            background-color: white;
            margin: auto;
            position: absolute;
            margin-top: 25px;
            margin-left: 20px;
            border: 3px solid red;
    }
    .logo{
            height: auto;
            width: 140px;
            float: left;
            margin-left: 50px;
            margin-top: 30px;
            border-radius: 20px;
    }
    .certificate-header{
            font-size: 30px;
            text-align: center;
            font-family:Bookman Old Style;
            font-weight: bolder;
            margin-top: 57px;
    }
    .description{
        text-align: center;
        font-weight: bold;
    }
    .name{
        text-align: center;
        font-size: x-large;
        color: red;
    }

    .date{
      display: flex;
      justify-content: flex-end;
      margin-right: 50px;
      font-weight: bold;
    }
    
   
</style>
 

<body>
  <input type="hidden" id="user_id" name="user_id" value="<?= $detail['id']?>" >
  <div class="main" id="pdf">
     <div class="certificate-body">
     <img src="<?= base_url('assets/image/logo cab.png')?>" alt="logo" class="logo">
       <div class="certificate-header">
       <h1 class="title" id="title"></h1>
       </div>
       <div class="body">
        <hr>
         <p class="description" id="description"></p>
          <h3 class="name" id="name"></h3>
           <p class="text-center">Full Name</p>
          <h4 class="text-center fw-bold mb-2">For The Purpose Of</h4>
         <br>
         <h5 class="fw-bold text-center" id="purpose"></h5>
         <br><br>
       
         <br>
         <div class="date">
           <p id="date_release"></p>
         </div>
       </div>
     </div>
  </div>
  <br><br><br>
  <div class="py-3">
    <div class="container">
        <div class="row">
            <button id="btnDownload" class="btn btn-primary">Download PDF</button>
        </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js"></script>
  <script>
    //javascript:void(0)
     loadData = () =>{
      let user_id = document.getElementById('user_id').value;
       let req = new XMLHttpRequest();
       req.open('GET','http://localhost:8080/loadPdf/' + user_id,true);
       req.onload = function(){
        if(this.status == 200){
          let response = JSON.parse(this.responseText);
          document.getElementById('title').innerHTML = response.document_title;
           document.getElementById('description').innerHTML = response.description;
           document.getElementById('name').innerHTML = response.full_name;
           document.getElementById('purpose').innerHTML = response.purpose;
           document.getElementById('date_release').innerHTML = response.date_release;
        }
       }
       req.send();
     }
     loadData();
     window.onload = function(){
       document.getElementById('btnDownload').addEventListener('click',()=>{
         let pdf = document.getElementById('pdf');
         let name = document.getElementById('name').textContent
         console.log(pdf)
         console.log(window);
         let opt = {
          margin:1,
          filename: name,
          image:{type: 'jpeg', quality: 0.98},
          html2canvas:{scale: 2},
          jsPDF:{unit: 'in', format: 'letter', orientation: 'landscape'}
         }
         html2pdf().from(pdf).set(opt).save();
       })
     }
  </script>
</body>

</html>