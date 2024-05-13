import { AuthContextProvider } from "context/authProvider";
import { AppRouter } from "routers";

function App() {

  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  )
}

export default App
