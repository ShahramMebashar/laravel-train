<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\App;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence,
        'body' => $faker->text(800),
        'user_id' => factory(User::class)
    ];
});
