import Home from "../src/components/Home";
import Main from "../src/components/Main";
import Contact from "../src/components/Contact";
import NotFound from "../src/components/NotFound";
import About from "../src/components/About";
import Login from "../src/components/Login";
import SignUp from "../src/components/SignUp";

export const navLink = [
    { id: 1, title: "Home", to: "/", element: <Home />, hidden: true },
    { id: 2, title: "About", to: "/about", element: <About />, hidden: true },
    { id: 3, title: "Contact", to: "/contact", element: <Contact />, hidden: true },
    { id: 4, title: "Main", to: "main/", element: <Main />, hidden: true },
    { id: 5, title: "Login", to: "/signup", element: <Login />, hidden: false },
    { id: 6, title: "Sign Up", to: "/login", element: <SignUp />, hidden: false },
    { id: 7, title: "NotFound", to: "*", element: <NotFound />, hidden: false },
]