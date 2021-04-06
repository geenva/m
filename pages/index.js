import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function getServerSideProps() {
  const res = await fetch(process.env.API);
  let data = await res.json();

  if (data.content == "offline") {
    data = "/profile-offline.png";
    return {
      props: { data },
    };
  } else if (data.content == "online" || "dnd" || "idle") {
    data = "/profile-online.png";
    return {
      props: { data },
    };
  } else {
    data = "/profile.png";
    return {
      props: { data },
    };
  }
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      load: true,
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Marcus</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <Image
              className="center"
              src={this.props.data}
              alt="Profile picture"
              width="150vw"
              height="150vw"
            />
            <br></br>
            Marcus Y.
          </h1>

          <p className={styles.description}>
            Student-developer working in TypeScript.
            <br />
            <Link href="/about">About</Link> · <Link href="/blog">Blog</Link> ·{" "}
            <Link href="https://github.com/geenva/">GitHub</Link> ·{" "}
            <Link href="/contact">Contact</Link>
          </p>
        </main>

        <footer className={styles.footer}>
          © 2021-present Marcus Y. This website is open-sourced{" "}
          <a href="https://github.com/geenva/m">  here  </a> under the{" "}
          <Link href="/LICENSE.txt">  MIT license</Link>.
        </footer>
      </div>
    );
  }
}
