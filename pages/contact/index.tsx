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
            src="/profile.png"
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
    </div>
  );
}
