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
import { defineType, defineField } from 'sanity';

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Name',
      type: 'string',
      validation: Rule => Rule.required().max(30)
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current'
    }
  }
});