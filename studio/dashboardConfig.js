export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6258c0d88e01fe39065d02cf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-s2jo4x38',
                  apiId: '93412f6c-a185-4357-b061-50714ea6e9bf'
                },
                {
                  buildHookId: '6258c0d9a9912d38fb2268d7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-z2xubj17',
                  apiId: '53e1b735-2c0c-4e3f-945c-82d8e2c63c45'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DINKIN/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-z2xubj17.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
