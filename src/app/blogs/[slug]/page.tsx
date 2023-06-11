import {getPost} from '../../../../sanity/sanity-utils';
import {PortableText} from '@portabletext/react';
type Props = {
  params: {
    slug: string;
  };
};

import Image from 'next/image';
export default async function Blog({params}: Props) {
  const slug = params.slug;

  const post = await getPost(slug);
  console.log('post', post);
  return (
    <div className="max-w-5xl mx-auto">
      <Image
        className="mt-10 mb-10 border-2 border-gray-700 object-cover rounded-xl"
        src={post.image}
        width={1920}
        height={1080}
        alt={post.title}
      />
      <h1 className="text-5xl mb-10 ">{post.title}</h1>
      <p>{post._createdAt}</p>
      <div className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
        <PortableText value={post.content} />
      </div>
    </div>
  );
}
