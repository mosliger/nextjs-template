const path = require('path');

const getComponentName = componentPath => {
  const dir = path.dirname(componentPath);
  const arrDir = dir.split('/');
  const name = arrDir[arrDir.length - 1];
  return name;
};

module.exports = {
  getComponentPathLine(componentPath) {
    const name = getComponentName(componentPath);
    if (name === 'components') return '';
    return `import ${name} from '../components/${name}'`;
  },
  ignore: [
    'components/**/*style.js',
    'components/Navigation/*'
  ],
  sections: [
    {
      name: 'UI Components',
      components: 'components/**/*.js'
    }
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      ]
    }
  }
};
