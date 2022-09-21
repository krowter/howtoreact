---
indexes:
- cara update state kalo nested
- update object di dalam array
---

## Masalah 

Kalau state cuma isinya `string` atau `number` masih gampang lah ya buat set state nya.
Kan tinggal `setState('wasd')` atau `setState(123)`. 

atau misal statenya object `{ nama: 'wasd' }` mau ditambah field baru bisa gini
`setState(prev => ({ ...prev, fieldBaru: 123 }))`

Jadi bayangin kalau statenya sudah mulai kompleks jadi nested array atau object kayak gini

```
{
    nama: 'wasd',
    umur: 123,
    alamat: {
        provinsi: "Bandung",
    },
    tahunPembaruanKtp: [2010, 2015, 2020]
}
```

terus kita mau tambah property `alamat`, kan harus

```
setState(prev => ({
    ...prev,
    alamat: {
        ...prev.alamat,
        kodePost: 12520
    }
}))
```

atau mau tambah element baru ke array `tahunPembaruanKtp`

```
setState(prev => ({
    ...prev,
    tahunPembaruanKtp: [...prev.tahunPembaruanKtp, 2025]
}))
```

## Kenapa bisa begitu

Proses update state itu immutable (ngga boleh ngubah state aslinya). Karena kalau kita ubah state langsung, ngga ada rerender yang terjadi. Jadi perubahan nilainya ngga akan tercermin di UI.

Makanya di kode2 di atas banyak pakai spread operator `...` untuk menghindari ngubah state asli.

## Solusi

Kalau state nya udah nested banget bisa coba2 yang namanya [Immer JS](https://immerjs.github.io/immer/example-setstate) atau versi hook nya sekalian [use-immer](https://github.com/immerjs/use-immer)

Immer JS ini dalam nya pakai yang namanya [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). Proxy ini bisa tahu kalau ada perubahan nilai di variabelnya. Nah ada orang pintar yang kepikiran "gimana kalau ini dipakai untuk masalah immutability?",jadilah Immer JS.

Jadi misal ada state yang tadi ya,

```
const [orang, updateOrang] = ({
    nama: 'wasd',
    umur: 123,
    alamat: {
        provinsi: "Bandung",
    },
    tahunPembaruanKtp: [2010, 2015, 2020]
})
```

untuk nambar property di alamat kita bisa langsung edit 

```
updateOrang(prev => {
    prev.alamat.kodePost = 12312
})
```

Simpel banget kan.

atau misal mau tambah element di tahunPembaruanKtp

```
updateOrang(prev => {
    prev.tahunPembaruanKtp.push(2025)
})
```
