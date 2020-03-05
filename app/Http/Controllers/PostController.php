<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return view('posts.index', [ 'posts' => Post::paginate(5) ]);
    }

    public function show(Request $request, Post $post)
    {
        auth()->loginUsingId(2);
        $post->addView($request);

        session(['last_visit' => now(), 'user_ip' => $request->ip() ]);

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
