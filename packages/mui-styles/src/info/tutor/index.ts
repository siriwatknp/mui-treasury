import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import tutorInfoStyles, { TutorInfoClassKey } from './tutorInfo.styles';

const useTutorInfoStyles: () => ClassNameMap<
  TutorInfoClassKey
> = makeStyles(tutorInfoStyles, { name: 'TutorInfo' });

export { tutorInfoStyles, useTutorInfoStyles };

export { default } from './tutorInfo.styles';
