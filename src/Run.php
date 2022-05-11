<?php

namespace g4t\Multithread;

class Run
{

    public static function multithread($url, $list = [])
    {
        if(is_null($url) OR empty($list)) {
            return response()->json(["message" => "Params Required"], 401);
        }
        $js = dirname(__FILE__).'/js/index.js';
        $list = json_encode($list);
        $js = str_replace("\\", "\\\\", $js);
        $command = "node {$js} '{$url}' '{$list}' ";
        shell_exec($command);
    }

}
