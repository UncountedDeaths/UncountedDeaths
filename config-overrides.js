const { override, fixBabelImports, addLessLoader, getThemeVariables } = require('customize-cra');
// const { addReactRefresh } = require('customize-cra-react-refresh')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  //https://github.com/ant-design/ant-design-landing/issues/235
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#74C4E8',
        '@font-size-base': '16px',
        '@text-color': '#292929',
        '@layout-body-background': '#fffff',
        '@btn-font-weight': '600',
        

      },
    },
  }),
  // Removed because it was creating a double plugin error with babel/webpack 
  // addReactRefresh()
);
