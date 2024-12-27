

export function UserLogin({handlelogin}){
        console.log(handlelogin)
    return(
        <div>
            <form>
              first name  <input type="text"></input>
              <span>
              second name  <input type="text"></input>
              </span>
            </form>

            <h1 handlelogin={handlelogin} ></h1>
        </div>
    )
}