import "./globals.css";

export const metadata = {
  title: "Happy Birthday Naura! 🎉",
  description: "Selamat Ulang Tahun untuk Naura Rasendrya Rega",
  keywords: "birthday, ulang tahun, naura",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F7C6D8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
