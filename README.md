# laravel multithread simulation
#### Note : this library working on linux only (for now).

## Installation:
Install nodejs in your server.
```sh
sudo apt-get install nodejs
```

Require this package with composer using the following command:
```sh
composer require g4t/laravel-multithread
```

## Usage
##### You have examples in repository in folder `examples`

```shell
use g4t\Multithread\Run;

public function index()
{
    if(Run::check()) {
        $files = $this->query(); # This is an example of query
        Run::multithread($files); # pass query response to `multithread` function
    } else {
        $data = Run::request(); # this similar to work `Request $request`
                                # The same data that comes from the query

        # here what we want to do in multithreaded
        $path = public_path()."/files//".$data['name'];
        shell_exec("wget {$data['url']} -O {$path}");
    }
}


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
    ]
  ];
  return $files;
}
```