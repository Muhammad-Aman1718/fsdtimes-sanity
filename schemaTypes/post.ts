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

// schemas/post.js
import {defineType, defineField} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(60).warning('SEO ke liye 60 characters se kam rakhein'),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'SEO ke liye zaroori',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    // 🔍 SEO SECTION ADDED
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) => Rule.max(60).warning('Ideal length: 50-60 characters'),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160).warning('Ideal length: 150-160 characters'),
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          options: {layout: 'tags'},
        }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image', fields: [{name: 'alt', title: 'Alt Text', type: 'string'}]}, // Alt text for images
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'readingTime',
      title: 'Estimated Reading Time (minutes)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1),
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
    // ✨ NEW SEO FIELD
    defineField({
      name: 'structuredData',
      title: 'Structured Data (JSON-LD)',
      type: 'code',
      options: {language: 'json'},
      description: 'Google rich results ke liye schema.org data',
    }),
  ],
  // ⚡️ AUTO-GENERATED PREVIEW
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
