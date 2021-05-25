import Head from "next/head";
import styles from "../../styles/About.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marcus | About</title>
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
          Hello! Thanks for visiting this site.
        </p>
        <p className={styles.description}>
          I am a student and a developer primarily working in TypeScript. <br />{" "}
          I also frequently use Node.js, React, and Next.js (this is what this
          website is built with) and MongoDB.
        </p>
        <p className={styles.description}>
          I am constantly learning new technologies. Currently, I am learning
          Rust.{" "}
          <Link href="/blog">
            Take a look at my blog to see what I'm doing!
          </Link>
        </p>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </main>
    </div>
  );
}
