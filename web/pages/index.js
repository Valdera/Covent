import ContentGrid from "@components/content-grid/ContentGrid";
import Logos from "@components/logos/Logos";
import HeaderHome from "@components/header/HeaderHome";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Statistic from "@components/stats/Statistic";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeaderHome />
      <Statistic />
      <Logos />
      <ContentGrid />
    </div>
  );
}
