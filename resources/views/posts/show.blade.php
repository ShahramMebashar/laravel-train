@extends('layouts.app')

@section('content')
    <main class="post post-single page-posts">
            <div class="container mx-auto py-6">
                        <h2 class="text-6xl mb-4 text-gray-900">{{ $post->title }}</h2>
                        <article class="post p-6 bg-white mb-6 rounded">

                            <div class="header mb-8 flex text-gray-500 items-end">
                                    <div class="text-muted flex items-center">
                                        <span class="avatar w-8 h-8 rounded-full bg-gray-200"></span>
                                        <span class="author ml-2">{{ $post->owner->name }}</span>


                                    </div>
                                    <div class="flex ml-auto">
                                    <span class="views">{{ $post->views }} {{ $post->views > 1 ? 'views' : 'view'}}</span>
                                        <time class="text-muted ml-4">{{ $post->created_at->diffForHumans() }}</time>
                                    </div>


                            </div>

                            <div class="content text-gray-700 text-xl px-12">
                                    {{ $post->body }}
                            </div>


                        </article>
                        <div class="comments mx-auto md:w-8/12">
                            <h2 class="text-2xl font-bold text-gray-800 mb-3">Comments</h2>
                            <post-comment url="{{route('comment.index', ['post'=> $post]) }}" post-id="{{$post->id}}"></post-comment>
                        </div>
            </div>
    </main>
@endsection
