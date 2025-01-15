import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Maru Cirigliano | Producer & Fashion Stylist :)",
  openGraph: {
    title: "Maru Cirigliano | Producer & Fashion Stylist :)",
    description: "Explora mi portfolio. Conoce mi trabajo en la industria de la moda y la producción de eventos.",
    url: "https://marucirigliano.vercel.app", // Reemplaza con tu URL
    image: "/images/foto_portada.jpeg", // Imagen destacada para Open Graph
    type: "website", // Tipo de contenido
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tag para hacer la página responsiva */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

