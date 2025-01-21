<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class subHeading extends Model
{
    protected $fillable = [
        'heading',
        'content',
        'post_id',
    ];
}
