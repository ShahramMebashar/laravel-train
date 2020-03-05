<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Comment extends Model
{
    protected $guarded = [];

    protected $dates = [
        'created_at'
    ];

    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope(function ($query) {
            $query->latest();
        });
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function addReply($attributes)
    {
        return $this->replies()->create($attributes);
    }

    public function path()
    {
        return 'comments/' . $this->id;
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->diffForHumans();
    }
}
