
export function LoginPage(){
    return(
        <div>
            <ul>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid justify-content-right">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link active" href="home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="about">About Info</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="contact">contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="more">More Info</a>
            </li>

          </ul>

        </div>
        <div class="container-fluid justify-content-end">
          <span>
            <button className="btn btn-primary" onClick={handlelogin}>Login</button></span>
          <span className="p-2">
            <button class="btn btn-success">Logout</button></span>
        </div>


      </nav>

      
            </ul>
        </div>
    )
}