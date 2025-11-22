# 🚀 QUICK START GUIDE

## 📋 Langkah-langkah Cepat

### 1️⃣ Install Dependencies

```powershell
npm install
```

### 2️⃣ Siapkan Asset (PENTING!)

#### A. Foto-foto Naura (4 foto)

Taruh di: `public/photos/`

- `naura-1.jpg`
- `naura-2.jpg`
- `naura-3.jpg`
- `naura-4.jpg`

#### B. QRIS Code (1 file)

Taruh di: `public/`

- `qris-50k.png`

#### C. Background Music (OPSIONAL)

Taruh di: `public/music/`

- `birthday-song.mp3`

**Rekomendasi:** "A Thousand Years" by Christina Perri

### 3️⃣ Jalankan Website

```powershell
npm run dev
```

Buka: **http://localhost:3000**

---

## 🎨 Kustomisasi Cepat

### Ubah Teks di Chapter 1

File: `components/Chapter1.jsx`

- Line 73: Judul bab
- Line 82-140: Isi cerita

### Ubah Caption Foto di Chapter 2

File: `components/Chapter2.jsx`

- Line 14-19: Array `photos` dengan caption

### Ubah Ucapan di Chapter 3

File: `components/Chapter3.jsx`

- Line 90-150: Ucapan ulang tahun

### Ubah Pesan di Chapter 4

File: `components/Chapter4.jsx`

- Line 85-180: Pesan hadiah dan penutup

### Ubah Quiz Questions

File: `components/QuizModal.jsx`

- Line 17-55: Array `questions`

---

## 🌐 Deploy ke Vercel (GRATIS!)

### Cara Termudah:

1. **Push ke GitHub**

   ```powershell
   git init
   git add .
   git commit -m "Birthday website for Naura"
   git branch -M main
   git remote add origin https://github.com/USERNAME/nauBirthday.git
   git push -u origin main
   ```

2. **Deploy di Vercel**
   - Buka: https://vercel.com
   - Login dengan GitHub
   - Klik "Import Project"
   - Pilih repository `nauBirthday`
   - Klik "Deploy"
   - **SELESAI!** Link otomatis dibuat

### Atau dengan CLI:

```powershell
npm i -g vercel
vercel
```

---

## ✅ Checklist Pre-Launch

**WAJIB:**

- [ ] 4 foto Naura sudah ditambahkan
- [ ] QRIS code sudah ditambahkan
- [ ] Test di browser (Chrome/Firefox)
- [ ] Test di HP (responsive check)
- [ ] Proofread semua teks (typo check)

**OPSIONAL:**

- [ ] Background music ditambahkan
- [ ] Quiz questions disesuaikan
- [ ] Warna tema diubah sesuai selera
- [ ] Foto sudah dikompres (< 500KB per foto)

---

## 🎵 Download Musik Gratis (Legal)

### Situs Rekomendasi:

1. **YouTube Audio Library** - https://studio.youtube.com/
2. **Free Music Archive** - https://freemusicarchive.org/
3. **Pixabay Music** - https://pixabay.com/music/
4. **Incompetech** - https://incompetech.com/

### Convert YouTube to MP3 (untuk personal use):

1. Cari lagu di YouTube
2. Copy URL
3. Paste di: https://ytmp3.nu/ atau https://y2mate.com/
4. Download MP3
5. Rename jadi `birthday-song.mp3`

---

## 🐛 Error? Troubleshoot Di Sini!

### Error: "Module not found"

```powershell
rm -rf node_modules
npm install
```

### Error: "Port 3000 already in use"

```powershell
# Kill process di port 3000
npx kill-port 3000
# Atau pakai port lain
npm run dev -- -p 3001
```

### Foto tidak muncul?

- Cek nama file: HARUS `naura-1.jpg` (lowercase, no space)
- Cek lokasi: `public/photos/naura-1.jpg`
- Refresh browser: `Ctrl + Shift + R`

### Animasi patah-patah?

- Kompres foto lebih kecil (< 300KB)
- Close tab browser lain
- Restart dev server

---

## 📱 Share ke Naura

### Cara 1: Direct Link

Setelah deploy, share link Vercel:

```
https://nau-birthday-xxxxx.vercel.app
```

### Cara 2: QR Code

1. Buka: https://www.qr-code-generator.com/
2. Paste link website
3. Download QR code
4. Share QR code ke Naura

### Cara 3: Custom Domain (Advanced)

Beli domain (Rp 15.000/tahun di Niagahoster):

```
https://naurabirthday.site
```

---

## 💡 Tips Maksimalkan Wow Factor

### Timing:

- Share link tengah malam (00:00) pas tanggal ulang tahun
- Atau pagi hari saat Naura bangun

### Message:

"Nau, buka link ini ya... ada sesuatu nih buat kamu 💕"
[link]

### Suprise Level:

- Jangan kasih tau sebelumnya
- Biarkan dia explore sendiri
- Tunggu reaksinya di chat 😊

---

## 🎉 Selamat!

Website birthday kamu sudah siap! 🎂✨

**Dibuat dengan 💕 untuk Naura Rasendrya Rega**

---

Need help? Ada pertanyaan? Chat aja! 😊
