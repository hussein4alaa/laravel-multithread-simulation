<?php

namespace App\Http\Controllers;

use g4t\Multithread\Run;

class ExampleController extends Controller
{
    public function query()
    {
        $files = [
            [
                "id" => 1,
                "name" => "file1.zip",
                "url" => "https://speed.hetzner.de/100MB.bin"
            ],
            [
                "id" => 2,
                "name" => "file2.zip",
                "url" => "https://speed.hetzner.de/100MB.bin"
            ],
            [
                "id" => 3,
                "name" => "file3.zip",
                "url" => "https://speed.hetzner.de/100MB.bin"
            ],
            [
                "id" => 4,
                "name" => "file4.zip",
                "url" => "https://speed.hetzner.de/100MB.bin"
            ],
            [
                "id" => 5,
                "name" => "file5.zip",
                "url" => "https://speed.hetzner.de/100MB.bin"
            ]
        ];
        return $files;
    }



    public function index()
    {
        if(Run::check()) {
            $files = $this->query();
            Run::multithread($files);
        } else {
            $data = Run::request();
            $path = public_path()."/files//".$data['name'];
            shell_exec("wget {$data['url']} -O {$path}");
        }
    }



}
