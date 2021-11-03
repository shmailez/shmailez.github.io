

<!-- if(isset($_POST['submit'])){
$to = "shmailez@gmail.com";; // Здесь нужно написать e-mail, куда будут приходить письма
$from = $_POST['email']; // this is the sender's Email address
$first_name = $_POST['tel'];
$subject = "Форма отправки сообщений с сайта";
$subject2 = "Copy of your form submission";
$message = $first_name . " оставил сообщение:" . "\n\n" . $_POST['message'];
$message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href=''>Вернуться на сайт.</a>";

} -->


<?php
if($_POST['submit']) {
/* Устанавливаем e-mail Кому и от Кого будут приходить письма */    
    $to = "shmailez@gmail.com"; // Здесь нужно написать e-mail, куда будут приходить письма  
    $from = "nfeaw@mail.ru"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply@epicblog.net

/* Указываем переменные, в которые будет записываться информация с формы */
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = "Форма отправки сообщений с сайта";//Фиксированная тема письма


/* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
$mail_to_myemail = "Здравствуйте! 
Было отправлено сообщение с сайта! 
Имя отправителя: $name 
Номер телефона: $phone 
Чтобы ответить на письмо, создайте новое сообщение, скопируйте электронный адрес и вставьте в поле Кому.";  

$headers = "From: $from \r\n";

/* Отправка сообщения, с помощью функции mail() */
    mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
}
?>