import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AdhdTest from "./pages/AdhdTest";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/online-text/adhd-text" element={<AdhdTest />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
