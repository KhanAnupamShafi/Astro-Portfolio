import {defineArrayMember, defineField, defineType} from 'sanity'
import {BlockquoteIcon, CodeBlockIcon, RemoveIcon} from '@sanity/icons'

export const quote = defineType({
  name: 'quote',
  title: 'Quote',
  type: 'object',
  icon: BlockquoteIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Quote text',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'attribution',
      title: 'Attribution',
      type: 'string',
      description: 'Optional — who said it',
    }),
  ],
  preview: {
    select: {text: 'text', attribution: 'attribution'},
    prepare({text, attribution}) {
      return {
        title: text ?? 'Quote',
        subtitle: attribution ? `— ${attribution}` : undefined,
      }
    },
  },
})

export const codeBlock = defineType({
  name: 'codeBlock',
  title: 'Code block',
  type: 'object',
  icon: CodeBlockIcon,
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'Plain text', value: 'text'},
          {title: 'JavaScript', value: 'javascript'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'Python', value: 'python'},
          {title: 'Bash', value: 'bash'},
          {title: 'JSON', value: 'json'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'GROQ', value: 'groq'},
        ],
      },
      initialValue: 'text',
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'text',
      rows: 10,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {language: 'language', code: 'code'},
    prepare({language, code}) {
      return {
        title: `Code (${language ?? 'text'})`,
        subtitle: code?.slice(0, 80),
      }
    },
  },
})

export const divider = defineType({
  name: 'divider',
  title: 'Divider',
  type: 'object',
  icon: RemoveIcon,
  fields: [
    defineField({
      name: 'hidden',
      type: 'string',
      hidden: true,
      initialValue: 'divider',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Divider'}
    },
  },
})

export const quoteBlockMember = defineArrayMember({type: 'quote', icon: BlockquoteIcon})
export const codeBlockMember = defineArrayMember({type: 'codeBlock', icon: CodeBlockIcon})
export const dividerBlockMember = defineArrayMember({type: 'divider', icon: RemoveIcon})
