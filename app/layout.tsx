import "./globals.css";

export const metadata = {
  title: "PDHLE HARISH",
  description: "UP TGT Art Mock Test Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}