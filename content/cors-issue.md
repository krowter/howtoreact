---
indexes:
  - kena cors
  - cross-origin resource sharing
  - request blocked
---

## Masalah

Access to fetch at `<url backend>` from origin `<url frontend>` has been blocked by CORS policy

## Kenapa bisa begitu

Ini memang mekanisme keamanan untuk mencegah client dengan origin yang berbeda untuk menggunakan resource dari url tujuan.

## Solusinya

Minta backend nya untuk enable cors atau pasang header `Access Control Allow Origin` di response headernya