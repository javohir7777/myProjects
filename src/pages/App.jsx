import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontLayout from "./components/layout/front";
import HomePage from "./pages/HomePage";
import AbouteUsPage from "./pages/AbouteUsPage";
import AccountPage from "./pages/AccountPage";
import AllPostsPage from "./pages/AllPostsPage";
import BlogPostPage from "./pages/BlogPostPage";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import MyPostsPage from "./pages/MyPostsPage";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import MyBlogsPage from "./pages/MyBlogsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/pages/Home";
import CounterPage from "./pages/pages/CounterPage";
import Users from "./pages/pages/Users";
import Layout from "./components/conteiner/layout";

function App() {
  const { isAuthenticed } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AbouteUsPage />} />
          <Route path="posts" element={<AllPostsPage />} />
          <Route path="blog/:id" element={<BlogPostPage />} />
          <Route path="category/:id" element={<CategoryPage />} />
          <Route path="my-posts" element={<MyPostsPage />} />

          {isAuthenticed ? null : (
            <Route path="login" element={<LoginPage />} />
          )}

          <Route path="/layote/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="counter" element={<CounterPage />} />
            <Route path="users" element={<Users />} />
          </Route>

          {/* <Route path="register" element={<RegisterPage />} /> */}

          {isAuthenticed ? (
            <Route path="account" element={<AccountPage />} />
          ) : null}

          <Route path="my-blogs" element={<MyBlogsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
