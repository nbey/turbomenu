/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-firebase`,
      options: {
        credentials: {
          apiKey: "AIzaSyCnWTCZkiv_-Zdapwz_q4pp-1yo6-eAlyc",
          authDomain: "turbo-menu-e7a16.firebaseapp.com",
          databaseURL: "https://turbo-menu-e7a16-default-rtdb.firebaseio.com",
          projectId: "turbo-menu-e7a16",
          storageBucket: "turbo-menu-e7a16.appspot.com",
          messagingSenderId: "728505291298",
          appId: "1:728505291298:web:d0cad17cf000e8da42f07b",
          measurementId: "G-RP1FPF2K3D",
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-tidio-chat',
      options: {
        tidioKey: 'qmbnv4foymi06w23ho9lplcraczmtklu',
      },
    },
  ],
}
