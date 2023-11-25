<?php

namespace App\Controllers;
use CodeIgniter\Controller;
use App\Models\UserModel;
use App\Models\Document;
use App\Models\RequestTable;
use App\Models\Notification;

class UserController extends BaseController {

    function home_pages(){
        return view('user/index');
    }

    function store(){
       $pass1 = $this->request->getVar('password');
       $pass2 = $this->request->getVar('conPass');

       if($pass1 == $pass2){
          $userModel = new UserModel();
         $check = $userModel->where(['email'=>$this->request->getPost('email')])->find();
         if(count($check) > 0){
           return $this->response->setJSON([
            'status'=>'error',
            'message'=>'Email is already exist'
           ]);
         }else{
            $randID = rand(000000,999999);
            $user_id = '2023'.$randID;
            $data = [
                'user_id'=>$user_id,
                'email'=>$this->request->getPost('email'),
                'Username'=>$this->request->getPost('username'),
                'Password'=>password_hash($this->request->getVar('password'),PASSWORD_DEFAULT)
            ];

            $userModel->save($data);
            return $this->response->setJSON([
                'status'=>'success',
                'message'=>'Registered Successfully'
            ]);
         }
       }else{
        return $this->response->setJSON([
            'status'=>'error',
            'message'=>'Password and Confirm Password does not match'
        ]);
       }
    }

    function sign_in(){
       $email = $this->request->getPost('email');
       $password = $this->request->getVar('password');
       $userModel = new UserModel();
       $data = $userModel->where('email', $email)->first();
       if($data){
        $pass = $data['Password'];
        $password_verify = password_verify($password, $pass);

        if($password_verify){
           return $this->response->setJSON([
            'status'=>'success',
            'user_id'=>$data['user_id'],
           ]);
        }else{
            return $this->response->setJSON([
                'status'=>'error',
                'message'=>'Password is incorrect'
            ]);
        }

       }else{
        return $this->response->setJSON([
            'status'=>'error',
            'message'=>'Email does not exist'
        ]);
       }
    }


    function verify($id){
        $user = new UserModel();
        $data = $user->where('user_id', $id)->find();

        if(count($data) > 0){
            return $this->response->setJSON([
                'status'=>'success'
            ]);
        }else{
            return $this->response->setJSON([
                'status'=>'error'
            ]);
        }
    }

    function documentType(){
     $document = new Document();
     $data = $document->findAll();
     return $this->response->setJSON($data);
    }

    function store_request(){
       $requestTable = new RequestTable();
       $status = 'Pending';
       $data = [
        'user_id'=>$this->request->getPost('user_id'),
        'first_name'=>$this->request->getPost('first_name'),
        'middle_name'=>$this->request->getPost('middle_name'), 
        'last_name'=>$this->request->getPost('last_name'), 
        'contact_number'=>$this->request->getPost('contact_number'), 
        'age'=>$this->request->getPost('age'),
        'address'=>$this->request->getPost('address'), 
        'requestedDocument'=>$this->request->getPost('requestedDocument'), 
        'purpose'=>$this->request->getPost('purpose'),
        'status'=>$status
       ];

       $requestTable->save($data);
       return $this->response->setJSON([
        'status'=>'success',
        'message'=>'Requested Successfully'
       ]);
    }

    function notification($id){
        $notification = new Notification();
        $data['data'] = $notification->loadUserRequest($id);
        return $this->response->setJSON($data);
    }

    function view_request($id){
        $notification = new Notification();
        $notification->UpdateData($id);
        $data = $notification->where('user_id', $id)->find();
        return $this->response->setJSON($data);
    }
}

