import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import { UserProvider } from "./contexts/UserContext/UserContext" // Modifié pour utiliser UserProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        {" "}
        {/* Utiliser UserProvider ici */}
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
