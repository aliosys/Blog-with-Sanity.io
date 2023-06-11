import {createClient, groq} from 'next-sanity';

export async function getPosts() {
  const client = createClient({
    projectId: '7t0eybwr',
    dataset: 'production',
    apiVersion: '2023-06-07',
  });

  return client.fetch(groq`*[_type == "post"]{
	_id,
	_createdAt,
	title,
	content,
  "image": image.asset->url,
  url,
  "slug": slug.current,
  }`);
}

export async function getPost(slug: string) {
  const client = createClient({
    projectId: '7t0eybwr',
    dataset: 'production',
    apiVersion: '2023-06-07',
  });

  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    content,
    url,
    "slug": slug.current,
    "image": image.asset->url,
    }`,
    {slug},
  );
}
