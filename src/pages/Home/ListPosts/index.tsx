/* eslint-disable react/jsx-props-no-spreading */
import { Fragment } from 'react';
import imgPost01 from '../../../Assets/Article-1-Image.png';
import imgPost02 from '../../../Assets/Article-2-Image.png';
import imgPost03 from '../../../Assets/Article-3-Image.png';

import avatarPost01 from '../../../Assets/User-Avatar-1.png';
import avatarPost02 from '../../../Assets/User-Avatar-2.png';
import avatarPost03 from '../../../Assets/User-Avatar-3.png';
import CardPost from '../../../components/CardPost';

import './styles.scss';

function ListPosts() {
  const posts = [
    {
      img: imgPost01,
      title: '7 Tips for Organic traffic',
      subtitle: 'From SEO to integrating with Paid Advertising, this article covers it all',
      author: {
        name: 'Spense David',
        office: 'SEO Specialist',
        avatar: avatarPost01,
      },
    },
    {
      img: imgPost02,
      title: 'How To start your Own Business',
      subtitle: 'Starting your own business in 2021 has never been easier',
      author: {
        name: 'Sara Frey',
        office: 'Business Leader',
        avatar: avatarPost02,
      },
    },
    {
      img: imgPost03,
      title: '75 Tips for Better Branding',
      subtitle: 'From SEO to integrating with Paid Advertising, this article covers it all',
      author: {
        name: 'Spense David',
        office: 'SEO Specialist',
        avatar: avatarPost03,
      },
    },

  ];

  return (
    <section className="posts-list">
      {posts.map((post) => (
        <Fragment key={post.title}>
          <CardPost {...post} />
        </Fragment>
      ))}
    </section>
  );
}

export default ListPosts;
