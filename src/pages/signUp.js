import react from "react";
import '../components/SignUp.css';
import {Link} from 'react-router-dom';

export default function SignUp(){
    return (
        <section class="login-form">
            
            <div class="box">
                <form action="">

                    <h1>login</h1>
                    <div>
                        <h3>first name</h3>
                        <input type="text" name="" id=""/>
                    </div>
                    <div>
                        <h3>last name</h3>
                        <input type="text" name="" id=""/>
                    </div>
                    <div>
                        <h3>gmail</h3>
                        <input type="gmail" name="" id=""/>
                    </div>
                    <div>
                        <h3>password</h3>
                        <input type="password" name="" id=""/>
                    </div>
                    <div>
                        <p>password you entered is incorrect. Forgot your password? <Link href="">click here</Link></p>
                        <p>gmail you entered is incorrect. Forgot your gmail? <Link href="">click here</Link></p>
        
                        <Link to="#"><button class="btn">sign up</button></Link>
                    </div>
                </form>
            </div>
        </section>
    

    ) 
    
}