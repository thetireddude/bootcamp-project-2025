import Image from "next/image";
import styles from "./page.module.css";
import PageTitle from "@/components/pageTitle";

export default function Home() {
  return (
    <div className={styles.component}>
      <PageTitle title="Welcome"/>
      <div className={styles.about}>
        <Image className={styles.Image} src="/about.jpg" alt="city-landscape-image" width={550} height={310} style={{borderRadius: '7px'}}></Image>
        <div className={styles.aboutText}>
          <p>
            <em>Hi!</em><br/>
            Thanks for checking out my website! 
            <br/><br/>
            This page serves as my canvas to tweak and design and also servs as your first impression of me. 
            It will be a display of my artisitic aesthetics.
          </p>
        </div>
      </div>
    </div>
  );
}
