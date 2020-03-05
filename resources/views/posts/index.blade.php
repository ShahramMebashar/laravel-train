@extends('layouts.app')

@section('content')
    <main class="posts page-posts">
            <div class="container mx-auto">
                    <h1 class="text-6xl font-bold mb-6">Articles</h1>
                    @foreach ($posts as $post)
                        <article class="post p-6 bg-white @if(!$loop->last) mb-6 @endif rounded shadow-md">
                            <div class="header mb-4">
                                <a href="{{ $post->path() }}"><h2 class="text-2xl font-bold">{{ $post->title }}</h2></a>
                            </div>

                           <div class="body flex">
                               <div class="thumbnail">
                               <img src="{{$post->thumbnail}}" alt="{{$post->title}}" class="w-64">
                               </div>
                                <div class="content text-gray-600 ml-6 flex-1">
                                    {{ Str::limit($post->body, 150) }}
                                </div>
                           </div>

                            <div class="footer flex text-gray-500 mt-6 items-end">
                                <div class="text-muted flex items-center">
                                    <span class="avatar w-12 h-12 rounded-full bg-gray-200"></span>
                                    <span class="author ml-2">{{ $post->owner->name }}</span>
                                </div>
                                <time class="ml-auto text-muted">{{ $post->created_at->diffForHumans() }}</time>
                            </div>
                        </article>
                    @endforeach
            </div>
    </main>
@endsection