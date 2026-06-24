import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'
import {structure} from './structure'

export default defineConfig({
  name: 'portfolio',
  title: 'Portfolio Studio',

  projectId: 'dper7lh5',
  dataset: 'production',

  plugins: [structureTool({structure})],

  schema: {
    types: schemaTypes,
  },
})
