import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, client } from "./apolloclient";
import "./App.css";
import Login from "./component/login";
import Signup from "./component/signup-form-demo";
import { BackgroundLinesDemo } from "./component/background";
import BuyerPage from "./component/BuyerPage";
import Logout from "./component/Logout";
import SellerDashboard from "./component/sellerDashboard";
import HouseDetails from "./component/HouseDetails";
import AddHouseForm from "./component/AddHouseForm";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<BackgroundLinesDemo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/buyer" element={<BuyerPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/sellerDashboard" element={<SellerDashboard />} />
          <Route path="/houseDetails/:id" element={<HouseDetails />} />
          <Route path="/add-house" element={<AddHouseForm />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;