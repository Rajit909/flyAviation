
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import "/public/lib/owlcarousel/assets/owl.carousel.min.css";
import "/public/css/style.css";
import Script from "next/script";


export const metadata = {
  title: "Fly Aviation Academy",
  Script: "Fly in the Sky!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
        <link href="img/favicon/flyicon.png" rel="icon"/>

        </head>
        <body>
          {/* <NavBar /> */}

          <main>{children}</main>
          <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up"></i></a>
          <Toaster />
          {/* Script */}
    <Script src="https://code.jquery.com/jquery-3.4.1.min.js"/>
    <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"/>
    <Script src="/lib/easing/easing.min.js"/>
    <Script src="/lib/owlcarousel/owl.carousel.min.js"/>


    <Script src="/js/main.js"/>

        </body>
      </html>
    </ClerkProvider>
  );
}
