export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60fbc977cf1df3af727bccfc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-pos2dme6',
                  apiId: 'b478fedf-9bbb-497c-b993-1b0f9b21b6d5'
                },
                {
                  buildHookId: '60fbc978e3d933a95e493023',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-b15qipw6',
                  apiId: 'c29e3247-0814-4d02-9f45-d561613a77e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leonardopinto-design/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-b15qipw6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
