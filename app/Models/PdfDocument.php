<?php

namespace App\Models;
use CodeIgniter\Model;

class PdfDocument extends Model{
    protected $table = 'creating_form';
    protected $primaryKey = 'id';
    protected $allowedFields = [
        'user_id',
        'full_name',
        'document_title',
        'description',
        'purpose',
        'date_release'
    ];

    function __construct()
    {
        $db = \Config\Database::connect();
        parent :: __construct();
        $this->table = 'creating_form';
    }
}