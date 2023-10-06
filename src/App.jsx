import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/front";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import CategoryPage from "./pages/CategoryPage";
import AllPostsPage from "./pages/AllPostsPage";
import AbouteUsPage from "./pages/AbouteUsPage";
import BlogPostPage from "./pages/BlogPostPage";
import RegisterPage from "./pages/RegisterPage copy";
import AccountPage from "./pages/AccountPage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import NotFoundPage from "./pages/NotFoundPage";
import MyBlogsPage from "./pages/MyBlogsPage";

function App() {
  const { isAuthenticed } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="posts" element={<AllPostsPage />} />
          <Route path="about" element={<AbouteUsPage />} />
          <Route path="blog/:id" element={<BlogPostPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="category/:id" element={<CategoryPage />} />
          {isAuthenticed ? null : (
            <Route path="login" element={<LoginPage />} />
          )}
          <Route path="my-blogs" element={<MyBlogsPage />} />

          {isAuthenticed ? (
            <Route path="account" element={<AccountPage />} />
          ) : null}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
