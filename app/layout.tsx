import type { Metadata } from 'next';
import './globals.css';
import SplashScreen from './components/SplashScreen';

export const metadata: Metadata = {
  title: 'Dr. Michael Chen - Cardiologist',
  description: 'Professional medical portfolio of Dr. Michael Chen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
