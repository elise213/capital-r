"use client"
import './globals.css'
import { Inter } from 'next/font/google';
import NewNavbar from "./components/NewNavbar";
import { Footer } from "./components/footer.js";
const inter = Inter({ subsets: ['latin'] })
import 'font-awesome/css/font-awesome.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script> */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <NewNavbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}