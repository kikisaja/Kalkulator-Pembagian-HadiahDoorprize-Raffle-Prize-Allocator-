# 🎁 Raffle Prize Allocator

Aplikasi pengalokasi persentase hadiah dan doorprize (*Raffle Prize Allocator*) interaktif berbasis JavaScript untuk menghitung proporsi dana atau kuota hadiah ke dalam tingkatan kategori.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Percentage Calculation & Array Mapping:**
   Menggunakan rumus matematika persentase untuk membagi total dana ke dalam skema preset secara acak/proporsional.
2. **Currency Formatting (`Intl.NumberFormat`):**
   Menerapkan standar format mata uang Rupiah (`IDR`) agar tampilan nominal angka rapi dan mudah dibaca.
3. **Dynamic Object Presets:**
   Memanfaatkan struktur *dictionary* / objek JavaScript untuk mengelola konfigurasi skema pembagian.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Form input anggaran, dropdown preset skema, dan kartu rincian
├── style.css        # Desain Neobrutalism, warna pop cerah, dan kontras tegas
└── script.js        # Konfigurasi preset, kalkulasi persentase, & manipulasi DOM
