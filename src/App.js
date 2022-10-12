import { ToastContainer } from 'react-toastify';
import { Auth } from './Container/Auth';
import { Header } from './Container/Header';
import { UsercontextProvider } from "./Context/UserContext.jsx"
function App() {
  return (
    <>
    <UsercontextProvider>
      <ToastContainer />
      <Header />
      <Auth />
    </UsercontextProvider>
    </>
  );
}

export default App;
