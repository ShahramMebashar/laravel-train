<?php

use Illuminate\Support\Facades\Route;

//Home or generak
Route::get('/', function () {
    return view('welcome');
});

//Posts
Route::get('posts', 'PostController@index')->name('posts.index');
Route::get('posts/{post}', 'PostController@show')->name('posts.show');
Route::get('posts/create', 'PostController@create')->name('posts.create');
Route::post('posts', 'PostController@store')->middleware('auth')->name('posts.store');

//Comments
Route::get('posts/{post}/comments', 'CommentController@index')->name('comments.index');
Route::post('posts/{post}/comments', 'CommentController@store')->middleware('auth')->name('comments.store');

//Replies
Route::get('comments/{comment}/replies', 'ReplyController@index')->name('replies.index');
Route::post('comments/{comment}/replies', 'ReplyController@store')->middleware('auth')->name('replies.store');


Auth::routes();
