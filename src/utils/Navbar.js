import Home from "../components/Home";
import Login from "../components/SignIn";
import Products from "../components/Products";
import SignUp from "../components/SignUp";
import Profile from "../components/Profile";
import Wishlist from "../components/Wishlist";
import Shop from "../components/Shop";

export const navLink = [
    { id: 1, title: "Home", to: "/", element: <Home />, hidden: false, isPrivate: false },
    { id: 2, title: "Shop", to: "/shop", element: <Shop />, hidden: false, isPrivate: true },
    { id: 3, title: "Wishlist", to: "/wishlist", element: <Wishlist />, hidden: true, isPrivate: true },
    { id: 4, title: "Login", to: "/login", element: <Login />, hidden: true, isPrivate: false },
    { id: 5, title: "Products", to: "/products", element: <Products />, hidden: true, isPrivate: true },
    { id: 6, title: "SignUp", to: "/sig-nup", element: <SignUp />, hidden: true, isPrivate: false },
    { id: 7, title: "Profile", to: "/profile", element: <Profile />, hidden: true, isPrivate: true },
]
