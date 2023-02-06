---
sidebar_position: 2
---

## Authentication

Di sistem baru kami, ada 3 data token yang akan digunakan, yaitu:

1. Id Token = Sebagai akses token ke REST API, Token Aktif 24 Jam
2. Refresh Token = Sebagai generator token, Refresh Token Aktif Permanent
3. Device ID = Uniq ID untuk identifikasi Token, Aktif Permanent bersamaan dengan Refresh Token


### Generate Token

#### Request

- Body Parameters




```
POST https://api.krmpesan.app/token
```


#### Response


```
```

- Body Response
