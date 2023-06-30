import React,{useState} from 'react'
import "./Auth.css"
import icon from "../../assets/icon.png"
import AboutAuth from './AboutAuth'
import { login, signup } from '../../actions/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
    const[isSignup,setIsSignup]=useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate=useNavigate()
    const dispatch=useDispatch()

    function handleSwitch(){
        setIsSignup(!isSignup)
    }

    function handleSubmit(e){

        e.preventDefault()
        if(!email && !password){
            alert("no emial paswd given")
        }
        if(isSignup){
            if(!name){
                alert("give nawm")
            }dispatch(signup({name,email,password},navigate))
        }else{
            dispatch(login({email,password},navigate))
        }

        console.log({name,email,password})
    }

  return (
    <section className='auth-section'>
        {
            isSignup && <AboutAuth/>
        }
        <div className='auth-container'>
            {!isSignup && <img src={icon} alt='stack icon' className='login-icon'/>}
            
            <form onSubmit={handleSubmit}>

                    {
                    isSignup &&  (<label htmlFor='name'> <h4>Full Name</h4>
                    <input type='text' id='name' className='full-name' onChange={(e)=>setName(e.target.value)}/> </label> )  }

                    <label htmlFor="email">
                    <h4>Email</h4>
                    <input type="email" id='email' name='email'  onChange={(e)=>setEmail(e.target.value)} />
                </label>

                <label htmlFor="password">
                    <div style={{display:"flex",justifyContent:'space-between'}}>
                    <h4>Password</h4>
                    {isSignup ? " " : <p style={{fontSize:"13px",color:"#007ac6"}}>Forgot password?</p>}
                    
                    </div>
                    <input type="password" id='password' name='password'  onChange={(e)=>setPassword(e.target.value)}/>

                    {isSignup && 
                        <p style={{fontSize:"13px",color:"#666767"}}> Passwords must contain at least eight characters,<br/>including at least 1 letter and 1 number. </p>
                    }
                     </label>

                    {isSignup && (
                        <label htmlFor='check'>
                            <input type="checkbox" id='check' />
                            <p style={{ fontSize:"14px",color:"#666767"}}>Opt-in to receive occasional product <br/> updates, user research invitations, company <br/>announcements, and digests</p>
                        </label>
                    )}

                     <button type='submit'className='login-btn'>{isSignup? "Signup" : "Login"}</button>

                        {isSignup && (
                            <p style={{color:"#666767", fontSize:"13px"}}>By clicking “Sign up”, you agree to our <br/> 
                            <span style={{color:"#007ac6"}}>terms of service</span> and acknowledge that <br/> you have read and understand our <br/> 
                            <span style={{color:"#007ac6"}}>privacy policy</span>  and 
                            <span style={{color:"#007ac6"}}> code of conduct</span>.</p>
                        )}
            </form>

            <p style={{fontSize:"14px",color:"#666767"}}>{isSignup ? "Already have an account?" : "Don't have an account?"}
            <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : "Sign up"}</button>
            </p>
                {isSignup && (
                    <p style={{fontSize:"14px",color:"#666767"}}> Are you an employer? <span style={{color:"#007ac6"}}> Sign up on Talent</span></p>
                )}
        </div>

    </section>

    
  )
}

export default Auth;