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