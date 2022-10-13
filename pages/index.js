/* import Head from "next/head";
import Image from "next/image"; */ /* 
import styles from "../styles/Home.module.css"; */
import CategorywiseStories from "../components/categorywisestories";
import Header from "../components/header/index";
import Layout from "../layouts";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>
          Visual Stories - Celebrity, Entertainment, Food, Sports Mobile |
          Latest Web Stories
        </title>
        <meta
          name="title"
          content="Visual Stories - Celebrity, Entertainment, Food, Sports Mobile | Latest Web Stories"
        />
        <meta
          name="description"
          content="Read latest trending visual stories on QuickBytes about Automobiles, Politics, Technology etc. Sign-up to start posting your own web stories to become an influencer."
        />
      </Head>
      <Header />
      <CategorywiseStories />
    </>
  );
}

HomePage.Layout = Layout;

export default HomePage;
