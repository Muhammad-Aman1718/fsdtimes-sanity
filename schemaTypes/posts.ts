// import {defineField, defineType} from 'sanity'

// export const posts = defineType({
//   name: 'post',
//   title: 'Articles',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       type: 'string',
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: 'slug',
//       type: 'slug',
//       options: {source: 'title'},
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: 'publishedAt',
//       type: 'datetime',
//       initialValue: () => new Date().toISOString(),
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: 'image',
//       type: 'image',
//     }),
//     defineField({
//       name: 'body',
//       type: 'array',
//       of: [{type: 'block'}],
//     }),
//   ],
// })

import {defineType, defineField} from 'sanity'

export const posts = defineType({
  name: 'posts',
  title: 'Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {source: 'title'},
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'readingTime',
      title: 'Estimated Reading Time',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'isPublished',
      title: 'Publish Status',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
