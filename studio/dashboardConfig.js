export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f910357cfcdb449b27c4520',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xtncw3sd',
                  apiId: '199f3954-74be-402d-9027-309cc81a193a'
                },
                {
                  buildHookId: '5f9103585202e5310c05b419',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9xe2dgrz',
                  apiId: '3ec6dd5e-cb9e-4e56-b7fc-fce230d65b4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/damianesteban/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9xe2dgrz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
