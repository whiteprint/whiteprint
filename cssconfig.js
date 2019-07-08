const postcssImport = require('postcss-import');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssAdvancedVariables = require('postcss-advanced-variables');

const wpCSSconfig = [
  postcssImport(),
  require('postcss-mixins'),
  postcssCustomProperties({
    preserve: false
  }),
  postcssAdvancedVariables({
    disable: '@mixin, @include, @content, @import'
  }),
  require('postcss-color-function'),
  require('postcss-calc'),
  require('postcss-nesting'),
  require('cssnano')
]

module.exports = wpCSSconfig;
