<?php

use Illuminate\Support\Facades\Route;

//Home or generak
Route::get('/', function () {
    return view('welcome');
});

//Posts
Route::get('posts', 'PostController@index')->name('post.index');
Route::get('posts/{post}', 'PostController@show')->name('post.show');
Route::get('posts/create', 'PostController@create')->name('post.create');
Route::post('posts', 'PostController@store')->middleware('auth')->name('post.store');

//Comments
Route::get('posts/{post}/comments', 'CommentController@index')->name('comment.index');
Route::post('posts/{post}/comments', 'CommentController@store')->middleware('auth')->name('comment.store');

//Replies
Route::get('comments/{comment}/replies', 'ReplyController@index')->name('reply.index');
Route::post('comments/{comment}/replies', 'ReplyController@store')->middleware('auth')->name('reply.store');


Auth::routes();
