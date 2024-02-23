export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'authors',
      title: 'Author(s)',
      type: 'array',
      of: [
        {
          type: "reference",
          to: [{ type: 'author' }]
        }
      ]
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }]
    },
    {
      name: 'abstract',
      title: 'Abstract',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'date',
      title: 'Publication date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      }
    },
    {
      name: 'source',
      title: 'Source',
      type: 'url',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image',
    },
    {
      name: 'userId',
      title: 'User ID',
      type: 'string',
    },
    {
      name: 'downloads',
      title: 'No. of downloads',
      type: 'number',
      validation: (Rule: any) => Rule.min(0).integer(),
      initialValue: 0,
    },
    {
      name: 'approved',
      title: 'Approved Article',
      type: 'boolean',
    }
  ],
  initialValue: {
    approved: false
  }
}