# laravel multithread
#### 📌 Note : this package working on linux only (for now).

<img src="https://github.com/hussein4alaa/laravel-multithread-simulation/blob/1.0.0/laravel.png?raw=true" width="450" />

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

### License

laravel multithread simulation is free software licensed under the MIT license.
