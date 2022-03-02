import './styles.scss';

interface AuthorType {
  name: string;
  avatar: string;
  office: string;
}
function Author({ avatar, name, office }: AuthorType) {
  return (
    <div className="author">
      <div className="author-avatar">
        <img src={avatar} alt={name} />
      </div>
      <div className="author-name">
        <h4>{name}</h4>
      </div>
      <div className="author-office">
        <span>{office}</span>
      </div>
    </div>
  );
}

export default Author;
