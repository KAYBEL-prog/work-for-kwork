<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);

    // Email, куда будет отправлено сообщение
    $to = "your-email@example.com";
    $subject = "Запрос на консультацию";
    $message = "
        Имя: $name\n
        Почта: $email\n
        Телефон: $phone\n
    ";
    $headers = "From: webmaster@example.com\r\n" .
               "Reply-To: $email\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    // Отправляем письмо
    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение отправлено успешно.";
    } else {
        echo "Ошибка отправки сообщения.";
    }
} else {
    echo "Некорректный метод отправки данных.";
}
?>