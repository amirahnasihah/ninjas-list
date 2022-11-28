import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

// Layout file would contain the Navbar.js and Footer.js
// Layout component would wrap all the different pages.
// Layout.js -> pages\_app.js

// Layout component on the props we get access to a {children} property which destructing it.
// this children property is basically anything inside this <Layout> component right here which is the <Component {...pageProps} />, anything nested inside it

// the {children} property is this <Component {...pageProps} /> which the <Component {...pageProps} /> contains all the pages.

// inside the Layout components we output this this thing right here `<Component {...pageProps} />` by referencing the `children`
// because the children is this thing `<Component {...pageProps} />` it's the children of the <Layout> components.
// And so therefore the pages are nested between the Navbar and the Footer
