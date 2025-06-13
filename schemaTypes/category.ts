import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {source: 'name'},
    }),

    // Continent dropdown
    defineField({
      name: 'continent',
      title: 'Continent',
      type: 'string',
      options: {
        list: [
          {title: 'Asia', value: 'asia'},
          {title: 'Europe', value: 'europe'},
          {title: 'Africa', value: 'africa'},
          {title: 'North America', value: 'north-america'},
          {title: 'South America', value: 'south-america'},
          {title: 'Australia', value: 'australia'},
          {title: 'Antarctica', value: 'antarctica'},
        ],
      },
    }),

    // defineField({
    //   name: 'slug',
    //   title: 'Continent Slug',
    //   type: 'slug',
    //   options: {source: 'continent'},
    // }),

    // Country field
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),



    // City field
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),

    // Categories (array of strings)
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
