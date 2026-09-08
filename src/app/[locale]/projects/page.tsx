import { type Locale } from '@/i18n/dict';
import { redirect } from 'next/navigation';

export default async function Projects({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  redirect(`/${locale}`);
}








