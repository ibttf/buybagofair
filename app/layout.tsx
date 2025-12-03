import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Buy A Bag Of Air",
  description: "Get your own bag of air!"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
