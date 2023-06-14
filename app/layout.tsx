import './globals.css'
import Navbar from './components/Navbar'
import Portrait from './components/Portrait'


export const metadata = {
  title: 'Mini Blog',
  description: 'Next tut mini blog lol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <Portrait />
        {children}
      </body>
    </html>
  )
}
