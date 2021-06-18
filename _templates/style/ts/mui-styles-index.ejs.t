---
to: packages/mui-styles/src/<%= category %>/<%= name %>/index.ts
unless_exists: true
---
<% type = h.changeCase.pascal(name) + h.changeCase.pascal(category) %><% fileName = name + h.changeCase.pascal(category) %>import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import <%= fileName %>Styles, {
  <%= type %>ClassKey,
  <%= type %>StyleProps,
} from './<%= fileName %>.styles';

const use<%= type %>Styles: (
  props?: <%= type %>StyleProps
) => ClassNameMap<<%= type %>ClassKey> = makeStyles(<%= fileName %>Styles, {
  name: '<%= type %>',
});

export { <%= fileName %>Styles, use<%= type %>Styles };

export { default } from './<%= fileName %>.styles';
