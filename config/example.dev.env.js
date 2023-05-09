var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PAYPAL_RECEIVER_EMAIL: '"mafgwo@163.com"',
  // temp
  GITHUB_CLIENT_ID: '""',
  GITHUB_CLIENT_SECRET: '""',
  GITEE_CLIENT_ID: '""',
  GITEE_CLIENT_SECRET: '""',
  CLIENT_ID: '""',
  // GITEA_CLIENT_ID: '"fe30f8f9-b1e8-4531-8f72-c1a5d3912805"',
  // GITEA_CLIENT_SECRET: '"lus7oMnb3H6M1hsChndphArE20Txr7erwJLf7SDBQWTw"',
  // GITEA_URL: '"https://gitea.test.com"',
  // GITLAB_CLIENT_ID: '"33e01128c27fe75df3e5b35218d710c7df280e6ee9c90b6ca27ac9d9fdfb92f7"',
  // GITLAB_URL: '"http://gitlab.qicoder.com"',
})
