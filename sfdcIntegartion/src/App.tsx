import './App.css'
import salesForceIcon from "./assets/Salesforce Logo.png"

function App() {
  const handleClick = () => {
    // Add your Salesforce login logic here
    console.log("Login button clicked");
  };

  return (
    <>
    <div>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "#0070d2",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "4px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          position: "absolute",
          top: "10px",
          left: "10px",
          paddingLeft: "50px"
        }}
      >
        <img src={salesForceIcon} style={{
          height: "24px",
          width: "24px",
          position: "absolute",
          left: "15px",
          borderRadius: "3px"
        }} alt="Salesforce Icon" />
        Login with Salesforce
      </button>

    </div>
    </>
  )
}

export default App
