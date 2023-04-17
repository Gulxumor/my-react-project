import Checkout from "../components/Checkout";
import { Login } from "../components/Login";
import { ProductItem } from "../components/Product";
import Profile from "../components/Profile";
import ProfileEdit from "../components/Profile/ProfileEdit";
import { Register } from "../components/Register";
import Wishlist from "../components/Wishlist";
import { HomePage } from "../pages/Home";
import { ShopPage } from "../pages/Shop";

export const navbar = [
    {
        id: "1",
        title: "Home",
        path: "/home",
        element: <HomePage />,
        isPrivate: false,
        hidden: false
    },
    {
        id: "2",
        title: "Shop",
        path: "/shop",
        element: <ShopPage />,
        isPrivate: true,
        hidden: false
    },
    {
        id: "3",
        title: "Product",
        path: "/shop/:id",
        element: <ProductItem />,
        isPrivate: true,
        hidden: true
    },
    {
        id: "4",
        title: "Sign Up",
        path: "/sign-up",
        element: <Register />,
        isPrivate: false,
        hidden: true
    },
    {
        id: "5",
        title: "Sign In",
        path: "/sign-in",
        element: <Login />,
        isPrivate: false,
        hidden: true
    },
    {
        id: "6",
        title: "Checkout",
        path: "/checkout",
        element: <Checkout />,
        isPrivate: true,
        hidden: true
    },
    {
        id: "7",
        title: "Wishlist",
        path: "/wishlist",
        element: <Wishlist />,
        isPrivate: false,
        hidden: true
    },
    {
        id: "8",
        title: "Profile",
        path: "/profile",
        element: <Profile />,
        isPrivate: true,
        hidden: true
    },
    {
        id: "8",
        title: "Profile Edit",
        path: "/profile-edit",
        element: <ProfileEdit />,
        isPrivate: true,
        hidden: true
    },
]