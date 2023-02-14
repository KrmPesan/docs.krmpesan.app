---
sidebar_position: 2
---

# Registration Process

Pada dokumentasi ini, kami akan membahas proses registrasi yang akan dilakukan oleh user dan kami sebagai penyedia layanan.

## User Registration

### Registration in Billing System

```mermaid
graph LR
A[User] --> B[Registration]
B --> C[Email Verification]
C --> D[Login]
```

### Order in Billing System

```mermaid
graph LR
A[User] --> B[Login]
B --> C[Order & Fill Form]
C --> D[Payment]
D --> E[Order Confirmation]
```

Setelah kami menerima pembayaran, kami akan mengirimkan email konfirmasi ke user dan kami akan memproses orderan user tersebut.

## Provider Registration


```mermaid
graph TD
  P[Provider] --> PA[Form Check & Verification From User]
  PA --> PB[Submit Form to Business Verification]
  PB --> FA[Facebook Verify Business]
  FA --> FAA[Approved]
  FA --> FAB[Rejected]
  FAB --> FABA[Need More Information From User]
  FABA --> PA
  FAA --> WA[Registration Whatsapp Number]
  WA --> WAA[Approved]
  WA --> WAB[Rejected]
  WAB --> WABA[Resubmit Form] --> WA
  WAA --> I[Integration to Provider System]
  I --> IA[Test Integration]
  IA --> IAA[Invite User to Provider System]
  IAA --> IAB[User Confirmation]
  IAB --> IAC[Done]
```

Setelah whatsapp number terverifikasi dan integrasi ke sistem provider, user akan diundang untuk bergabung ke sistem provider dan user akan melakukan konfirmasi untuk bergabung ke sistem provider.

Setelah user bergabung, user bisa melakukan penggunaan layanan provider atau integrasi ke sistem provider melalui REST API yang disediakan oleh provider.