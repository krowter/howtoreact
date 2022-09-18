---
indexes:
  - error is undefined
---

## Masalah

Error yang dimaksud tuh kayak gini "Cannot read property `<nama property>` of `undefined`"

## Kenapa bisa begitu

Ini biasanya terjadi kalau kita fetching data, tapi state awalnya itu lupa kita kasih nilai, atau `undefined`

```jsx
const [person, setPerson] = useState();

useEffect(() => {
  // ambil data dari api lalu set ke state
  fetchApi("/people/1").then(setPerson);
}, []);

// lalu di bawahnyak
return person.name;
```

Ini bakal error karena sebelum fetch nya selesai, nilai state `person` masih undefined. Jadi sama aja kalau kita tulis

```js
return undefined["name"];
```

Kan ngga make sense; `undefined` itu ngga punya property apa-apa.

## Solusinya

### Quick fix

Solusi paling cepat adalah kasih initial value `{}` ke useState nya. Dengan begitu pas di bagian

```js
return person.name;
```

meskipun fetch nya belum selesai dia ngga error, karena objek kosong kalau dibaca property yang belum ada isinya, dia bakal return `undefined`.

Bisa juga dengan kasih optional chaining setelah "person". Jadi seperti

```js
return person?.name;
```

### Optimal solution

Meskipun dua solusi di atas bisa menghilangkan error, user bakal lihat layar kosong sebelum fetch nya selesai (karena return `undefined` ngga akan render apa2). Kalau internet nya cepet ngga masalah sih ya :). Tapi ada baiknya kita kasih loading state. Jadi kira2 gini

```js
const [person, setPerson] = useState({});
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  setIsLoading(true);
  // ambil data dari api lalu set ke state
  fetchApi("/people/1")
    .then(setPerson)
    .catch(/* jangan lupa handle errornya */)
    .finally(() => setIsLoading(false));
}, []);

// tampilin loader
if (isLoading) return <span>Loading...</span>;

// lalu di bawahnyak
return person.name;
```
