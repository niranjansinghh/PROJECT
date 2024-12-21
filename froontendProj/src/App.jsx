import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, client } from "./apolloclient";
import "./App.css";
import Login from "./component/login";
import Signup from "./component/signup-form-demo";
import { BackgroundLinesDemo } from "./component/background";

function App() {
  return (
    
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<BackgroundLinesDemo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </ApolloProvider>
    
  );
}

export default App;
