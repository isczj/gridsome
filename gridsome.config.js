// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    // {
    //   //读取本地文件
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     typeName: 'BlogPost',
    //     path: './content/blog/**/*.md',
    //   },
    // },
    {
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: 'http://localhost:1337',
        // apiURL:process.env.GRIDSOME_API_URL,
        apiURL:'http://106.75.96.202:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['Articles', 'flag','contacts'],
        singleTypes: ['general'],
        // // Possibility to login with a Strapi user,
        // // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: '',
        // },
      },
    },
  ],
  templates: {
    StrapiArticles: [
      { path: '/post/:id', component: './src/templates/Articles.vue' },
    ],
    StrapiFlag: [{ path: '/flag/:id', component: './src/templates/Flag.vue' }],
  },
}
