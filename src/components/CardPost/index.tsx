import Author from '../Author';
import Heading from '../Heading';
import './styles.scss';

interface AuthorPost {
  name: string;
  office: string;
  avatar: string;
}

interface Post {
  img: string;
  title: string;
  subtitle: string;
  author: AuthorPost
}

function CardPost({ ...post }: Post) {
  return (
    <article className="card-post">
      <div className="card-post-img">
        <img src={post.img} alt={post.title} />
      </div>

      <div className="card-post-content">
        <Heading text={post.title} />
        <p className="subtitle">{post.subtitle}</p>
      </div>

      <div className="card-post-footer">
        <Author avatar={post.author.avatar} name={post.author.name} office={post.author.office} />
      </div>
    </article>
  );
}

export default CardPost;
