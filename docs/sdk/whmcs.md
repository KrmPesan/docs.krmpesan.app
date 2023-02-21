---
sidebar_position: 3
---

# WHMCS

## Installation

## Template

Pastikan anda memilih kategori berikut:

- Category: `Transactional/Utility`
- Language: `Indonesia`


## Template Admin

### Admin Login

- Name: `WHMCS Admin Login`
- Slug: `whmcs_admin_login`
- Header: **None / Tidak ada**
- Body:

```
Halo {{1}},
Login baru oleh admin/staff dengan akun: *{{2}}* pada website: {{3}}.

Access Detail:
*Waktu* : {{4}}
*Alamat IP* : {{5}}
*Browser* : {{6}}

Sekian Informasinya.
{{7}}
```

### Admin Order Notification

- Name: `WHMCS Admin Order`
- Slug: `whmcs_admin_order`
- Header: **None / Tidak ada**
- Body:

```
Halo {{1}},
Ada Order Baru, Detail Order:

*Order Time* : {{2}} 
*Order ID* : {{3}}
*Order Number* : {{4}}

*Invoice* : {{5}}
*Payment Method* : {{6}}
*Total* : {{7}}

Sekian Informasinya.
{{8}}
```
- Button: 

### Admin Payment Notification

- Name: `WHMCS Admin Payment`
- Slug: `whmcs_admin_payment`
- Header: **None / Tidak ada**
- Body:

```
Halo {{1}},
Ada Rezeki nih, udah masuk ke rekening admin.

*Nomor Invoice* : {{2}}
*Total* : {{3}}

Ditransfer Oleh: *{{4}}* - *{{5}}*

Sekian Informasinya.
{{6}}
```


### Admin Support Ticket

```
Halo {{1}},
Berikut support tiket {{2}} yang harus anda cek.

Detail Support Tiket:
*ID*: #{{3}}
*Subject* : {{4}}
*Priority* : {{5}}
*Department* : {{6}}

Sekian Informasinya.
{{7}}
```

## Template Client


### Register

```
Hi {{1}},
Selamat Datang dan Selamat Bergabung Di {{2}}.

Silahkan cek kotak masuk atau spam folder pada email anda untuk verifikasi alamat email tersebut terlebih dahulu.

Email: {{3}}
Telp: {{4}}

Jika ada pertanyaan, jangan ragu untuk menghubungi kami.
Hormat Kami,
{{2}}
```

### Login or Update Account


```
Hi {{1}},
Berikut informasi update tentang akun anda.
Kamu baru saja {{2}} pada akun dengan email: {{3}} yang terdaftar pada website kami: {{4}}

Detail Akses:
Waktu : {{5}}
Alamat IP : {{6}}
Browser : {{7}}

Jika ini bukan anda, harap segera mereset akun anda secepatnya, atau bisa menghubungi kami untuk meminta bantuan reset akun tersebut.

Sekian informasi yang dapat kami sampaikan.
Hormat Kami,
{{8}}
```

### Product

```
Hi {{1}},
Kami informasikan tentang Produk Anda *{{2}}* - *{{3}}* Telah Di {{4}}.

Detail lengkap sudah kami infokan via email.
Silahkan cek email anda di Kotak Masuk atau Spam Folder.

Anda juga bisa mengecek langsung produk anda diwebsite kami.

Tutorial penggunaan produk kami bisa cek di {{5}}

Jika ada pertanyaan, jangan ragu untuk menghubungi kami di :
{{6}}

Hormat Kami,
{{7}}
```

### Invoice

```
Hi {{1}},
Kami informasikan tentang invoice tagihan Anda.
Silahkan lakukan pembayaran untuk tagihan {{2}}.

Berikut Detail Tagihan Anda:
Nomor: *{{3}}*
Jatuh Tempo: *{{4}}*
Total: *{{5}}*
Referensi: *INV-{{3}}*
Payment Method : *{{6}}*

Untuk Melakukan Pembayaran, Klik Link *Cek Invoice*.

Pada halaman tersebut, tersedia instruksi dan metode pembayaran yang kami sediakan.

Hormat Kami,
{{7}}
```

### Support Ticket Open

```
Hi {{1}},
Kami telah menerima tiket baru dari anda.

Berikut detail tiket anda:

*Ticket ID*: #{{2}}
*Subject* : {{3}}
*Priority* : {{4}}
*Department* : {{5}}

Tiket anda akan kami respon secepatnya ketika staff kami online.
Mohon kesediaannya menunggu.

Hormat Kami,
{{6}}
```

### Support Ticket Reply


```
Hi {{1}},
Kami informasikan tentang update support tiket anda yaitu {{2}} telah di {{3}} Oleh Staff Kami.

Ticket ID: #{{4}}
Subject Ticket: {{5}}

Detail lengkap sudah kami kirim via email.

Anda bisa cek status ticket anda langsung melalui website kami di 
{{6}}

Hormat Kami,
{{7}}
```

### Payment Confirmation

```
Hi {{1}},
Terimakasih atas pembayaran anda,
Dana telah kami terima dan dikonfirmasi oleh system.

Detail Invoice *Nomor: {{2}}* Telah *LUNAS*.
Detail invoice Lengkap kami kirimkan ke email anda.

Pastikan untuk mengecek tanggal expired produk anda untuk memastikan produk berhasil di beli dan perpanjang di:
{{3}}

Jika ada kendala tentang perpanjang, jangan ragu untuk menghubungi kami di:
{{4}}

Hormat Kami,
{{5}}
```
