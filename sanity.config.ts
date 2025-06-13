import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes/index'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'FSD-Times-Blogging',

  projectId: 'loiab2wq',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
