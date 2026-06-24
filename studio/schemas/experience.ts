import {defineArrayMember, defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyUrl',
      title: 'Company URL',
      type: 'url',
    }),
    defineField({
      name: 'startDate',
      title: 'Start date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End date',
      type: 'date',
      hidden: ({document}) => document?.current === true,
    }),
    defineField({
      name: 'current',
      title: 'Current role',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'Bullet points shown under the summary',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech stack',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
  ],
  orderings: [
    {
      title: 'Start date, newest',
      name: 'startDateDesc',
      by: [{field: 'startDate', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      role: 'role',
      company: 'company',
      startDate: 'startDate',
      endDate: 'endDate',
      current: 'current',
    },
    prepare({role, company, startDate, endDate, current}) {
      const endLabel = current ? 'present' : (endDate ?? '—')
      return {
        title: role ?? 'Untitled role',
        subtitle: `${company ?? 'Company'} · ${startDate ?? '?'} — ${endLabel}`,
      }
    },
  },
})
