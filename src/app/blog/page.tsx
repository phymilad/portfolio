import { blog } from '@/content/copy';

export default function BlogIndex() {
  return (
    <article className="prose">
      <h1>{blog.title}</h1>
      <p>{blog.empty}</p>
    </article>
  );
}
