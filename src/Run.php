<?php

namespace App\Multithread;

class Run
{

    public static function call($url, $list = [])
    {
        $js = dirname(__FILE__).'/js/foreach.js';
        $list = json_encode($list);
        $js = str_replace("\\", "\\\\", $js);
        $command = "node {$js} '{$url}' '{$list}' ";
        shell_exec($command);
    }

}
