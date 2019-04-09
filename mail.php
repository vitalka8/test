<?php
$recepient = "vitalka8@gmail.com";
$siteName = "HTML-bazarim";
$comment = trim($_POST["comment"]);

$message = "Какая задача: $comment";
$pagetitle = "Задача с сайта";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>