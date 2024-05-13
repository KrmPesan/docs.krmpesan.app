---
title: Authentication
sidebar_position: 2
---
Di sistem baru kami, ada 3 data token yang akan digunakan, yaitu:

1. Id Token = Sebagai akses token ke REST API, Token Aktif 24 Jam
2. Refresh Token = Sebagai generator token, Refresh Token Aktif Permanent
3. Device ID = Uniq ID untuk identifikasi Token, Aktif Permanent bersamaan dengan Refresh Token

## Flow

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

### Token Validation

```mermaid
graph TD
    A[User] --> B[Generate Token]
    B --> C[IdToken Valid]
    C --> D[HIT REST API]
    D --> F[Autorisasi Berhasil]
    D --> G[Autorisasi Gagal, Token Expired/ Invalid]
    F --> H[Return Response]
    G --> I[Generate IdToken Baru Berdasarkan RefreshToken]
    I --> J[Gunakan IdToken Baru]
    J --> D
```

## Refresh Token

### Request

* URL

```
GET https://api.krmpesan.app/token
```

* Query String

| Field           | Type     | Description                                  |
| --------------- | -------- | -------------------------------------------- |
| `refresh_token` | `string` | Refresh Token yang didapat dari sistem login |
| `device_id`     | `string` | Device ID yang didapat dari sistem login     |

### Example Request

```
curl -s "https://api.krmpesan.app/tokens?refresh_token=eyJjdHkiOiJKxxxxxxxx&device_key=ap-southeast-1_3445xxxxx" 
```

### Response

| Fields      | Type     | Description                     |
| ----------- | -------- | ------------------------------- |
| `IdToken`   | `string` | Token untuk akses ke REST API   |
| `ExpiresIn` | `int`    | Waktu kadaluarsa token (24 Jam) |

```json
{
  "AccessToken": "eyJraWQiOiIwajZFcHxxxxxxxxx",
  "ExpiresIn": 86400,
  "TokenType": "Bearer",
  "IdToken": "eyJraWQiOiJnZEJyMUh0alNlTVZjcFxxxxxxx"
}
```

Setelah mendapatkan token, simpan IdToken untuk digunakan pada saat akses ke REST API selanjutnya selama 24 jam.
