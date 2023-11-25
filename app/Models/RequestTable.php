<?php 

 namespace App\Models;
 use CodeIgniter\Model;

 class RequestTable extends Model{
    protected $table = 'requestedTable';
    protected $primaryKey = 'id';
    protected $allowedFields = [ 
        'user_id',
        'first_name',
        'middle_name', 
        'last_name', 
        'contact_number', 
        'age',
        'address', 
        'requestedDocument', 
        'purpose',
        'status', 
        'date_requested'
    ];

    function __construct()
    {
        $db = \Config\Database::connect();
        parent :: __construct();
        $this->table = 'requestedTable';
    }

    function request_all(){
        $sql = $this->db->table('requestedTable')
                        ->selectCount('user_id')
                        ->from(`requestedTable`);
    
        if($sql->countAllResults(false)>0){
            $result = $sql->get()->getRow();
            return $result;
        }
    }
 }