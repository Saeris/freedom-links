import Image from "next/image";
import type { NextPage } from "next/types";
import * as icons from "react-icons/si";
import { config } from "../config";
import styles from "../theme.module.css";

const Home: NextPage = () => (
  <main className={styles.container}>
    <article className={styles.cell}>
      <figure className={styles.profile}>
        <div className={styles.avatar}>
          <Image alt={config.name} src="/avatar.png" width={128} height={128} />
        </div>
        <figcaption className={styles.about}>
          <h1 className={styles.name}>{config.name}</h1>
          <h2 className={styles.title}>{config.title}</h2>
        </figcaption>
      </figure>
    </article>
    <ul className={styles.links}>
      {config.links.map(([service, url]) => {
        // eslint-disable-next-line import/namespace
        const Icon = icons[`Si${service}`];
        if (!url.length) {
          return null;
        }
        return (
          <li key={service} className={styles.cell}>
            <a className={styles.socialLink} href={url}>
              <Icon />
              {service}
            </a>
          </li>
        );
      })}
    </ul>
  </main>
);

export default Home;