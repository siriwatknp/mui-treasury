import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import apexInfoStyles, { ApexInfoClassKey } from './apexInfo.styles';

const useApexInfoStyles: () => ClassNameMap<
  ApexInfoClassKey
> = makeStyles(apexInfoStyles, { name: 'ApexInfo' });

export { apexInfoStyles, useApexInfoStyles };

export { default } from './apexInfo.styles';
