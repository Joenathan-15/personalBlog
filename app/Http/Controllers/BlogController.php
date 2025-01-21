<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\subHeading;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->where("status","release")->get();
        return Inertia::render("Blog", [
            "posts" => $posts
        ]);
    }

    public function details(string $slug)
    {
        $post = Post::where("slug", $slug)->first();
        $subheading = subHeading::where("post_id", $post->id)->get();
        return Inertia::render("Details", [
            "post" => $post,
            "subHeading" => $subheading
        ]);
    }
}
