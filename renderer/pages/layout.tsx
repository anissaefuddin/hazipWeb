import Header from "../components/Header";

const Layout = ({ children }) => {
    return (
      <>
        <Header />
        <main className="pl-2 pr-2">{children}</main>
      </>
    );
  };
  
  export default Layout;