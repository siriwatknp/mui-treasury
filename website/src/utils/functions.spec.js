import { removeTextAt, removeRepLinkBreaks } from './functions';

describe('functions', () => {
  it('removeTextAt correct', () => {
    expect(
      removeTextAt(
        "import React from 'react';\n" +
          "import Button from '@material-ui/core/Button';\n" +
          "import { useFirebaseBtnStyles } from '@mui-treasury/styles/button/firebase';\n" +
          "import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';\n" +
          '\n' +
          'const FirebaseButton = () => {\n' +
          '  const styles = useFirebaseBtnStyles();\n' +
          '  const gutterStyles = usePushingGutterStyles();\n' +
          '  return (\n' +
          '    <div className={gutterStyles.parent}>\n' +
          '      <Button classes={styles}>Default</Button>\n' +
          "      <Button classes={styles} variant={'contained'} color={'primary'}>\n" +
          '        Contained\n' +
          '      </Button>\n' +
          '    </div>\n' +
          '  );\n' +
          '};\n' +
          '\n' +
          '// hide-start\n' +
          'FirebaseButton.metadata = {\n' +
          "  title: 'Firebase',\n" +
          "  path: 'button/firebase',\n" +
          "  creators: [require('constants/creators').siriwatknp],\n" +
          "  files: [{ pkg: 'mui-styles', path: 'button/firebase/firebaseBtn.styles.js' }],\n" +
          '};\n' +
          '// hide-end\n' +
          '\n' +
          'export default FirebaseButton;',
        { start: /\/\/.*hide-start/, end: /\/\/.*hide-end/ }
      )
    ).toEqual(
      "import React from 'react';\n" +
        "import Button from '@material-ui/core/Button';\n" +
        "import { useFirebaseBtnStyles } from '@mui-treasury/styles/button/firebase';\n" +
        "import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';\n" +
        '\n' +
        'const FirebaseButton = () => {\n' +
        '  const styles = useFirebaseBtnStyles();\n' +
        '  const gutterStyles = usePushingGutterStyles();\n' +
        '  return (\n' +
        '    <div className={gutterStyles.parent}>\n' +
        '      <Button classes={styles}>Default</Button>\n' +
        "      <Button classes={styles} variant={'contained'} color={'primary'}>\n" +
        '        Contained\n' +
        '      </Button>\n' +
        '    </div>\n' +
        '  );\n' +
        '};\n' +
        '\n' +
        '\n' +
        '\n' +
        'export default FirebaseButton;'
    );
  });

  it('removeRepLinkBreaks correct', () => {
    expect(
      removeRepLinkBreaks(
        '  );\n' +
          '};\n' +
          '\n' +
          '\n' +
          '\n' +
          'export default FirebaseButton;'
      )
    ).toEqual('  );\n' + '};\n' + '\n' + 'export default FirebaseButton;');
  });
});
