/*
  Note all globals are passed to webpack
  define plugin and MUST be a STRING.
  What is inside this string will be
  replaced presciley on compile.
  see:
    https://github.com/webpack/docs/wiki/list-of-plugins#defineplugin
*/
module.exports = {
  environments: [
    {
      name: '"production environment"',
      globals: {
        ENVIRONMENT: '"production"',
        BUILDFOLDER: '"build"',
        API: '"productionserver.com/api"',
        SITE: '"productionserver.com"',
        PORT: "process.env.PORT",
        DEBUG: "false"
      },
      gulpTaskAlias: [
        'deploy',
        'build',
        'b',
      ],
    }
  ]
};
