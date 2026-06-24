import {defineField, defineType} from 'sanity'
import {StarIcon} from '@sanity/icons'

export const certificate = defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'issuer',
      title: 'Issuer',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'issuedAt',
      title: 'Issued at',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'iconLabel',
      title: 'Badge label',
      type: 'string',
      description: 'Short text shown in the card badge (e.g. AWS, TS)',
      validation: (rule) => rule.required().max(6),
    }),
    defineField({
      name: 'credentialUrl',
      title: 'Credential URL',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Optional — the current UI uses the badge label instead',
    }),
  ],
  orderings: [
    {
      title: 'Issued date, newest',
      name: 'issuedAtDesc',
      by: [{field: 'issuedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'issuer',
      issuedAt: 'issuedAt',
    },
    prepare({title, subtitle, issuedAt}) {
      return {
        title: title ?? 'Untitled certificate',
        subtitle: [subtitle, issuedAt].filter(Boolean).join(' · '),
      }
    },
  },
})
