import React from "react";
import { BrowserRouter,Switch, Route} from "react-router-dom";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import PrivateRoute from "./auth/PrivateRoute";
import DashBoard from './user/UserDashboard'
import AdminDashboard from "./user/AdminDashboard";
import AdminRoute from "./auth/AdminRoute";
import AddCategory from './admin/AddCategory'
import AddProduct  from "./admin/AddProduct";
import UpdateProduct from "./admin/UpdateProduct";
import Shop from "./core/Shop";
import Product from "./core/Product";
import Cart from "./core/Cart";
import Orders from "./admin/Orders";
import Profile from './user/Profile'
import ManageProducts from "./admin/ManageProducts";

const Routess =()=>{
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/"  component={Home}/>
            <Route exact path='/shop' component={Shop}/>
            <Route exact path="/signin"  component={Signin}/>
            <Route exact path="/signup"  component={Signup}/>

            <PrivateRoute exact path='/user/dashboard'  component={DashBoard}/>
            <PrivateRoute exact path="/profile/:userId" component={Profile}/>
            <AdminRoute exact path='/admin/dashboard'  component={AdminDashboard}/>
            <AdminRoute exact path='/create/category' component={AddCategory}/>
            <AdminRoute exact path='/create/product' component={AddProduct}/>
            <AdminRoute exact path='/admin/products' component={ManageProducts}/>
            <AdminRoute exact path='/admin/product/update/:productId' component={UpdateProduct}/>
            <AdminRoute exact path='/admin/orders' component={Orders}/>
            <Route exact path="/product/:productId"  component={Product}/>
            <Route path='/cart' component={Cart}/>
        </Switch>
    </BrowserRouter>
    )
}
export default Routess;
