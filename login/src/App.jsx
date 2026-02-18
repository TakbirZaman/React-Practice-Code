const LoginStatusBtn=(status)=>{
  if (status) {
    return <button >Logout btn  </button>
  }
  else {
    return <button >Login btn  </button>
  }
}


const App = () => {

 return (
  <div>
    <h1>Login Status Is : </h1>
    {LoginStatusBtn(false)}
    {/* {LoginStatusBtn(false)} */}
  </div>
 )
};

 


export default App
