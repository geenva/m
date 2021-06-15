import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Typed from "react-typed";
import strings from "../typed/strings";
import { motion } from "framer-motion";
import { useLanyard } from "use-lanyard";

export default function Home() {
  const { data: activity } = useLanyard("457805013474082817");

  let profilePicture:
    | "/profile-online.png"
    | "/profile-offline.png"
    | "/profile.png" = "/profile.png";

  if (
    activity?.discord_status == "online" ||
    activity?.discord_status == "dnd" ||
    activity?.discord_status == "idle"
  )
    profilePicture = "/profile-online.png";
  else if (activity?.discord_status == "offline") profilePicture == null;

  let status = undefined;

  for (let i in activity?.activities) {
    if (activity?.listening_to_spotify) {
      status =
        "🎶 Listening to " +
        activity.spotify?.song +
        " by " +
        activity.spotify?.artist;
      break;
    }

    if (activity?.activities[i].type == 4) continue;

    if (activity?.activities[i].name == "Visual Studio Code") {
      status = "💻 " + activity.activities[i].state;
      break;
    }

    status = "ℹ️ " + activity?.activities[i].name;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Marcus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="center"
          src={profilePicture}
          alt="Profile picture"
          width="150vw"
          height="150vw"
        />
        <br />
        <br />

        <div>
          <motion.h1
            className={styles.title}
            animate={{ scale: 1.5 }}
            transition={{ duration: 1 }}
          >
            Marcus Y.
          </motion.h1>
        </div>

        <p className={styles.description}>
          {status ? (
            <>
              <strong>{status}</strong>
              <br />
            </>
          ) : null}
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
