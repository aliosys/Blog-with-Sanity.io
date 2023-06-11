'use client';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
const navigation = [
  {name: 'About us', href: '/about'},
  {name: 'Blogs', href: '/blogs'},
  {name: 'Contact us', href: '/contact'},
  {name: 'Shop Online', href: '#'},
];
type ChildProps = {
  variant: string;
};
export default function Header({variant}: ChildProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`${variant} relative text-slate-100`}>
      <header className="inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MPF</span>
              <Image
                className="w-10 md:w-16"
                src="/mpf-logo.png"
                alt=""
                width={120}
                height={60}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-slate-100">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="hidden text-sm font-semibold leading-6 text-slate-100">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
