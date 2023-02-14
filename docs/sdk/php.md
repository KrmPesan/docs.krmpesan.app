---
sidebar_position: 3
---

# PHP SDK

## Instalasi

### Install via Composer

```
composer require krmpesan/sdk
```

### Install Manual

1. Download file dari repository ini [DI SINI](https://github.com/KrmPesan/SDK-PHP/releases)
2. Copy File `src/Clientv3.php`
3. Done.

## Setting Konfigurasi

**PENTING: Data yang tercantum dibawah hanya sebagai sample, bukan data kami atau data yang sesunggunya.**

```php
<?php
require("ClientV3.php");

use KrmPesan\ClientV3;

$wa = new ClientV3([
    'deviceId' => 'your-device-id',
    'refreshToken' => 'your-refresh-token',
    'idToken' => 'your-id-token',
]);
```

## Kirim Pesan Template Template Text

### Request

```php
$template = [
    "body" => [
        "hello",
        "world"
    ]
];

$wa->sendMessageTemplate('628123456789', 'sample-message', 'id', $template);
```

### Response

```php
stdClass Object
(
    [code] => 200
    [message] => success
    [data] => stdClass Object
        (
            [id] => wamid.xxx
        )

)
```

## Kirim Pesan Template Body + Header Image

### Request

```php
$template = [
    "body" => [
        "hello",
        "world"
    ],
    "header" => [
        "type" => "image",
        "url" => "https://example.com/image.jpg",
    ]
];

$wa->sendMessageTemplate('628123456789', 'sample-message-image', 'id', $template);
```

### Response

```php
stdClass Object
(
    [code] => 200
    [message] => success
    [data] => stdClass Object
        (
            [id] => wamid.xxx
        )

)
```

## Kirim Pesan Template Body + Header PDF

### Request

```php
$template = [
    "body" => [
        "hello",
        "world"
    ],
    "header" => [
        "type" => "document",
        "url" => "https://example.com/document.pdf",
    ]
];

$wa->sendMessageTemplate('628123456789', 'sample-message-document', 'id', $template);
```

### Response

```php

stdClass Object
(
    [code] => 200
    [message] => success
    [data] => stdClass Object
        (
            [id] => wamid.xxx
        )

)
```

## Reply Pesan Text

### Request

```php
$reply = [
    "type" => "text",
    "text" => "ini adalah balasannya"
];
$wa->sendReply('628123456789', $reply);
```

### Response

```php
stdClass Object
(
    [code] => 200
    [message] => success
    [data] => stdClass Object
        (
            [id] => wamid.xxx
        )

)
```

## Reply Pesan Body + Header Image

### Request

```php
$reply = [
    "type" => "image",
    "text" => "https://example.com/image.jpg",
    "caption" => "optional, kalau tidak ada kasih null."
];
$wa->sendReply('628123456789', $reply);
```

### Response

```php
stdClass Object
(
    [code] => 200
    [message] => success
    [data] => stdClass Object
        (
            [id] => wamid.xxx
        )

)
```

## Reply Pesan Body + Header PDF

### Request

```php
$reply = [
    "type" => "document",
    "text" => "https://example.com/document.pdf"
];
$wa->sendReply('628123456789', $reply);
```

### Response

```php
stdClass Object
(
    [code] => 200
    [message] => success
    [data] => stdClass Object
        (
            [id] => wamid.xxx
        )

)
```
