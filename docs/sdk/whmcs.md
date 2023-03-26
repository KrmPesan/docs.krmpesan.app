---
sidebar_position: 3
---

# WHMCS

## Installation

## Template

Pastikan anda memilih kategori berikut:

- Category: `Transactional/Utility`
- Language: `Indonesia`


### Admin Login

- Name: `WHMCS Admin Login`
- Slug: `whmcs_admin_login`
- Header: **None / Tidak ada**
- Body:

```
Halo {{admin_name}},
Login baru oleh admin/staff dengan akun: *{{username}}* pada website: {{website_url}}.

Access Detail:
*Waktu* : {{date_time}}
*Alamat IP* : {{ip_address}}
*Browser* : {{user_agent}}

Sekian Informasinya.
{{company_name}}
```

### Admin Order Notification

- Name: `WHMCS Admin Order`
- Slug: `whmcs_admin_order`
- Header: **None / Tidak ada**
- Body:

```
Halo {{client_first_name}},
Ada Order Baru di website {{website_url}}, Detail Order:

*Order Time* : {{order_time}} 
*Order ID* : {{order_id}}
*Order Number* : {{order_number}}

*Invoice* : {{invoice_number}}
*Payment Method* : {{payment_method}}
*Total* : {{invoice_total}}

Sekian Informasinya.
{{company_name}}
```
- Button: 

### Admin Payment Notification

- Name: `WHMCS Admin Payment`
- Slug: `whmcs_admin_payment`
- Header: **None / Tidak ada**
- Body:

```
Halo {{admin_name}},
Ada transaksi pembayaran baru sudah masuk ke website {{website_url}}, detail transaksi:

*Nomor Invoice* : {{invoice_number}}
*Total* : {{invoice_total}}

Ditransfer Oleh: *{{client_first_name}}* - *{{client_email}}*

Sekian Informasinya.
{{company_name}}
```


### Admin Support Ticket

```
Halo {{admin_name}},
Berikut support tiket {{2}} yang harus anda cek pada website {{website_url}}.

Detail Support Tiket:
*ID*: #{{ticket_id}}
*Subject* : {{ticket_subject}}
*Priority* : {{ticket_priority}}
*Department* : {{ticket_department}}

Sekian Informasinya.
{{company_name}}
```


### Client

```
Hi {{1}},
Berikut {{2}} Produk Anda:

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

```
Hi {{1}},
Support Tiket {{2}} telah di {{3}} Oleh Staff Kami.

*Ticket ID*: #{{4}}
*Subject Ticket*: {{5}}

Detail lengkap sudah kami kirim via email.

Anda bisa cek status ticket anda langsung melalui website kami di 
{{6}}

Hormat Kami,
{{7}}
```


```
Hi {{1}},
Maaf, Produk Anda *{{2}}* - *{{3}}* Telah Di Hapus (Terminate) Secara Permanent.

Produk tidak bisa diaktifkan kembali.
Jika anda ingin menggunakan produk yang sama, hanya bisa dengan order baru di website kami.

Pastikan untuk membayar tagihan sebelum jatuh tempo untuk menghindari produk di terminated karena jatuh tempo.

Hormat Kami,
{{4}}
```

```
Hi {{1}},
Selamat Datang dan Selamat Bergabung Di {{2}}.

Silahkan cek kotak masuk/spam folder pada email anda untuk verifikasi alamat email tersebut terlebih dahulu.

Email: {{3}}
Telp: {{4}}

Jika ada pertanyaan, jangan ragu untuk menghubungi kami.
Hormat Kami,
{{2}}
```

```
Hi {{1}},
{{2}}, Produk Anda *{{3}}* - *{{4}}* Telah Di {{5}}.

Detail lengkap sudah kami infokan via email.
Silahkan cek email anda di Kotak Masuk/Spam Folder.

Anda juga bisa mengecek langsung produk anda diwebsite kami.

Tutorial penggunaan produk kami bisa cek di {{6}}

Jika ada pertanyaan, jangan ragu untuk menghubungi kami di :
{{7}}

Hormat Kami,
{{8}}
```

```
Hi {{1}},
Kami telah menerima tiket baru dari anda. Detail:

*Ticket ID*: #{{2}}
*Subject* : {{3}}
*Priority* : {{4}}
*Department* : {{5}}

Tiket anda akan kami respon secepatnya ketika staff kami online.
Mohon kesediaannya menunggu.

Hormat Kami,
{{6}}
```


```
Hi {{1}},
Kamu baru saja {{2}} pada akun dengan email: *{{3}}* yang terdaftar pada website kami: {{4}}

Detail Akses:
*Waktu* : {{5}}
*Alamat IP* : {{6}}
*Browser* : {{7}}

Jika ini bukan anda, harap segera mereset akun anda secepatnya, atau bisa menghubungi kami untuk meminta bantuan reset akun tersebut.

Sekian informasi yang dapat kami sampaikan.
Hormat Kami,
{{8}}
```