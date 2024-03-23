import Head from 'next/head';
import styles from './styles.module.scss';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
    return (
      <>
        <Head>
          <title>Posts | Unifil.News</title>
        </Head>
  
        <main className={styles.container}>
          <div className={styles.posts}>
            Posts
          </div>
        </main>
      </>
    );
  }