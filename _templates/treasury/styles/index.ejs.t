---
to: packages/mui-styles/src/<%= category %>/<%= name %>/index.js
unless_exists: true
---
<% fileName = name + h.changeCase.pascal(category) %>import makeStyles from '@material-ui/core/styles/makeStyles';
import <%= fileName %>Styles from './<%= fileName %>.styles';

const use<%= h.changeCase.pascal(fileName) %>Styles = makeStyles(<%= fileName %>Styles);

export { <%= fileName %>Styles, use<%= h.changeCase.pascal(fileName) %>Styles };

export { default } from './<%= fileName %>.styles';
