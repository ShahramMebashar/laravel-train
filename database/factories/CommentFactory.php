<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Comment;
use App\Post;
use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\App;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'body' => $faker->sentence,
        'user_id' => factory(User::class),
        'post_id' => factory(Post::class)
    ];
});
