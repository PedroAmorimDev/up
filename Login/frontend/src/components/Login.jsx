import axios from "axios";
import React from "react";

const Login = () => {

     const [email, setEmail] = React.useState('')
     const [password, setPassword] = React.useState('')
     const [message, setMessage] = React.useState('')

     const handleLogin = async (event) => {
          event.preventDefault()
          try {
               const response = await axios.post("http://localhost:3000/login", {
                    email,
                    password
               })
               localStorage.setItem("token", response.data.token)
               setMessage("Logado com sucesso")
          } catch {
               setMessage("não foi possivel fazer login")
          }
     }

     return (
          <>
               <form action="" onSubmit={handleLogin}>
                    <label htmlFor="">email:</label>
                    <input type="email" value={email} onChange={(e) => {
                         setEmail(e.target.value)
                    }} />
                    <label htmlFor="">password:</label>
                    <input value={password} onChange={(e) => {
                         setPassword(e.target.value)
                    }} type="password" />
                    <button type="submit">submit</button>
               </form>
               {message && <p>{message}</p>}
          </>)
}

export default Login