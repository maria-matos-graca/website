<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['address']);
    $subject = htmlspecialchars($_POST['subject']);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit();
    }

    // Set recipient email address
    $to = "your-email@example.com"; // Replace with your email address

    // Set email subject
    $email_subject = "New Contact Form Submission: $name";

    // Build the email content
    $email_body = "You have received a new message from your website contact form.\n\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Message:\n$subject\n";

    // Set email headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        // Redirect to a thank you page
        header("Location: thank_you.html");
        exit();
    } else {
        // Display an error message
        echo "Sorry, but the email could not be sent.";
    }
} else {
    echo "Invalid request method.";
}
?>
