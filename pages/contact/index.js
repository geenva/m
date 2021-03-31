import Head from "next/head";
import styles from "../../styles/Contact.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marcus | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image
            className="center"
            src="/profile.jpg"
            alt="Profile picture"
            width="150vw"
            height="150vw"
          />
          <br></br>
          Marcus Y.
        </h1>
        <p className={styles.description}>
          Thanks for trying to contact me! Here are ways:
        </p>
        <p className={styles.description}>
          📧 Email:{" "}
          <a target="_blank" href="mailto:m@marcuscodes.me">
            m@marcuscodes.me
          </a>
        </p>{" "}
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        © 2021-present Marcus Y. This website is open-sourced{" "}
        <a href="https://github.com/geenva/m">  here  </a> under the{" "}
        <Link href="/LICENSE.txt">  MIT license</Link>.
      </footer>
    </div>
  );
}
