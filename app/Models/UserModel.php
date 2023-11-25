<?php

namespace App\Models;
use CodeIgniter\Model;

class UserModel extends Model{
    protected $table = 'user';
    protected $primaryKey = 'id';
    protected $allowedFields = [
        'user_id',
        'email',
        'Username',
        'Password',
        'created_at',
    ];

    function __construct()
    {
        $db = \Config\Database::connect();
        parent:: __construct();
        $this->table = 'user';
    }
}