import Home from "../src/components/Home";
import Contact from "../src/components/Contact";
import About from "../src/components/About";
import Login from "../src/components/Login";
import Main from "../src/components/Main";

export const navLink = [
    { id: 1, title: "Home", to: "/", element: <Home />, hidden: false, isPrivate: false },
    { id: 2, title: "About", to: "/about", element: <About />, hidden: false, isPrivate: false },
    { id: 3, title: "Contact", to: "/contact", element: <Contact />, hidden: false, isPrivate: false },
    { id: 4, title: "Login", to: "/login", element: <Login />, hidden: true, isPrivate: false },
    { id: 5, title: "Main", to: "/main", element: <Main />, hidden: false, isPrivate: true },
]

export const login = [
    { id: 1, title: "Name:", placeholder: "Name", type: "text", ref: "nameRef" },
    { id: 2, title: "Email:", placeholder: "Email address", type: "email", ref: "emailRef" },
    { id: 3, title: "Your password:", placeholder: "Enter your password", type: "password", ref: "passwordRef" },
]