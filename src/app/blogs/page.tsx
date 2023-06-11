// import {PortableText} from '@portabletext/react';
import Image from 'next/image';
import {getPosts} from '../../../sanity/sanity-utils';
import {Post} from '../../../types/Post';
import Header from '@/components/Header';
import ImageGallery from '@/components/ImageGallery';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
import Link from 'next/link';

export default async function Blogs() {
  const posts = await getPosts();
  // console.log('new posts', posts);
  return (
    <main>
      <section className="max-w-5xl mx-auto">
        <h1 className="text-white-800 text-5xl">Blogs</h1>
        <div className="mt-5 grid-cols-1 md:grid-cols-2 grid lg:grid-cols-2 gap-8">
          {posts.map((post: Post) => (
            <div
              className="border border-gray-500 rounded-lg p-1 hover:scale-105 hover-border-blue-500 tansition"
              key={post._id}>
              <h2 className="text-2xl">{post.title}</h2>
              <Link href={`/blogs/${post.slug.current}`}>View Blog</Link>

              {/* <PortableText value={post.content} /> */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
