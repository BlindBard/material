import { makeStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    // [theme.breakpoints.down('md')]: {
    //   color: 'green',
    // },
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroungRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    posistion: 'absolute',
    top: 0,
    Left: 0,
    right: 0,
    bottom: 0,
    backgroundOverlay: 'rgba(0,0,0,.3)',
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(9),
  },
});

export default makeStyles(styles);
