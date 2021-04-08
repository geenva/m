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
            src="/profile.jpg"
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
          Currently, I am learning C++, Rust and Go. To keep up with my
          progress, <Link href="/blog">take a look at my blog!</Link>
        </p>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </main>
    </div>
  );
}
