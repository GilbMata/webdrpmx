<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

const DEFAULT_RECEIPT       = 'erikdltr@gmail.com';
const DEFAULT_SUBJECT       = 'Nuevo mensaje desde Website DRP';
const RECAPTCHA_SERVER_KEY  = '6Ld6QTglAAAAAPzTVU6hoyY9VUq1yMsTk1_AGOV9';
const RECAPTCHA_SERVER_URL  = 'https://www.google.com/recaptcha/api/siteverify';
const SMTP_USER             = 'erikdltr@gmail.com';
const SMTP_PASS             = 'ofxnzouprvltyfhj';
const SMTP_HOST             = 'smtp.gmail.com';
const SMTP_PORT             = 587;

// Grab contact form
$contact_name       = $_POST['name'];
$contact_company    = $_POST['company'];
$contact_position   = $_POST['position'];
$contact_phone      = $_POST['phone'];
$contact_email      = $_POST['email'];
$contact_message    = $_POST['message'];
$recaptcha_token    = $_POST['g-recaptcha-response'];

// Validate recaptcha
$recaptcha_result = file_get_contents( RECAPTCHA_SERVER_URL . '?secret=' . RECAPTCHA_SERVER_KEY . "&" . 'response=' . $recaptcha_token );
$recaptcha_result = json_decode($recaptcha_result);

if( !$recaptcha_result || !$recaptcha_result->success )
    return response([
        'success'   => false,
        'code'      => 'RECAPTCHA_ERROR'
    ], 401);

// Everything ok, send mail to DRP
$message = getHtmlContactMessage(
    $contact_name,
    $contact_position,
    $contact_company,
    $contact_message,
    $contact_phone,
    $contact_email,
);
    
if( sendEmail($message) )
    return response([
        'success'   => true,
        'code'      => 'SUCCESS'
    ]);
else
    return response([
        'success'   => false,
        'code'      => 'MAIL_ERROR'
    ], 500);

// Misc functions 
function fixCors()
{
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: *");
    header('Access-Control-Allow-Credentials: true');
}

function response($response_array, $status_code=200)
{
    fixCors();
    header('Content-Type: application/json; charset=utf-8');
    http_response_code($status_code);
    echo json_encode($response_array);
}

function sendEmail($html_message)
{
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USER;
        $mail->Password   = SMTP_PASS;
        $mail->SMTPSecure = 'tls';
        $mail->Port       = SMTP_PORT;

        $mail->addAddress(DEFAULT_RECEIPT);

        //Content
        $mail->isHTML(true);
        $mail->Subject = DEFAULT_SUBJECT;
        $mail->Body    = $html_message;
        $mail->send();

        return true;
    } catch (Exception $e) {
        return false;
    }
}

function getHtmlContactMessage(
    $contact_name='NA',
    $contact_position='NA',
    $contact_company='NA',
    $contact_message='NA',
    $contact_phone='NA',
    $contact_email='NA'
)
{
    return "
        <div style='background:#e0ffe0;font-family:monospace;font-size:14px;padding: 1em 4em;'>
            <p>
                Hola,
                <br>
                {$contact_name}, {$contact_position} de la empresa <b>{$contact_company}</b> mando el mensaje:
            </p>
            <blockquote style='color:#0d5327;margin:0;background:#a4e7a4;padding:1em;'>
                💬 {$contact_message}
            </blockquote>
            <p>
                Sus datos de contácto:
                <ul>
                    <li>Teléfono: <b>{$contact_phone}</b></li>
                    <li>Email: <b>{$contact_email}</b></li>
                </ul>
            </p>
        </div>
    ";
}