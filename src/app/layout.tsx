import Nav from '@/components/Nav/Nav';
import './globals.css'
import Footer from '@/components/Footer/Footer';
import Provider from './Provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body >
        <Provider>
          <div className='cb__primary__bg dark:bg-[#f2f2f2] '>
            <Nav></Nav>
            {children}
            <Footer></Footer>
          </div>
        </Provider>
      </body>
    </html>
  );
}
