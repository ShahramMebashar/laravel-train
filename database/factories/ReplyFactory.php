<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Reply;
use Faker\Generator as Faker;

$factory->define(Reply::class, function (Faker $faker) {
    return [
        'body' => $faker->sentence,
        'user_id' => factory(\App\User::class),
        'comment_id' => factory(\App\Comment::class)
    ];
});
