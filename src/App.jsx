import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About, Contact, Home, Projects } from "./pages";

const Layout = ({ children }) => (
  <main className="bg-slate-300/20">
    <Navbar />
    {children}
  </main>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/projects",
    element: (
      <Layout>
        <Projects />
      </Layout>
    ),
  },
]);
const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
