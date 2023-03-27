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
----------------
*Waktu* : {{date_time}}
*Alamat IP* : {{ip_address}}
*Browser* : {{user_agent}}
----------------

Sekian Informasinya.
{{company_name}}
```

### Admin Order Notification

- Name: `WHMCS Admin Order`
- Slug: `whmcs_admin_order`
- Header: **None / Tidak ada**
- Body:

```
Halo {{admin_name}},
Ada Order Baru di website {{website_url}}.

Detail Order:
----------------
*Order Time* : {{order_time}} 
*Order ID* : {{order_id}}
*Order Number* : {{order_number}}
----------------
*Invoice* : {{invoice_number}}
*Payment Method* : {{payment_method}}
*Total* : {{invoice_total}}
----------------

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
Ada transaksi pembayaran baru sudah masuk di website {{website_url}}.

Detail Transaksi:
----------------
*Nomor Invoice* : {{invoice_number}}
*Total* : {{invoice_total}}
----------------

Ditransfer Oleh: 
----------------
Nama: *{{client_first_name}}*
Email: *{{client_email}}*

Sekian Informasinya.
{{company_name}}
```


### Admin Support Ticket

```
Halo {{admin_name}},
Berikut support tiket {{ticket_action}} yang harus anda cek di website {{website_url}}.

Detail Support Tiket:
----------------
*ID*: #{{ticket_id}}
*Subject* : {{ticket_subject}}
*Priority* : {{ticket_priority}}
*Department* : {{ticket_department}}
----------------

Sekian Informasinya.
{{company_name}}
```


### Client Invoice Created or Reminder

```
Hi {{client_first_name}},
Berikut Informasi Mengenai *{{invoice_action}}* Untuk Langganan Produk Anda.

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

_Pastikan anda membayar tagihan ini sebelum tanggal *Jatuh Tempo* untuk menghindari produk dihapus secara permanent_

Jika ada pertanyaan, jangan ragu untuk menghubungi kami.
Hormat Kami,
{{company_name}}
```

### Client Ticket Open or Reply By Admin/Staff

```
Hi {{client_first_name}},
Support Tiket Anda dengan nomor {{ticket_number}} telah di {{ticket_action}} Oleh Staff Kami.

Detail Ticket:
----------------
*Ticket ID*: #{{ticket_id}}
*Subject Ticket*: {{ticket_subject}}
----------------

Detail lengkap sudah kami kirim via email.

Anda bisa cek status ticket anda langsung melalui website kami di 
{{support_ticket}}

Jika ada pertanyaan, jangan ragu untuk menghubungi kami.
Hormat Kami,
{{company_name}}
```

### Client Product Active, Suspend or Unsuspend

```
Hi {{client_first_name}},
Berikut update status produk/layanan anda pada website kami {{website_url}}.

{{product_action}}

{{product_description}}

Jika ada pertanyaan tentang produk/layanan anda, jangan ragu untuk menghubungi kami di:
{{open_ticket}}

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

### Client Ticket Open

```
Hi {{client_first_name}},
Terimakasih telah Kami telah menerima tiket baru dari anda.

Detail:

*Ticket ID*: #{{2}}
*Subject* : {{3}}
*Priority* : {{4}}
*Department* : {{5}}

Tiket anda akan kami respon secepatnya ketika staff kami online.
Mohon kesediaannya menunggu.

Hormat Kami,
{{6}}
```

### Client Login

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