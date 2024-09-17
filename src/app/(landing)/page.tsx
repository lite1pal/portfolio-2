import { Metadata } from "next";
import HeroSection from "./components/hero-section";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://denistarasenko.com"),
//   title: {
//     default: "Denis Tarasenko",
//     template: "%s | Denis Tarasenko",
//   },
//   description:
//     "Dev, product maker, indie hacker. Coding my way to independence. Turning ideas into reality one line at a time.",
//   openGraph: {
//     title: "Denis Tarasenko",
//     description:
//       "Dev, product maker, indie hacker. Coding my way to independence. Turning ideas into reality one line at a time.",
//     url: "https://denistarasenko.com",
//     siteName: "Denis Tarasenko",
//     locale: "en_US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   twitter: {
//     title: "Denis Tarasenko",
//     card: "summary_large_image",
//   },
//   verification: {
//     google: "LHTT-WRptRShm2aPWwLVMp0C_4X2H7QMLYWuLfnvXGk",
//   },
// };

export default function HomeScreen() {
  return (
    <>
      <HeroSection />
    </>
  );
}
