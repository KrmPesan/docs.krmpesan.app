---
sidebar_position: 1
---

# WHMCS

## Installation

## Template

### Admin Order Notification

- Name: `WHMCS Admin Order`
- Slug: `whmcs_admin_order`
- Category: `Transactional/Utility`
- Language: `Indonesian`
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
- Category: `Transactional/Utility`
- Language: `Indonesian`
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

### Admin Login

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

### Admin Support Ticket

```
Halo {{1}},
Berikut support tiket {{2}} yang harus anda cek.

Detail Tiket
*ID*: #{{3}}
*Subject* : {{4}}
*Priority* : {{5}}
*Department* : {{6}}

Sekian Informasinya.
{{7}}
```