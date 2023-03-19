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
{{website_name}}
```

### Admin Order Notification

- Name: `WHMCS Admin Order`
- Slug: `whmcs_admin_order`
- Header: **None / Tidak ada**
- Body:

```
Halo {{client_first_name}},
Ada Order Baru, Detail Order:

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