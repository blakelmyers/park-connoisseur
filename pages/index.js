import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from '../components/banner'
import Card from "../components/card";

import parkLocations from "../data/park-location.json"

export default function Home() {

  const handleOnBannerBtnClick = () => {
     console.log('Banner Button');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Park Connoisseur</title>
        <meta name="description" content="Park Locator App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        </h1>
        <Banner buttonText="View Parks Nearby" 
        handleOnClick={handleOnBannerBtnClick}/>
         <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            width={120}
            height={120}
            alt="hero image"
          />
        </div>
      <div className={styles.cardLayout}>
        {parkLocations.map((parkInfo) => {
          return (
            <Card
               className={styles.card}
               key={1}
               name={parkInfo.name}
               imgUrl={parkInfo.imgUrl}
               href={`/park-info/${parkInfo.name}`}
            />
          );
        })}
       </div>
      </main>
    </div>
  )
}
