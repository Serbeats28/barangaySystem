<?php

namespace App\Models;
use CodeIgniter\Model;

class Document extends Model{
    protected $table = "document_form";
    protected $primaryKey = 'id';
    protected $allowedFields = [
        'document_name',
        'description',
        'date_added'
    ];

    function __construct()
    {
        $db = \Config\Database::connect();
        parent :: __construct();
        $this->table = 'document_form';
    }
}