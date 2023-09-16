import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({ //By using theme argument you gain access to the Material-UI theme object. This object contains theme-related values, such as colors, typography, spacing, breakpoints etc.
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));