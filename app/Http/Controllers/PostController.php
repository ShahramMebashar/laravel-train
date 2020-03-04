<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return views('posts.index', [ 'posts' => Post::paginate(15) ]);
    }

    public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }

    public function store(Request $request)
    {
        $request->validate(['title' => 'requied']);
        auth()->user()->addPost($request->title);
    }
    public function create()
    {
        return view('posts.create');
    }

    public function destory(Post $post)
    {
        if (!auth()->isNot($post->owner)) {
            abort(403);
        }
        return $post->delete();
    }
}
