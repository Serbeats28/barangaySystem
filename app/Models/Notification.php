<?php

namespace App\Models;
use CodeIgniter\Model;

class Notification extends Model{

    protected $table = 'notification_table';
    protected $primaryKey = 'id';
    protected $allowedFields = [
        'user_id',
        'pdf_name',
        'notification_type',
        'notification_status',
        'created_at',
    ];

    function __construct()
    {
        $db = \Config\Database::connect();
        parent :: __construct();
        $this->table = 'notification_table';
    }

    function loadUserRequest($data){
        $sql = $this->db->table('notification_table')
                        ->selectCount('user_id')
                        ->from(`notification_table`)
                        ->where([
                            'user_id'=>$data,
                            'notification_status'=>'Unseen' 
                            
                        ]);
        if($sql->countAllResults(false)>0){
           $result =  $sql->get()->getRow();
            return $result;
        }
    }

  function UpdateData($id){
    $db = db_connect();
    $status = 'Seen';
    $db->query("UPDATE notification_table Set notification_status = '$status' WHERE user_id = '$id'");
  }
}