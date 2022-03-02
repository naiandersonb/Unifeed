/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import mainArticleImg from '../../../Assets/main-article-image.png';
import avatar from '../../../Assets/User-Avatar.png';
import Author from '../../../components/Author';
import Heading from '../../../components/Heading';

import './styles.scss';

function MainArticle() {
  return (
    <section className="main-article-Section">
      <div className="img-container">
        <img src={mainArticleImg} alt="main article" />
      </div>

      <div className="article-content">
        <div className="article-content-title">
          <Heading text="Weekly newsletter: Tweets for higher Engagements" />
        </div>
        <div className="article-content-subtitle">
          <p>
            In the weekly newsletter, we will be covering ten types of engaging tweets. This is the guide if you're just starting out on Twitter.
          </p>
        </div>
        <div className="article-content-author">
          <Author avatar={avatar} name="Jessica Andrews" office="Content Manager" />
        </div>
      </div>
    </section>
  );
}

export default MainArticle;
