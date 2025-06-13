// import { defineField, defineType } from 'sanity'

// export const category = defineType({
//   name: 'category',
//   title: 'Categories',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'name',
//       title: 'Category Name',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'slug',
//       title: 'URL Slug',
//       type: 'slug',
//       options: { source: 'name' },
//       validation: (Rule) => Rule.required(),
//     }),
//   ],
// })





// schemas/category.js
import {defineType, defineField} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(160).warning('SEO ke liye concise rakhein')
    }),
    defineField({
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
      options: {hotspot: true}
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'seoImage'
    }
  }
})