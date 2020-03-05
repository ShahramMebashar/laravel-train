<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $guarded = [];

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function addComment($attributes)
    {
        return $this->comments()->create($attributes);
    }

    public function path()
    {
        return 'posts/' . $this->id;
    }
    public function addView($request = null)
    {
        if ($request && $request->session()->has('last_visit')) {
            return null;
        }

        return $this->increment('views');
    }
}
