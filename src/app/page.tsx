import React from "react";
import styles from "./page.module.scss";
import { ArrowRight, Pencil, Palette, Zap, MonitorSmartphone, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function LandingPage() {
  return (
    <div>
      <div className={styles.landingPage}>
        <header className={styles.header}>
          <div className={styles.logo}>RenderFlow.</div>
          <button className={styles.contactButton}>Contactez-nous</button>
        </header>
        <main className={styles.mainContent}>
          <p className={styles.slogan}>Créativité. Expertise. Résultats.</p>
          <h1 className={styles.title}>
            Transformez vos idées en réalité digitale.
          </h1>
          <p className={styles.description}>
            Nous créons des sites web modernes, performants et optimisés grâce
            aux technologies les plus avancées, comme les RSC.
          </p>
          <button className={styles.projectsButton}>
            Accéder aux projets <ArrowUpRight size={20} />
          </button>
        </main>
      </div>

      <div className={styles.carousel}>
        <div className={styles.slider}>
          <div className={styles.carouselTrack}>
            <img src="./images/partners/airtable.svg" alt="Image 1" />
            <img src="./images/partners/canvas.svg" alt="Image 2" />
            <img src="./images/partners/soundcloud.svg" alt="Image 3" />
            <img src="./images/partners/stripe.svg" alt="Image 4" />
            <img src="./images/partners/trello.svg" alt="Image 5" />

          </div>
          <div className={styles.carouselTrack}>
            <img src="./images/partners/airtable.svg" alt="Image 1" />
            <img src="./images/partners/canvas.svg" alt="Image 2" />
            <img src="./images/partners/soundcloud.svg" alt="Image 3" />
            <img src="./images/partners/stripe.svg" alt="Image 4" />
            <img src="./images/partners/trello.svg" alt="Image 5" />
          </div>
        </div>
      </div>

      <div className={styles.collabore}>
        <h2>Collaborer avec les marques et les agences pour créer des résultats percutants.</h2>
      </div>

      <div className={styles.container__card}>
          <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Pencil size={26} />
            </div>
            <h3 className={styles.cardTitle}>UX & UI</h3>
            <p className={styles.cardDescription}>
            Concevoir des interfaces intuitives, efficaces et agréables à utiliser.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Palette size={26}/>
            </div>
            <h3 className={styles.cardTitle}>Web & Mobile App</h3>
            <p className={styles.cardDescription}>
            Transformer les idées en expériences web et applications mobiles exceptionnelles.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <MonitorSmartphone size={26} />
            </div>
            <h3 className={styles.cardTitle}>Créatif & Design</h3>
            <p className={styles.cardDescription}>
            Concevoir des designs visuellement étonnants qui touchent votre public.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Zap size={26} />
            </div>
            <h3 className={styles.cardTitle}>Développement</h3>
            <p className={styles.cardDescription}>
            Bringing your vision to life with the latest technology and design trends.
            </p>
          </div>
          </div>
      </div>

      <div className={styles.realisation}>
        <div className={styles.realisationCard}>
         <div className={styles.top__card}>
         <div className={styles.textSection}>
            <h2 className={styles.realisationTitle}>Nos Réalisations</h2>
            <p className={styles.realisationSubtitle}>
              Découvrez quelques-unes de nos créations récentes.
            </p>

          </div>
          <Link href="/projects">
            <button className={styles.realisationButton}>
              <ArrowUpRight size={24} />
            </button>
          </Link>
         </div>
        <img className={styles.img__realisation} src="./images/realisation.png" alt="Réalisation" />

        </div>

      </div>

    </div>
  );
}

export default LandingPage;
