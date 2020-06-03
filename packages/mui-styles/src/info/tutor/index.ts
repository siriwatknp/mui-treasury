import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import tutorInfoStyles, { TutorThemeInfoClassKey } from './tutorInfo.styles';

const useTutorInfoStyles: () => ClassNameMap<
  TutorThemeInfoClassKey
> = makeStyles(tutorInfoStyles, { name: 'TutorInfo' });

export { tutorInfoStyles, useTutorInfoStyles };

export { default } from './tutorInfo.styles';
