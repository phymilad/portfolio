'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export type Locale = 'en' | 'fa' | 'de' | 'nl';

const languageOptions = [
  { value: 'en', label: 'English',   flag: '/images/england-flag.svg' },
  { value: 'fa', label: 'فارسی',     flag: '/images/iran-flag.svg' },
  { value: 'de', label: 'Deutsch',   flag: '/images/germany-flag.svg' },
  { value: 'nl', label: 'Dutch',flag: '/images/netherland-flag.svg' },
] as const;

type LanguageSelectorProps = { locale: Locale };

// Generic hook: closes when clicking outside `ref` or pressing Escape
function useCloseOnOutside(ref: React.RefObject<HTMLElement | null>, onClose: () => void) {
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current) return;
      if (ref.current.contains(e.target as Node)) return; // click inside → ignore
      onClose();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [ref, onClose]);
}

const LanguageSelector = ({ locale }: LanguageSelectorProps) => {
  const pathname = usePathname() || '/';
  const [_, __, ...rest] = pathname.split('/');
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useCloseOnOutside(rootRef, () => setIsOpen(false));
  // also close when route changes
  useEffect(() => setIsOpen(false), [pathname]);

  const handleLanguageChange = (newLocale: Locale) => {
    const newPath = `/${newLocale}/${rest.join('/')}`;
    window.location.href = newPath; // or use router.push(newPath)
    setIsOpen(false);
  };

  return (
    <div ref={rootRef} className="relative w-full mt-2 md:w-32 md:mt-0">
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="language-menu"
        className="w-full flex justify-center items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-center dark:border-slate-600 cursor-pointer"
      >
        <img src={languageOptions.find((o) => o.value === locale)?.flag} alt={languageOptions.find((o) => o.value === locale)?.label} className="w-6 h-4" />
        {languageOptions.find((o) => o.value === locale)?.label}
      </button>

      {isOpen && (
        <div
          id="language-menu"
          role="listbox"
          className="absolute z-10 w-full mt-1 bg-white border border-slate-300 shadow-lg dark:bg-slate-900 dark:border-slate-600"
        >
          {languageOptions.map((option) => (
            <div
              key={option.value}
              role="option"
              onClick={() => handleLanguageChange(option.value)}
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              <img src={option.flag} alt={option.label} className="w-6 h-4" />
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
