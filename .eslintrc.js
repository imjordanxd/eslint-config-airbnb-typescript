module.exports = {
  extends: ['eslint-config-airbnb-base', './base.js', 'prettier'],
  parserOptions: {
    projectService: {
      allowDefaultProject: ['*.js', '.*.js', 'lib/*.js'],
      defaultProject: 'tsconfig.json',
    },
    project: './tsconfig.json',
  },
};
