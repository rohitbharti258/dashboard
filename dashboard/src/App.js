import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div>
       <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                </Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
