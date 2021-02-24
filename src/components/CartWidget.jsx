import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Link } from 'react-router-dom';

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
        <Link
          to={'/cart'}
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <ShoppingCartIcon fontSize='large' color='primary' />
        </Link>
      </ThemeProvider>
    </>
  );
};

export default CartWidget;
