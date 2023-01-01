<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Man in the bucket',
                'slug' => 'the-man-in-the-bucket',
                'category' => 'Action & Relations',
                'video_url' => 'https://youtu.be/gDkrQp-zQCU',
                'thumbnail' => 'https://placeimg.com/640/480/any',
                'rating' => 4.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'The girl in the dipper',
                'slug' => 'the-girl-in-the-dipper',
                'category' => 'Love & Funny',
                'video_url' => 'https://youtu.be/gDkrQp-zQCU',
                'thumbnail' => 'https://placeimg.com/640/480/animals',
                'rating' => 4.2,
                'is_featured' => 0,

            ],
            [
                'name' => 'The girl in the dipper II',
                'slug' => 'the-girl-in-the-dipper-II',
                'category' => 'Love & Funny',
                'video_url' => 'https://youtu.be/gDkrQp-zQCU',
                'thumbnail' => 'https://placeimg.com/640/480/animals',
                'rating' => 4.2,
                'is_featured' => 0,
            ],
        ];

        Movie::insert($movies);
    }
}
