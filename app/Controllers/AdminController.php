<?php

namespace App\Controllers;


use CodeIgniter\Controller;
use App\Models\RequestTable;
use App\Models\Document;
use App\Models\Notification;
use App\Models\PdfDocument;

class AdminController extends BaseController
{
     function index()
    {
        return view('admin/index');
    }

    function countRequest(){
        $requestTable = new RequestTable();
        $data = $requestTable->request_all();
        return $this->response->setJSON($data);
    }

    function storeDocument(){
       $document = new Document();
       $data = [
        'document_name'=>$this->request->getPost('documentName'),
        'description'=>$this->request->getPost('description')
       ];

       $document->save($data);
       return $this->response->setJSON([
        'status'=>'success',
        'message'=>'Added Successfully'
       ]);
    }

    function retrieve_requested(){
        $requestTable = new RequestTable();
        $data = $requestTable->findAll();
        return $this->response->setJSON($data);
    }

    function view_details($id){
        $requestTable = new RequestTable();
        $data = $requestTable->where('user_id', $id)->find();
        if(count($data) > 0){
          return $this->response->setJSON($data);
        }else{
            return false;
        }

        
    }

   
  function pdf($id){
    $requestedTable = new RequestTable();
    $data1 = $requestedTable->find($id);
    $document = new Document();
    $document_type = $document->where('document_name', $data1['requestedDocument'])->find();
    foreach($document_type as $row){
        $description = $row['description'];
        $document_name = $row['document_name'];
    }
    $full_name = $data1['first_name']. ' ' .$data1['middle_name']. ' ' .$data1['last_name']; 
    $data2 = [
            'user_id'=>$data1['user_id'],
            'document_title'=>$document_name,
            'full_name'=>$full_name,
            'description'=>$description,
            'purpose'=>$data1['purpose'],
            'date'=>$data1['date_requested']
    ];

    $pdfDocument = new PdfDocument();
    $validate = $pdfDocument->where('user_id', $data1['user_id'])->find();
    if(count($validate)>0){
        foreach($validate as $row){
           $pdfID = $row['id'];
        }
        $pdfDocument->update($pdfID,$data2);
    }else{
        $pdfDocument->save($data2);
    }

    $getData = $pdfDocument->where('user_id', $data1['user_id'])->find();
    foreach($getData as $row){
        $user_id = $row['id'];
    }
    $data3['detail'] = $pdfDocument->find($user_id);
    return view('PdfFolder/PdfFile', $data3);
   
  }

  function loadPdf($id){
    $pdfDocument = new PdfDocument();
    $getData = $pdfDocument->find($id);
    return $this->response->setJSON($getData);
}

function sendPdf(){
    $requestTable = new RequestTable();
    $status = 'Done';
    $id = $this->request->getPost('id');
    $data2 = $requestTable->find($id);
    $file = $this->request->getFile('file');
    
    if($file->isValid() && !$file->hasMoved()){
        $pdfFilename = $file->getRandomName();
        $file->move('assets/pdf/', $pdfFilename);
    }
   
   $notification = new Notification();
   $notification_status = 'Unseen';
   $data3 = [
    'user_id'=>$data2['user_id'],
    'pdf_name'=>$pdfFilename,
    'notification_type'=>$data2['requestedDocument'],
    'notification_status'=>$notification_status
   ];
   $notification->save($data3);
   $data=[
    'status'=>$status
    ];
   $requestTable->update($id, $data);
   
   return $this->response->setJSON([
    'status'=>'success',
    'message'=>'Send Successfully'
   ]);
 }
}