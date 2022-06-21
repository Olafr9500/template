<?php
// if ((!isset($_SERVER['HTTPS'])) || ($_SERVER['HTTPS'] != 'on')) {
//     header("Location:https://".$_SERVER["HTTP_HOST"].$_SERVER["REQUEST_URI"]);
// }
if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case 'home':
            include 'public/pages/index.html';
            break;
        case 'about':
            include 'public/pages/about.html';
            break;
    }
} else {
    include_once 'public/pages/index.html';
}
