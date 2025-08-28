import "./globals.css";

export const metadata = {
  title: "Moim - Real-time chat for your neighborhood",
  description: "Location-based community chat. Join real-time conversations, formulate hangouts, and discover your local community with ease.",
  keywords: "chat, location-based, community, neighbors, hangouts, real-time",
  author: "Moim",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
