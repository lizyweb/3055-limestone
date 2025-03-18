<?php

// $email    = $_POST['email'];

// if(trim($email) == '') {
// 	echo '<div class="error_message">Attention! You must enter your email.</div>';
// 	exit();
// }

// $to = "mohammadashif0045@gmail.com";
// $subject = 'You\'ve been contacted by ' . $email . '.';
// $msg = .$email."Subscribed Your Website";
// $headers = "From: $email";

// if(mail($to, $subject, $msg, $headers))
//  {
// 	echo "<fieldset>";
//     echo "<div id='success_page'>";
// 	echo "<h1>Thanks for Subscribing us - Limestone</h1>";
// 	echo "<p>Thanks for subscribing to our Website. You'll always receive updates from us. And we won't share and sell your information. </p>";
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

$email = $_POST['email'];

// Validate email
if(trim($email) == '') {
    echo '<div class="error_message">Attention! You must enter your email.</div>';
    exit();
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo '<div class="error_message">Attention! You must enter a valid email.</div>';
    exit();
}

$to = "sales@limestone.life";
$subject = 'You\'ve been contacted by ' . $email . '.';
$msg = $email . " Subscribed to Your Website";
$headers = "From: $email";

if(mail($to, $subject, $msg, $headers)) {
    // Email has been sent successfully, echo a success page.
    echo "<fieldset>";
    echo "<div id='success_page'>";
    echo "<h1>Thanks for Subscribing to Us - Limestone</h1>";
    echo "<p>Thanks for subscribing to our Website. You'll always receive updates from us. We won't share or sell your information.</p>";
    echo "</div>";
    echo "</fieldset>";
    echo '<a href="index.html">Return to Home</a>';
} else {
    echo 'ERROR!';
}

?>