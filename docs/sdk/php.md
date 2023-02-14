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

## Kirim Pesan Text

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

## Kirim Pesan Document

### Request

```php

```

### Response

```php

```
## Kirim Pesan Image

### Request

```php

```

### Response

```php

```
## Reply Pesan Text

### Request

```php

```

### Response

```php

```
## Reply Pesan Document

### Request

```php

```

### Response

```php

```
## Reply Pesan Image

### Request

```php

```

### Response

```php

```
