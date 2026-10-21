# Web Kesehatan - Demam Berdarah

Website edukasi tentang demam berdarah dengue (DBD), meliputi gejala, penyebab, dampak, pencegahan, dan form pendaftaran sosialisasi.

## Fitur

- Halaman edukasi DBD yang responsif.
- Animasi ringan menggunakan AOS.
- Carousel galeri menggunakan Bootstrap.
- Accordion informasi dampak DBD.
- Form pendaftaran dengan validasi client-side.
- Peta lokasi Universitas Tanri Abeng.
- Tautan Instagram anggota tim pengembang.

## Teknologi

- HTML5 semantik
- CSS3
- JavaScript
- Bootstrap 5.3.3
- AOS 2.3.1
- Google Maps Embed

## Struktur Folder

```text
.
├── index.html
├── form-pendaftaran.html
├── pelajari-lebih-lanjut.html
├── assets/
│   ├── css/
│   │   ├── bootstrap/
│   │   ├── detail.css
│   │   ├── form.css
│   │   └── main.css
│   ├── images/
│   └── js/
│       ├── bootstrap/
│       ├── form-validation.js
│       └── main.js
└── README.md
```

## Menjalankan Secara Lokal

Website ini tidak membutuhkan proses build. Buka `index.html` langsung di browser atau jalankan static server:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000`.

## Deployment

Website dapat dideploy ke GitHub Pages, Netlify, Vercel, atau layanan static hosting lainnya. Pastikan seluruh folder `assets/` ikut di-push karena Bootstrap lokal, CSS, JavaScript, dan gambar digunakan oleh halaman.

## Anggota Tim

- Andre Ilyas - 06024018
- Blasius Martinus L Herin - 06024012
- Daffa Ismail - 06024004
- Peris Trisna - 06024011
