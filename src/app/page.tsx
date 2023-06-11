import Image from 'next/image';
import {getPosts} from '../../sanity/sanity-utils';
import {Post} from '../../types/Post';
import Header from '@/components/Header';
import ImageGallery from '@/components/ImageGallery';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Hero from '@/components/Hero';

export default async function Home() {
  const posts = await getPosts();
  // console.log('new posts', posts);
  return (
    <main>
      <Hero />
      <Services />
      <ImageGallery />
    </main>
  );
}
