import React, { useEffect } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { IoIosCloseCircle } from "react-icons/io";
function AuthPage({ login, setLogin, signup, setSignup, authpage ,setAuthpage}) {
  useEffect(() => {
    if (authpage) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [authpage]);
  return (
    <>
      {authpage && (
        <section className=" w-full h-full fixed top-0 left-0 right-0 z-20 bg-black backdrop-blur-lg bg-opacity-45">
          
          <div className=" mt-8 md:mt-0">
          <span className="absolute left-1 md:left-[14%] md:top-28 lg:left-[18%] lg:top-56 xl:left-[36%] top-14 xl:top-10"><IoIosCloseCircle className="text-3xl text-slate-400 cursor-pointer" onClick={()=>{setAuthpage(!authpage)}}/></span>
            {login && (
              <Login
                login={login}
                setLogin={setLogin}
                signup={signup}
                setSignup={setSignup}
              />
            )}
            {signup && (
              <Signup
                login={login}
                setLogin={setLogin}
                signup={signup}
                setSignup={setSignup}
              />
            )}
          </div>
        </section>
      )}
    </>
  );
}

export default AuthPage;
