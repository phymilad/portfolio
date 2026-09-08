import Link from 'next/link';
import { notFoundPage } from '@/content/copy';

export default function NotFound() {
  return (
    <section className="py-16 text-center">
      <h1 className="text-3xl font-bold pb-3">{notFoundPage.title}</h1>
      <p className="text-slate-600 dark:text-slate-300 pb-6">{notFoundPage.body}</p>
      <Link
        href="/"
        className="inline-block rounded-md border border-slate-300 px-4 py-2 transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
      >
        {notFoundPage.cta}
      </Link>
    </section>
  );
}
