<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index(Post $post)
    {
        return Comment::with(['owner', 'replies'])
            ->where('post_id', $post->id)
            ->paginate(5);
    }
    public function store(Post $post)
    {
        request()->validate(['body' => 'required|min:2|max:300']);

        return $post->comments()->create(['body' =>request()->get('body'), 'user_id' => auth()->id()]);
    }
}
