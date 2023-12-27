import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JotaiProviders from './context/jotaiprovider'

const inter = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'Payback LTD: Trading & Investment',
  description: `Let's Get Your Money Back — PAYBACK Ltd. Looking For a Global Recovery Service? Contact Us Now To Get Your Money Back. Multilingual Support. Quick Process. High Success Rate. Cases Of $5,000 Or More.`
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <JotaiProviders>
          <Header />
          <main>{children}</main>
          <Footer />
        </JotaiProviders>
      </body>
    </html>
  )
}
