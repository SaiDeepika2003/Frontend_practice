import "./css/ConditionalRenderingDemo2.css"
const ConditionalRenderingDemo3 = ()=>{

  const userStatus = "online";
  
  let content;
  
  if(userStatus === "online")
  {
    content = <div>
                  <h1>Hello Pavan.....</h1>
                  <p>You are online, available for everyone</p>
              </div>

    /*return(
      <div className="container">
      <h1>Demonstration of Conditional Rendering</h1>
                  <h1>Hello Pavan.....</h1>
                  <p>You are online, available for everyone</p>
        </div>
    )*/
  }
  else if(userStatus === "away")
  {
    content = <div>
                  <h1>Hello Pavan.....</h1>
                  <p>You are away, from past 1 hour</p>
              </div>

    /*return(
      <div className="container">
      <h1>Demonstration of Conditional Rendering</h1>
                  <h1>Hello Pavan.....</h1>
                  <p>You are away, from past 1 hour</p>
      </div>
    )*/
  }
  else if(userStatus === "offline")
  {
    content = <div>
                  <h1>Hello Pavan.....</h1>
                  <p>You are offline, since morning</p>
              </div>

    /*return(
      <div className="container">
      <h1>Demonstration of Conditional Rendering</h1>
                  <h1>Hello Pavan.....</h1>
                  <p>You are offline, since morning</p>
      </div>
    )*/
  }
  else
  {
    content = <div>
                  <h1>Hello User.....</h1>
                  <p>Login into your account. If u dont have account sign up</p>
              </div>

    /*return(
      <div className="container">
      <h1>Demonstration of Conditional Rendering</h1>
                  <h1>Hello User.....</h1>
                  <p>Login into your account. If u dont have account sign up</p>
      </div>
    )*/
  }
  return(
    <div className="container">
      <h1>Demonstration of Conditional Rendering</h1>
      /*<hr></hr>
      {
        content
      }
    </div>
  )
}
export default ConditionalRenderingDemo3;