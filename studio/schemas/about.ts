import {defineArrayMember, defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Professional title',
      type: 'string',
      description: 'e.g. Senior Software Engineer',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'initials',
      title: 'Initials',
      type: 'string',
      description: 'Shown in the profile avatar when no photo is set',
      validation: (rule) => rule.required().max(4),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'timezone',
      title: 'Timezone',
      type: 'string',
      description: 'e.g. Asia/Dhaka — shown on the homepage',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter / X URL',
      type: 'url',
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
      description: 'e.g. Open to remote roles',
    }),
    defineField({
      name: 'skillCategories',
      title: 'Skill categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'skillCategory',
          fields: [
            defineField({
              name: 'title',
              title: 'Category',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'skills',
              title: 'Skills',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {title: 'title', skills: 'skills'},
            prepare({title, skills}) {
              return {
                title: title ?? 'Untitled category',
                subtitle: skills,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'title', media: 'photo'},
  },
})
