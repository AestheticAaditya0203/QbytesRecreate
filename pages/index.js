/* import Head from "next/head";
import Image from "next/image"; */ /* 
import styles from "../styles/Home.module.css"; */
import CategorywiseStories from "../components/categorywisestories";
import Header from "../components/header/index";

export default function Home() {
  return (
    <>
      <Header />
      <CategorywiseStories />
    </>
  );
}
