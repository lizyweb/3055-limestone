<?php

// $name = $_POST['name'];
// $email    = $_POST['email'];
// $phone   = $_POST['phone'];
// $comments   = $_POST['comments'];

// if(trim($name) == '') {
// 	echo '<div class="error_message">Attention! You must enter your name.</div>';
// 	exit();
// }  
// else if(trim($email) == '') {
// 	echo '<div class="error_message">Attention! Please enter a valid email address.</div>';
// 	exit();
// } 
// else if(trim($phone) == '') {
// 	echo '<div class="error_message">Attention! Please enter your phone.</div>';
// 	exit();
// }
// else if(trim($comments) == '') {
// 	echo '<div class="error_message">Attention! Please enter your message.</div>';
// 	exit();
// }

// $to = "mohammadashif0045@gmail.com";
// $subject = 'You\'ve been contacted by ' . $name . '.';
// $msg = "Name: ".$name."\n\nemail: ".$email."\n\nphone: ".$phone."\n\nCommets:\n".$comments;
// $headers = "From: $email";

// if(mail($to, $subject, $msg, $headers))
//  {
// 	echo "<fieldset>";
//     echo "<div id='success_page'>";
// 	echo "<h1>Your Message Sent Successfully.</h1>";
// 	echo "<p>Thank you <strong>$name </strong>, your message has been submitted to us. We will contact you shortly </p>";
// 	echo "</div>";
// 	echo "</fieldset>";

// 	echo '<a href="index.html">Return to Home</a>';
// } 
// else {
// 	echo 'ERROR!';
// }


// Enable detailed error messages
error_reporting(E_ALL);
ini_set('display_errors', 1);

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$comments = $_POST['comments'];

// Validate name
if (trim($name) == '') {
    echo '<div class="error_message">Attention! You must enter your name.</div>';
    exit();
}

// Validate email
if (trim($email) == '') {
    echo '<div class="error_message">Attention! Please enter a valid email address.</div>';
    exit();
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo '<div class="error_message">Attention! You must enter a valid email address.</div>';
    exit();
}

// Validate phone
if (trim($phone) == '') {
    echo '<div class="error_message">Attention! Please enter your phone number.</div>';
    exit();
}

// Validate comments
if (trim($comments) == '') {
    echo '<div class="error_message">Attention! Please enter your message.</div>';
    exit();
}

$to = "sales@limestone.life";
$subject = 'You\'ve been contacted by ' . $name . '.';
$msg = "Name: " . $name . "\n\nEmail: " . $email . "\n\nPhone: " . $phone . "\n\nComments:\n" . $comments;
$headers = "From: $email";

if (mail($to, $subject, $msg, $headers)) {
    echo "<fieldset>";
    echo "<div id='success_page'>";
    echo "<h1>Your Message Sent Successfully.</h1>";
    echo "<p>Thank you <strong>$name</strong>, your message has been submitted to us. We will contact you shortly.</p>";
    echo '<a href="index.html">Return to Home</a>';
    echo "</div>";
    echo "</fieldset>";
} else {
    echo '<div class="error_message">ERROR! Your message could not be sent.</div>';
}

?>