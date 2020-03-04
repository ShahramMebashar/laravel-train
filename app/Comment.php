<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $guarded = [];

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
}
