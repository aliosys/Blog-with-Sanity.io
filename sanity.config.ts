import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import post from './sanity/schemas/post-schema';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: '7t0eybwr',
  dataset: 'production', // there could be other data set for development, staging and production
  title: 'mpf',
  apiVersion: '2023-06-07',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {types: schemas},
});

export default config;
