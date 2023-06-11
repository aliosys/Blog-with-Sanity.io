import {PortableTextBlock} from 'sanity';

export type Post = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  url: string;
  image: string;
  content: PortableTextBlock[];
};
