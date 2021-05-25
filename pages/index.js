import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Typed from "react-typed";
import strings from "../typed/strings";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const res = await fetch(process.env.API);
  let data = await res.json();

  if (data.content == "offline") {
    data = "/profile-offline.png";
  } else if (data.content == "online" || "dnd" || "idle") {
    data = "/profile-online.png";
  } else {
    data = "/profile.png";
  }
  return {
    props: { data },
    revalidate: 60,
  };
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marcus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <motion.h1
          className={styles.title}
          animate={{ scale: 1.2 }}
          transition={{ duration: 1 }}
        >
          <Image
            className="center"
            src={data}
            alt="Profile picture"
            width="150vw"
            height="150vw"
          />
          <br></br>
          Marcus Y.
        </motion.h1>
        <p className={styles.description}>
          <Typed
            className={styles.description}
            strings={strings}
            typeSpeed={100}
            backSpeed={50}
            loop
          />{" "}
          <br />
          <Link href="/about">About</Link> · <Link href="/blog">Blog</Link> ·{" "}
          <Link href="https://github.com/geenva/">GitHub</Link> ·{" "}
          <Link href="/contact">Contact</Link>
        </p>
      </main>
    </div>
  );
}
