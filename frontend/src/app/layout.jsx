import { Inter, Playfair_Display } from "next/font/google";
import "@/css/main.css";
import Script from "next/script";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});
export const metadata = {
  title: "The Grey Stag | Premium wears Luxury",
  description: "Experience the epitome of luxury with The Grey Stag's exclusive collection.",
};

export default function RootLayout({ children, }) {
  return (<html lang="en" style={{ scrollBehavior: 'smooth' }}>
    <body className={`${inter.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
      <Providers>
        {children}
      </Providers>

      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
      </Script>
    </body>
  </html>);
}
