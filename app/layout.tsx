import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iliasov Usonbek | Project Manager & Frontend Developer",
  description:
    "Portfolio of Iliasov Usonbek — Project Manager, Frontend Developer, and SEO Specialist with 2+ years of experience in international projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-dark text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
