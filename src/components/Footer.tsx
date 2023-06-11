'use client';
import Image from 'next/image';
import Link from 'next/link';

import Facebook from '../../public/assets/Icon/facebook.svg';
import Instagram from '../../public/assets/Icon/instagram.svg';
import Twitter from '../../public/assets/Icon/twitter.svg';

export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="https://mpfsiwan.vercel.app/"
            className="mb-4 flex items-center sm:mb-0">
            <Image
              src="/mpf-logo.png"
              className="mr-3"
              alt="MPF Logo"
              width={100}
              height={100}
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Munna Poultry Farm Siwan
            </span>
          </Link>
          <div>
            <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
              <li>
                <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <Link href="/blogs" className="mr-4 hover:underline md:mr-6 ">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="-mx-2 mb-8 mt-2 flex w-full">
              <div className="bg-white-500 mx-2 flex items-center justify-center rounded-full p-2 shadow-md">
                {/* <Facebook className="h-6 w-6" /> */}
              </div>
              <div className="bg-white-500 mx-2 flex items-center justify-center rounded-full p-2 shadow-md">
                {/* <Twitter className="h-6 w-6" /> */}
              </div>
              <div className="bg-white-500 mx-2 flex items-center justify-center rounded-full p-2 shadow-md">
                {/* <Instagram className="h-6 w-6" /> */}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © {new Date().getFullYear()} &nbsp;
          <Link href="https://mpfsiwan.vercel.app/" className="hover:underline">
            Munna Poultry Farm Siwan, Bihar - 841226
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
