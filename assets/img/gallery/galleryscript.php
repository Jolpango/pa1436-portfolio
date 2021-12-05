<?php

function endsWith($string, $endString)
{
    $len = strlen($endString);
    if ($len == 0) {
        return true;
    }
    return (substr($string, -$len) === $endString);
}

$files = scandir("./");
foreach($files as $file) {
    if(endsWith($file, ".jpg")) {
        echo "  - url: /image/gallery/" . $file . "\n";
        echo "    alt: " . $file . "\n";
    }
}
