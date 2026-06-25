import {defineArrayMember} from 'sanity'

/**
 * Shared Portable Text block config for blog posts and project case studies.
 * Omits H1 — the document title is the page H1 on the site.
 */
export const richTextBlockMember = defineArrayMember({
  type: 'block',
  styles: [
    {title: 'Paragraph', value: 'normal'},
    {title: 'Section (H2)', value: 'h2'},
    {title: 'Subsection (H3)', value: 'h3'},
    {title: 'Subheading (H4)', value: 'h4'},
    {title: 'Minor heading (H5)', value: 'h5'},
    {title: 'Quote', value: 'blockquote'},
  ],
  lists: [
    {title: 'Bullet', value: 'bullet'},
    {title: 'Numbered', value: 'number'},
  ],
  marks: {
    decorators: [
      {title: 'Bold', value: 'strong'},
      {title: 'Italic', value: 'em'},
      {title: 'Code', value: 'code'},
    ],
    annotations: [
      {
        name: 'link',
        type: 'object',
        title: 'Link',
        fields: [
          {
            name: 'href',
            type: 'url',
            title: 'URL',
            validation: (rule) =>
              rule.uri({
                allowRelative: true,
                scheme: ['http', 'https', 'mailto', 'tel'],
              }),
          },
        ],
      },
    ],
  },
})
