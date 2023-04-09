import Home from "../components/Home";
import Products from "../components/Products";
import Profile from "../components/Profile";
import Shop from "../components/Shop";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Wishlist from "../components/Wishlist";

// export const navLink = [
    // { id: 1, title: "Home", to: "/", element: <Home />, hidden: false,}, // isPrivate: false },
//     { id: 2, title: "Shop", to: "/shop", element: <Shop/>, hidden: false, isPrivate: false },
//     { id: 3, title: "Wishlist", to: "/wishlist", element: <Wishlist />, hidden: true, isPrivate: false },
//     { id: 4, title: "SignIn", to: "/Sign-in", element: <SignIn />, hidden: true, isPrivate: false },
//     { id: 5, title: "Products", to: "/products", element: <Products />, hidden: true, isPrivate: false },
//     { id: 6, title: "SignUp", to: "/sign-up", element: <SignUp />, hidden: true, isPrivate: false },
//     { id: 7, title: "Profile", to: "/profile", element: <Profile />, hidden: true, isPrivate: true },
// ]


export const navLink = [
    { id: 1, title: "Home", to: "/", element: <Home />, hidden: false, }, // isPrivate: false },
    { id: 2, title: "Products", to: "/products", element: <Products />, hidden: true, }, // isPrivate: false },
    { id: 3, title: "Profile", to: "/profile", element: <Profile />, hidden: true, }, // isPrivate: false },
    { id: 4, title: "Shop", to: "/shop", element: <Shop />, hidden: false, }, // isPrivate: false },
    { id: 5, title: "SignIn", to: "/sign-in", element: <SignIn />, hidden: true, }, // isPrivate: false },
    { id: 6, title: "SignUp", to: "/sign-up", element: <SignUp />, hidden: true, }, // isPrivate: false },
    { id: 7, title: "Wishlist", to: "/wishlist", element: <Wishlist />, hidden: true, }, // isPrivate: false },

]