import "./globals.css";
import localFont from "@next/font/local";

const gambarino = localFont({
  src: "../../public/fonts/Gambarino.otf",
  variable: "--gambarino",
});

const esenka = localFont({
  src: [
    {
      path: "../../public/fonts/Esenka-Light.otf",
      weight: "300",
      style: "light"
    },
    {
      path: "../../public/fonts/Esenka-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/Esenka-Black.otf",
      weight: "900",
      style: "black"
    },
],
variable: "--esenka",
});

const apercu = localFont({
  src: [
    {
      path: "../../public/fonts/Apercu/Apercu Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/Apercu/Apercu Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Apercu/Apercu Medium.otf",
      weight: "500",
      style: "regular",
    },
    {
      path: "../../public/fonts/Apercu/Apercu Bold.otf",
      weight: "700",
      variable: "bold",
    },
  ],
  variable: "--apercu",
});


export const metadata = {
  title: "Sarvag K. Portfolio",
  description: "i like building cool shit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${apercu.variable} ${gambarino.variable} ${esenka.variable}`}>{children}</body>
    </html>
  );
}
