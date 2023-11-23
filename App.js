import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
    
     
      <body className="App-header">
        <div class="topnav">
          <a class="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <div><a href=""><img src=""></img></a></div>
        </div>
        
        <div className="App-body">
         
          <form>

            <div>
            <h1>Login</h1><br></br>
            </div>

            <div class="App-form">
              
              <label>Email</label>
              <input type="email" placeholder="Insira seu email"/><br></br>
              <label type="password">Password</label> 
              <input type="password" placeholder="Insira sua senha" /><br></br>
              <button type="submit">Login</button>
              
              <div class="forgot-pswd">
                <ul>
                  
                    <li><p>Click aqui se você esqueceu a senha</p></li>
                    <a href="#"><li>Esqueceu sua senha?</li></a>
                </ul>
              </div>
              
            </div>
          </form>
        </div>
      </body>
      <footer>
       
        <div class="footer-info">
        <div>
        <ul>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Home</li></a>
          
        </ul>
       </div>
          <div>
            <p>Copyright - Marcelo Lones</p>
           </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
