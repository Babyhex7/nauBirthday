# 🎉 Happy Birthday Naura! - Website Ulang Tahun Interaktif

Website special untuk merayakan ulang tahun **Naura Rasendrya Rega** dengan konsep storytelling, photo slideshow, quiz kenangan, dan hadiah QRIS!

## ✨ Fitur Utama

- 🎨 **4 Chapter Story** - Perjalanan emosional dengan transisi book-flip
- 📸 **Photo Slideshow** - Swipeable photo gallery dengan polaroid style
- 🎵 **Background Music** - Music player dengan kontrol play/pause
- 🎮 **Quiz Kenangan** - Mini game interaktif tentang kenangan bersama
- 🎁 **QRIS Gift** - Hadiah spesial dengan reveal animation
- 💕 **Animasi Cantik** - Floating hearts, confetti, sparkles, dan lainnya
- 📱 **Responsive Design** - Tampil sempurna di semua device

## 🚀 Cara Menjalankan

### 1. Install Dependencies

```bash
npm install
```

### 2. Siapkan Asset

#### **Foto-foto Naura:**

Taruh 4 foto di folder `public/photos/`:

- `public/photos/naura-1.jpg`
- `public/photos/naura-2.jpg`
- `public/photos/naura-3.jpg`
- `public/photos/naura-4.jpg`

#### **QRIS Code:**

Taruh QRIS 50k di:

- `public/qris-50k.png`

#### **Background Music (Opsional):**

Taruh file musik di:

- `public/music/birthday-song.mp3`

**Rekomendasi Lagu:**

- "A Thousand Years" - Christina Perri
- "Perfect" - Ed Sheeran
- "All of Me" - John Legend
- Atau lagu favorit Naura!

### 3. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 4. Build untuk Production

```bash
npm run build
npm start
```

## 🌐 Deploy ke Vercel

### Cara Cepat:

1. Push code ke GitHub repository
2. Buka [vercel.com](https://vercel.com)
3. Klik "Import Project" dan pilih repository ini
4. Klik "Deploy"
5. Selesai! Link akan otomatis dibuat

### Atau dengan Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📁 Struktur Folder

```
nauBirthday/
├── app/
│   ├── globals.css       # Global styles & animations
│   ├── layout.js         # Root layout
│   └── page.js           # Main page dengan navigation
├── components/
│   ├── Chapter1.jsx      # Bab 1: Si Clingy Yang Lucu
│   ├── Chapter2.jsx      # Bab 2: Just A Little Thing (+ Photo Slideshow)
│   ├── Chapter3.jsx      # Bab 3: The Stronger Woman
│   ├── Chapter4.jsx      # Bab 4: Hadiah QRIS
│   ├── MusicPlayer.jsx   # Background music control
│   ├── PageIndicator.jsx # Progress indicator
│   └── QuizModal.jsx     # Quiz kenangan modal
├── public/
│   ├── photos/           # Taruh foto-foto di sini
│   ├── music/            # Taruh file musik di sini
│   └── qris-50k.png      # QRIS code
└── package.json
```

## 🎨 Kustomisasi

### Ubah Warna:

Edit di `tailwind.config.js`:

```js
colors: {
  primary: '#F7C6D8',    // Pink pastel
  lightPink: '#FDECF2',  // Pink muda
  accent: '#E54F7F',     // Pink accent
  gold: '#FFD700',       // Gold
}
```

### Ubah Font:

Edit di `app/globals.css` (import Google Fonts):

```css
@import url("https://fonts.googleapis.com/css2?family=...");
```

### Ubah Konten:

Edit langsung di file component masing-masing:

- `Chapter1.jsx` - Teks pembukaan
- `Chapter2.jsx` - Kenangan & caption foto
- `Chapter3.jsx` - Ucapan ulang tahun
- `Chapter4.jsx` - Pesan penutup
- `QuizModal.jsx` - Pertanyaan quiz

## 🎯 Checklist Sebelum Deploy

- [ ] Semua foto sudah ditambahkan di `public/photos/`
- [ ] QRIS code sudah ditambahkan di `public/qris-50k.png`
- [ ] Background music sudah ditambahkan (opsional)
- [ ] Sudah test di mobile dan desktop
- [ ] Semua teks sudah proofread
- [ ] Quiz questions sudah disesuaikan
- [ ] Build berhasil tanpa error

## 💡 Tips

1. **Kompres foto** sebelum upload untuk loading lebih cepat (gunakan TinyPNG)
2. **Test di berbagai device** untuk memastikan responsive
3. **Share link** dengan password/private link jika ingin exclusive
4. **Screenshot** website sebagai backup kenangan

## 🎵 Rekomendasi Musik

### Romantic & Sweet:

- A Thousand Years - Christina Perri
- Perfect - Ed Sheeran
- All of Me - John Legend
- Make You Feel My Love - Adele

### Cheerful & Happy:

- Happy Birthday (Instrumental)
- Sugar - Maroon 5
- Good Time - Owl City & Carly Rae Jepsen

### Instrumental:

- River Flows in You - Yiruma
- Canon in D - Pachelbel
- Comptine d'un autre été - Yann Tiersen

## 📝 Teknologi yang Digunakan

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Swipeable** - Swipe gestures

## 🐛 Troubleshooting

### Foto tidak muncul?

- Pastikan nama file sesuai: `naura-1.jpg`, `naura-2.jpg`, etc.
- Cek path: `public/photos/naura-1.jpg`
- Refresh browser (Ctrl + F5)

### Musik tidak play?

- Pastikan file ada di `public/music/birthday-song.mp3`
- Cek format: MP3 atau M4A
- Browser mungkin block autoplay, user harus klik play manual

### Build error?

```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run dev
```

## 📱 Tested On

- ✅ Chrome (Desktop & Mobile)
- ✅ Safari (iOS)
- ✅ Firefox
- ✅ Edge

## 🎉 Credits

Made with 💕 for **Naura Rasendrya Rega**'s Birthday!

---

**Happy Birthday, Naura! 🎂✨**
