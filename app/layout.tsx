import "/styles/globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Prasajati",
  description: "Tactical imaging equipment distributor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
