import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => (
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>

);

export default App;
