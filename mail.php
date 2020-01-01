<?php 
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$message = $_POST['message'];
$formcontent="From: $fname $lname\n Message: $message";
$recipient = "maxberniew@gmail.com";
$subject = "Contact Form: $fname $lname";
$mailheader = "From: maxberniew+BallCrazeSupport@gmail.com \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>