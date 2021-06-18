---
to: packages/mui-styles/src/<%= category %>/<%= name %>/index.js
unless_exists: true
---
<% fileName = name + h.changeCase.pascal(category) %>import makeStyles from '@material-ui/styles/makeStyles';
import <%= fileName %>Styles from './<%= fileName %>.styles';

const use<%= h.changeCase.pascal(fileName) %>Styles = makeStyles(<%= fileName %>Styles, { name: "<%= h.changeCase.pascal(fileName) %>" });

export { <%= fileName %>Styles, use<%= h.changeCase.pascal(fileName) %>Styles };

export { default } from './<%= fileName %>.styles';
