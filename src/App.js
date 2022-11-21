
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "@pages/NotFound/NotFound";
import ListingPage from "@pages/listingPage";
import './index.css';
import { useToast } from "@chakra-ui/react";
import Navbar from '@components/layout/Navbar';
import ProductDetail from '@pages/ProductDetail/ProductDetail';
import Footer from '@components/layout/Footer';
import { ProductJson } from '@utils/constants'
import { setAllProduct, setFilterProduct } from '@redux/action'

function CustomSnackBar({ type, message }) {
  const toast = useToast();
  return toast({
    title: message,
    status: type,
    duration: 6000,
    isClosable: true,
  })
}

export const AuthContext = React.createContext({});

const Routes = ({ }) => {
  const dispatch = useDispatch();
  const { type, message, isVisible } = useSelector(
    (state) => state.toastReducer
  );
  useEffect(() => {
    dispatch(setAllProduct(ProductJson));
    dispatch(setFilterProduct(ProductJson))
  }, [])

  return (
    <>
      {isVisible && <CustomSnackBar type={type} message={message} />}
      <Navbar />

      <Switch>
        <Route path={'/'} exact component={ListingPage} />
        <Route path={'/product-detail/:productId'} exact component={ProductDetail} />
        <Route path={'/*'} exact component={NotFound} />
      </Switch>
      <Footer />

    </>
  );
}

const App = () => {
  const [user, setUser] = React.useState({})
  return (
    <Router>
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes />
      </AuthContext.Provider>
    </Router>
  )
}
export default App;
