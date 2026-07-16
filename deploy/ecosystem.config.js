module.exports = {
  apps: [
    {
      name: 'zurich',
      cwd: '/var/www/zurich',
      script: 'node_modules/.bin/next',
      args: 'start -p 3000',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
