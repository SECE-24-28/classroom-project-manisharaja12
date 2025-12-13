import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "1234") {
      setStatus("Login Successful");
    } else {
      setStatus("Login Failed");
    }
  };

  return (
    <>
      <h2>Login</h2>

      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p>{status}</p>
    </>
  );
}