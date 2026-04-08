import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pratap Shekhar Jha | IT Professional Portfolio',
  description: 'Portfolio of Pratap Shekhar Jha, an IT professional specializing in network management, e-governance, and cyber security.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
