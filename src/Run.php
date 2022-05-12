<?php

namespace g4t\Multithread;

use Illuminate\Support\Facades\Route;

class Run
{

    public static function multithread($list = [])
    {
        $url = self::route();
        $js = dirname(__FILE__).'/js/index.js';
        $list = json_encode($list);
        $command = "node {$js} '{$url['url']}' '{$list}' '{$url['method']}' ";
        shell_exec($command);
    }



    public static function route()
    {
        $route = Route::current();
        $url = route($route->getName());
        $method = $route->methods()[0];
        return [
            'url' => $url,
            'method' => $method
        ];
    }

    public static function check()
    {
        if(request()->has('multithread'))
        {
            return false;
        }
        return true;
    }


    public static function request()
    {
        return request()->except('multithread');
    }

}
