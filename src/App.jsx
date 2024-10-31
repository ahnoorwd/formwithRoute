
// import Alluser from './alluser/Alluser'
import './App.css'
import Grandpa from './grandpa/Grandpa'
// import Reuseable from './reuseable/Reuseable'
// import Useref from './useref/Useref'
// import Statefull from './statefull/Statefull'
// import Singleform from './singleform/Singleform'

function App() {
   
  // const handleSignup = data => {
  //   console.log('signup data ',data);
  // }

  // const handleSignin = data => {
  //   console.log('signin data ',data);
  // }

  return (
    <>
      
      <h1 className='text-2xl text-green-400'>Form Master Lession  </h1>
      <Grandpa></Grandpa>
      {/* <Singleform></Singleform> */}
      {/* <Statefull></Statefull> */}
      {/* <Alluser></Alluser> */}
      {/* <Reuseable fromtitle={'signUP'} handleSubmit={handleSignup}>
        <div>
          <h2 className='text-2xl text-yellow-900'>Signup details </h2>
          <p>keep your sign up </p>
        </div>
      </Reuseable>
      <Reuseable fromtitle={'signIN'} handleSubmit={handleSignin} updatebutton='Update'>
      <div>
          <h2 className= 'text-2xl text-yellow-900'>Signin details </h2>
          <p>provide your valid email here  </p>
        </div>
      </Reuseable> */}
     
     
    </>
  )
}

export default App
