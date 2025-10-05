import { type Locale } from '@/i18n/dict';
import { redirect } from 'next/navigation';

export default function Projects({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  redirect(`/${locale}`);
}








