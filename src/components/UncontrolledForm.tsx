import { FormEvent } from 'react'
import { useRef } from 'react'
const UncontrolledForm = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("username:", usernameRef.current?.value);
    console.log("password:", passwordRef.current?.value);
  }
  
  return (
    <form onSubmit={handleSubmit} className="col-6">
      <div className="mb-3">
         <label className="form-label" htmlFor="username">User name</label>
      <input className="form-control" id="username" type="text" placeholder="Enter user name" name='username' ref={usernameRef} />
      </div>
       <div className="mb-3">
         <label className="form-label" htmlFor="password">Password</label>
      <input className="form-control" id="password" type="text" placeholder="Enter password" name='password' ref={passwordRef}/>
      </div>
     
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default UncontrolledForm

