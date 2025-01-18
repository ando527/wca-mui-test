import * as React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Provider } from "@/components/ui/provider";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          {props.children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
