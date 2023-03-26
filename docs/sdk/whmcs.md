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


### Client Invoice Created

```
Hi {{client_first_name}},
Berikut Informasi Mengenai *Tagihan Baru* Untuk Langganan Produk Anda.

Detail:
----------------
Nomor: *{{invoice_number}}*
Jatuh Tempo: *{{invoice_due}}*
Total: *{{invoice_total}}*
Referensi: *INV-{{invoice_number}}*
Payment Method : *{{payment_method}}*
----------------

Untuk Melakukan Pembayaran, Silahkan cek link tagihan pada halaman berikut:
{{my_invoice_view}}

Kemudian ikuti instruksi sesuai metode pembayaran yang anda pilih.

Jika ada pertanyaan, jangan ragu untuk menghubungi kami.
Hormat Kami,
{{company_name}}
```

### Client Invoice Reminder

```
Hi {{client_first_name}},
Berikut Informasi Mengenai *Pengingat Tagihan* Untuk Perpanjangan Langganan Produk Anda.

Detail:
----------------
Nomor: *{{invoice_number}}*
Jatuh Tempo: *{{invoice_due}}*
Total: *{{invoice_total}}*
Referensi: *INV-{{invoice_number}}*
Payment Method : *{{payment_method}}*
----------------

Untuk Melakukan Pembayaran, Silahkan cek link tagihan pada halaman berikut:
{{my_invoice_view}}

Kemudian ikuti instruksi sesuai metode pembayaran yang anda pilih.

Jika ada pertanyaan, jangan ragu untuk menghubungi kami.
Hormat Kami,
{{company_name}}
```

### Client Invoice First Reminder

```
Hi {{client_first_name}},
Berikut Informasi Mengenai *Pengingat Pertama* Tagihan Untuk Perpanjangan Langganan Produk Anda.

Detail:
----------------
Nomor: *{{invoice_number}}*
Jatuh Tempo: *{{invoice_due}}*
Total: *{{invoice_total}}*
Referensi: *INV-{{invoice_number}}*
Payment Method : *{{payment_method}}*
----------------

Untuk Melakukan Pembayaran, Silahkan cek link tagihan pada halaman berikut:
{{my_invoice_view}}

Kemudian ikuti instruksi sesuai metode pembayaran yang anda pilih.

Jika ada pertanyaan, jangan ragu untuk menghubungi kami.
Hormat Kami,
{{company_name}}
```


### Client Invoice Second Reminder

```
Hi {{client_first_name}},
Berikut Informasi Mengenai *Pengingat Kedua* Tagihan Untuk Perpanjangan Langganan Produk Anda.

Detail:
----------------
Nomor: *{{invoice_number}}*
Jatuh Tempo: *{{invoice_due}}*
Total: *{{invoice_total}}*
Referensi: *INV-{{invoice_number}}*
Payment Method : *{{payment_method}}*
----------------

Untuk Melakukan Pembayaran, Silahkan cek link tagihan pada halaman berikut:
{{my_invoice_view}}

Kemudian ikuti instruksi sesuai metode pembayaran yang anda pilih.

Jika ada pertanyaan, jangan ragu untuk menghubungi kami.
Hormat Kami,
{{company_name}}
```


### Client Invoice Third Reminder

```
Hi {{client_first_name}},
Berikut Informasi Mengenai *Pengingat Terakhir atau Ketiga* Tagihan Untuk Perpanjangan Langganan Produk Anda.

*Perlu Di Catat, jika kami masih tidak menerima pembayaran mengenai tagihan ini, maka produk anda bisa di terminated atau di hapus kapan saja, Untuk menghindari hal tersebut, segera lunasi tagihan anda.*

Detail:
----------------
Nomor: *{{invoice_number}}*
Jatuh Tempo: *{{invoice_due}}*
Total: *{{invoice_total}}*
Referensi: *INV-{{invoice_number}}*
Payment Method : *{{payment_method}}*
----------------

Untuk Melakukan Pembayaran, Silahkan cek link tagihan pada halaman berikut:
{{my_invoice_view}}

Kemudian ikuti instruksi sesuai metode pembayaran yang anda pilih.

Jika ada pertanyaan, jangan ragu untuk menghubungi kami.
Hormat Kami,
{{company_name}}
```

### Client Ticket Reply By Admin/Staff

```
Hi {{client_first_name}},
Support Tiket {{ticket_number}} telah di {{ticket_action}} Oleh Staff Kami.

*Ticket ID*: #{{ticket_id}}
*Subject Ticket*: {{ticket_subject}}

Detail lengkap sudah kami kirim via email.

Anda bisa cek status ticket anda langsung melalui website kami di 
{{support_ticket}}

Jika ada pertanyaan, jangan ragu untuk menghubungi kami.
Hormat Kami,
{{company_name}}
```

### Client Product Terminated

```
Hi {{1}},
Maaf, Produk Anda *{{2}}* - *{{3}}* Telah Di Hapus (Terminate) Secara Permanent.

Produk tidak bisa diaktifkan kembali.
Jika anda ingin menggunakan produk yang sama, hanya bisa dengan order baru di website kami.

Pastikan untuk membayar tagihan sebelum jatuh tempo untuk menghindari produk di terminated karena jatuh tempo.

Hormat Kami,
{{company_name}}
```

### Client Register

```
Hi {{client_first_name}},
Selamat Datang dan Selamat Bergabung Di {{company_name}}.

Silahkan cek kotak masuk/spam folder pada email anda untuk verifikasi alamat email yang anda daftarkan pada website kami {{website_url}}

Email: {{client_email}}
Telp: {{client_phone}}

Jika ada pertanyaan, jangan ragu untuk menghubungi kami.
Hormat Kami,
{{company_name}}
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