import Navbar from "@/components/navbar/Navbar";
import Search from "@/components/search/Search";
import Footer from "@/components/footer/Footer";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.mainWrapper}>
      <header>
        <Navbar />
        <Search />
      </header>

      <main className={styles.mainContent}></main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
