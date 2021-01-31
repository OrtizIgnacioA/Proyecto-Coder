import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#16A3FF',
    },
  },
});

const CartWidget = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ShoppingCartIcon fontSize='large' color='primary' />
      </ThemeProvider>
    </>
  );
};

export default CartWidget;
