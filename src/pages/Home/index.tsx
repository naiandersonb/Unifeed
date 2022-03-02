/* eslint-disable max-len */
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ListPosts from './ListPosts';
import MainArticle from './MainArticle';

import './styles.scss';

function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="header">
          <Navbar />
        </div>

        <main className="main-article">
          <MainArticle />
        </main>
        <section className="posts">
          <ListPosts />
        </section>
        <Footer />
      </div>
    </section>
  );
}

export default Home;
