module.exports = {
  docs: [
    {
      type: 'category',
      label: 'About',
      items: ['gotrue/client/index', 'gotrue/client/installing', 'gotrue/client/initializing'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Client functions',
      items: ['gotrue/client/signup', 'gotrue/client/signin', 'gotrue/client/signout', 'gotrue/client/user', 'gotrue/client/session', 'gotrue/client/update', 'gotrue/client/onauthstatechange'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'General functions',
      items: ['gotrue/client/api-signupwithemail', 'gotrue/client/api-signinwithemail', 'gotrue/client/api-resetpasswordforemail', 'gotrue/client/api-signout', 'gotrue/client/api-getuser', 'gotrue/client/api-updateuser', 'gotrue/client/api-refreshaccesstoken'],
      collapsed: false,
    }
  ],
}