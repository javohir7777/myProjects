import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/front";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import CategoryPage from "./pages/CategoryPage";
import AllPostsPage from "./pages/AllPostsPage";
import AbouteUsPage from "./pages/AbouteUsPage";
import BlogPostPage from "./pages/BlogPostPage";

function App() {
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

          <Route path="category/:id" element={<CategoryPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
