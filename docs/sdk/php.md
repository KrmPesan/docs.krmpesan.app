---
title: PHP
sidebar_position: 2
---

## Flow

Di sistem baru kami, ada 3 data token yang akan digunakan, yaitu:

1. Id Token = Sebagai akses token ke REST API, Token Aktif 24 Jam
2. Refresh Token = Sebagai generator token, Refresh Token Aktif Permanent
3. Device ID = Uniq ID untuk identifikasi Token, Aktif Permanent bersamaan dengan Refresh Token

### Generate Token

```mermaid
graph TD
    A[User] --> B[Login]
    B --> C[Halaman Device]
    C --> D[Masukkan Password Pada Kolom Token]
    D --> E[Generate Token]
    E --> F[Token Berhasil Dibuat]
    F --> G[Simpan Token: `IdToken`, `RefreshToken`, `DeviceId`]
```

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

### Konfigurasi Token

```php
<?php

require "vendor/autoload.php";

// panggil class
use KrmPesan\ClientV3;

// setting konfigurasi
$wa = new ClientV3([
    'deviceId' => 'your-device-id',
    'refreshToken' => 'your-refresh-token',
    'idToken' => 'your-id-token',
]);
```

### Konfirgurasi Token dengan File

#### File `token.json`

Hanya 2 object yang penting anda harus simpan di `token.json`, yaitu `refreshToken` dan `deviceId`

```json
{
  "refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxxxxxx",
  "deviceId": "ap-southeast-1_db47767c-5116-48e5-a74a-2f9dca674bac"
}
```

#### Konfigurasi Object

```php
<?php

require "./vendor/autoload.php";

// panggil class
use KrmPesan\ClientV3;

// mengambil file token.json di direktori yang sama.
// arahkan direktorinya, SDK kami akan automatis deteksi file token.json
$tokenFile = __DIR__;

// setting konfigurasi
$wa = new ClientV3([
    'tokenFile' => $tokenFile
]);
```

## Kirim Pesan Template Text

### Request

```php
$body = [
    "hello",
    "world"
];

$wa->sendMessageTemplateText('628123456789', 'sample-message', 'id', $body);
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
$body = [
    "hello",
    "world"
];
$image = "https://example.com/image.jgp";
$wa->sendMessageTemplateImage('628123456789', 'sample-message-image', 'id', $body, $image);
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
$body = [
    "hello",
    "world"
];
$document = "https://example.com/document.pdf";

$wa->sendMessageTemplateDocument('628123456789', 'sample-message-document', 'id', $body, $document);
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

## Kirim Pesan Template Body + Button

### Request

```php
$body = [
    "hello",
    "world"
];
$button = "https://example.com/";

$wa->sendMessageTemplateButton('628123456789', 'sample-message-button', 'id', $body, $button);
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
$wa->sendReplyText('628123456789', "ini adalah balasannya");
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
$wa->sendReplyImage('628123456789', 'https://example.com/image.jpg', 'optional, kalau tidak ada kasih null.');
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
$wa->sendReplyDocument('628123456789', 'https://example.com/document.pdf');
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
