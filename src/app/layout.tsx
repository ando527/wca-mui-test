import * as React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Provider } from "@/components/ui/provider";
import { Container } from "@chakra-ui/react"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          <Container>
            {children}
          </Container>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
