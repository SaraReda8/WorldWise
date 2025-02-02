import {BrowserRouter,Routes,Route} from "react-router-dom";
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import Homepage from './pages/Homepage';
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/pricing" element={<Pricing />} />
  <Route path="/product" element={<Product />} />
  <Route path="*" element={<PageNotFound />} />
  <Route path="app" element={<AppLayout />} />

</Routes>
</BrowserRouter>
    </div>
  );
}

 export default App;
