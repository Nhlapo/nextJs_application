import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/navigator";
import Footer from "@/comps/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <head>
        <title>Home</title>
        
      </head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
          <p className={styles.text}>AIT involves the generation of fraudulent A2P 
              (application-to-person) SMS traffic through various deceptive
              methods, such as bots and counterfeit messaging. The practice not only leads to 
              financial losses for many of those in the message ecosystem. but also undermines the
              integrity of genuine mobile messaging 
              for brands’ communication with their customers.
            </p>
          <Link href="/da" className={styles.btn}>See Shaper Listings</Link>
      </div>

    </>

     );
}
