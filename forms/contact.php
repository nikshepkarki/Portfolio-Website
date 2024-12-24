<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com and info.nikshepkarki@gmail.com with your real receiving email addresses
  $receiving_email_addresses = ['contact@example.com', 'info.nikshepkarki@gmail.com'];

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  // Loop through each email address and set it to send the email to all
  foreach ($receiving_email_addresses as $email_address) {
      $contact->to = $email_address;
      $contact->from_name = $_POST['name'];
      $contact->from_email = $_POST['email'];
      $contact->subject = $_POST['subject'];

      // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
      /*
      $contact->smtp = array(
        'host' => 'example.com',
        'username' => 'example',
        'password' => 'pass',
        'port' => '587'
      );
      */

      $contact->add_message( $_POST['name'], 'From');
      $contact->add_message( $_POST['email'], 'Email');
      $contact->add_message( $_POST['message'], 'Message', 10);

      // Send the email
      echo $contact->send();
  }
?>
