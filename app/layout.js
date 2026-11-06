import "./globals.css";
import "./template.css"
// import "./fanta.css"
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import ProductsProvider from "@/context/ProductContext";


export const metadata = {
  title: "Mary Ann's Studio",
  description: "Anything about ESL, tech, and art.",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>

      <html lang="en" data-scroll-behavior="smooth">
        <Head />
        <body>
          <div id="portal" />
          <div id="app">
            <header>
              <div className="header-content">

                <Link href={"/"}>
                  <h1>Mary Ann&apos;s Art Studio</h1>
                </Link>


                <h5 className="mid-text"> - Cool stuffs for cool people - </h5>

                <Cart />

              </div>
            </header>


            <main>
              {children}
            </main>

            <hr />

            <footer className="footer">
              <div className="email-container">
                <h5>Get updates</h5>
                <EmailInput />

              </div>

              <div className="links-container">
                <div>
                  <h3> About Me </h3>
                  <Link className="footer-links" href={'/'}>My Portfolio</Link>
                </div>

                <div>
                  <h3>Store</h3>
                  <Link className="footer-links" href={'/'}>Home</Link>
                  <Link className="footer-links" href={'/cart'}>Cart</Link>
                </div>

                <div>
                  <h3>Support</h3>
                  <Link className="footer-links" href={'/contact'}>Contact Us</Link>
                  <Link className="footer-links" href={'/faqs'}>FAQs</Link>
                </div>
              </div>

              <div className="socials">
                <p>
                  <a href="#" target="_blank">Mary Ann Liu</a> 2026
                  <br />
                  Built with Next.JS
                </p>
                <div className="social-links">
                  <Link href={'/'} target="_blank"><i className="fa-brands fa-github"></i></Link>
                  <Link href={'https://www.linkedin.com/in/pei-i-liu/'} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                  <Link href={'/'} target="_blank"></Link>
                </div>
              </div>


            </footer>
          </div>

        </body>
      </html>
    </ProductsProvider>
  );
}
