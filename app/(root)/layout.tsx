import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";


export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
      <>
        <Navbar/>
        {children}
        <Footer/>
      </>
  
    );
  }