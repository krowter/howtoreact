---
indexes:
  - kenapa state tidak update?
  - state masih yang sebelumnya
---

## Masalah

Misalkan ada komponen Card seperti di bawah. Kita perlu fetch data judul (title) lalu ditaruh ke dalam state `cardInfo`

```jsx
function PostCard() {
  const [cardInfo, setCardInfo] = useState({});

  useEffect(() => {
    async function getPostTitle() {
      // intinya manggil api untuk dapat title
      const title = await fetchPostTitle();

      setCardInfo((prev) => ({ ...prev, title })); // set state di sini

      console.log(cardInfo); // tapi kok hasil console.log di sini masih object kosong?
    }

    getPostTitle();
  }, []);
}
```

## Kenapa bisa begitu

Ada dua penyebab kenapa state yang baru ngga langsung keluar

### Perubahan state itu asynchronous

Karena cara React bekerja, meskipun kita udah panggil `setTitle()`, state nya ngga berubah saat itu juga.

### 1 state di 1 render

Kalaupun statenya sudah berubah, kita baru akan bisa lihat perubahannya di render berikutnya. Karena untuk render saat ini, state nya masih string kosong.

## Solusinya

Solusi cepat untuk dapat state terbaru bisa buat dulu variabel untuk menampungnya, lalu log variabel barusan.

Seperti ini

```jsx
function PostCard() {
  const [cardInfo, setCardInfo] = useState({});

  useEffect(() => {
    async function getPostTitle() {
      // intinya manggil api untuk dapat title
      const title = await fetchPostTitle();

      const nextState = { ...cardInfo, title };

      setCardInfo(nextState);

      console.log(nextState); // ini pasti akan log state terbaru
    }

    getPostTitle();
  }, []);
}
```

Walaupun jalan, saya kurang suka dengan langsung baca `cardInfo` dari state untuk membuat state berikutnya.
Karena ada case di mana state yang dibaca itu bukan state paling baru <- tapi ini topik untuk lain kali aja.

Solusi kedua adalah membuat useEffect kedua yang jalan kalau `cardInfo` berubah. Seperti ini

```jsx
function PostCard() {
  const [cardInfo, setCardInfo] = useState({});

  useEffect(() => {
    async function getPostTitle() {
      // intinya manggil api untuk dapat title
      const title = await fetchPostTitle();

      setCardInfo((prev) => ({ ...prev, title })); // set state di sini
    }

    getPostTitle();
  }, []);

  useEffect(() => {
    console.log(nextState); // ini pasti akan log state terbaru juga
  }, []);
}
```
