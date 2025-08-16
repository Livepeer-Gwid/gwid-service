import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Provider } from "@/lib/provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gwid Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-secondary`}>
        <Provider>
          <Toaster
            position="bottom-right"
            theme="system"
            style={{ background: "black" }}
          />
          {children}
        </Provider>
      </body>
    </html>
  );
}
