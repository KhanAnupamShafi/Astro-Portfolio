import {UserIcon} from '@sanity/icons'
import type {StructureResolver} from 'sanity/structure'

const SINGLETON_TYPES = ['about']

export const structure: StructureResolver = (Structure) =>
  Structure.list()
    .title('Content')
    .items([
      Structure.listItem()
        .title('About')
        .icon(UserIcon)
        .child(
          Structure.document().schemaType('about').documentId('about').title('About'),
        ),

      Structure.divider(),

      ...Structure.documentTypeListItems().filter(
        (listItem) => !SINGLETON_TYPES.includes(listItem.getId() ?? ''),
      ),
    ])
