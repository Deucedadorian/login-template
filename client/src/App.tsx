import { createSignal, onCleanup, Component } from 'solid-js';

const App: Component = () => {
    
    const [validEmail, setValidEmail] = createSignal(false);
    
    const ValidateEmail = (inputText) => {
        let emailEl = (document.querySelector("#email") as HTMLInputElement);
    	let mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

	    if(emailEl.value.match(mailformat)) {
            setValidEmail(true);
		} else {
            setValidEmail(false);
        }
        console.log(validEmail());
    }

    return (
         <div>
            <div class="box is-flex is-flex-direction-column is-align-items-center">
                <div class="field">
                  <label class="label">Username</label>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input is-success column" type="text" placeholder="Text input">
                    </input>
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </div>
                  <p class="help is-success">This username is available</p>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left has-icons-right">
                    <input 
                        class="input is-danger column" 
                        id="email" 
                        type="email" 
                        placeholder="Email input"
                        onChange={ValidateEmail}>

                    </input>
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    { validEmail() ? '' :
                        <span class="icon is-small is-right">
                          <i class="fas fa-exclamation-triangle"></i>
                        </span>
                    }
                  </div>
                { 
                    validEmail() ?
                        <p class="help is-success">this email is valid</p> :
                        <p class="help is-danger">This email is invalid</p>
                } 
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <p class="control has-icons-left">
                    <input class="input" id="password" type="password" placeholder="Password"></input>
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <label class="label">Confirm Password</label>
                  <p class="control has-icons-left">
                    <input class="input" id="confirmPassword" type="password" placeholder="Confirm Password"></input>
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                {
                    validEmail() ? <input 
                        class="button" 
                        type="submit" 
                        value="Sign Up"></input> : (
                        <input class="button" type="submit" disabled value="Sign Up"></input>
                    )
                }
           </div>
       </div>
    );
};

export default App;
