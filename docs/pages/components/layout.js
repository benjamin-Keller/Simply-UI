import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <div className="scrollbar-secndary">
      <Navbar />
        <main>{children}</main>
    </div>
  )
}