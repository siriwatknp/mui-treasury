import { createMuiTheme } from '@material-ui/core/styles';
import variables, { primary, secondary, background } from './variables';
import peaAppBar from './components/peaAppBar';
import peaAvatar from './components/peaAvatar';
import peaBadge from './components/peaBadge';
import peaButton from './components/peaButton';
import peaCard from './components/peaCard';
import peaChip from './components/peaChip';
import peaDialog from './components/peaDialog';
import peaForm from './components/peaForm';
import peaIcon from './components/peaIcon';
import peaIconButton from './components/peaIconButton';
import peaInputBase from './components/peaInputBase';
import peaLink from './components/peaLink';
import peaList from './components/peaList';
import peaModal from './components/peaModal';
import peaPaper from './components/peaPaper';
import peaRadio from './components/peaRadio';
import peaSelect from './components/peaSelect';
import peaSwitch from './components/peaSwitch';
import peaTabs from './components/peaTabs';
import peaTextField from './components/peaTextField';
import peaTypography from './components/peaTypography';

const theme = {
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary,
    secondary,
    background,
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiLink: {
      color: 'secondary',
    },
  },
  overrides: {
    ...peaAppBar(variables),
    ...peaAvatar(variables),
    ...peaBadge(variables),
    ...peaButton(variables),
    ...peaCard(variables),
    ...peaChip(variables),
    ...peaDialog(variables),
    ...peaForm(variables),
    ...peaIcon(variables),
    ...peaIconButton(variables),
    ...peaInputBase(variables),
    ...peaLink(variables),
    ...peaList(variables),
    ...peaModal(variables),
    ...peaPaper(variables),
    ...peaRadio(variables),
    ...peaSelect(variables),
    ...peaSwitch(variables),
    ...peaTabs(variables),
    ...peaTextField(variables),
    ...peaTypography(variables),
  },
};

export default createMuiTheme(theme);
