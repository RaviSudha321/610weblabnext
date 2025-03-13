'use client';

import { useEffect, useState } from "react";
import { Suspense } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Loader from "./components/loader/loader";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Copyright from "./components/copyright/copyright";


export default function RootLayout({ children }) {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(function(){
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <html lang="en">
      <body className="">
        <div className="App">
          <Header />
          <Suspense fallback={<Loader />}>
            <div id="page_content" className="page_content">
              {loading ? <Loader /> : children}
            </div>
          </Suspense>
          <Footer />
          <Copyright />
          <ToastContainer
            position="top-center"
            autoClose={3000}
          />
        </div>
      </body>
    </html>
  );
}
