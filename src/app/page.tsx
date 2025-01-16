import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.mainWrapper}>
      <header>
        <Navbar />
      </header>

      <main className={styles.mainContent}></main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
