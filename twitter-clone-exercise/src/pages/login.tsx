import Logo from "../assets/hlogowhite.png";
import Google from "../assets/googleicon.png";
import Apple from "../assets/apple.icon.png";

function Login() {
  return (
    <div className="bg-zinc-950 w-full sm:w-[650px] h-[550px] rounded-md text-white flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5 w-full text-center">
        <img src={Logo} alt="X" style={{ width: 50 }} />
        <h1 className="font-bold text-2xl">Sign in to H</h1>

        <button className="bg-white hover:bg-slate-200 border border-black rounded-full flex justify-center items-center space-x-2 p-2 w-[90%] sm:w-[400px]">
          <span className="font-bold text-sm text-black">
            Sign in with Google
          </span>
          <img src={Google} alt="google" className="w-5 h-5" />
        </button>

        <button className="bg-white hover:bg-slate-200 border border-black rounded-full flex justify-center items-center space-x-2 p-2 w-[90%] sm:w-[400px]">
          <span className="font-bold text-sm text-black">
            Sign in with Apple
          </span>
          <img src={Apple} alt="apple" className="w-5 h-5" />
        </button>

        <input
          placeholder="Phone, email, or username"
          type="text"
          className="border border-white rounded-md p-2 w-[90%] sm:w-[400px]"
        />
        <input
          placeholder="Password"
          type="password"
          className="border border-white rounded-md p-2 w-[90%] sm:w-[400px]"
        />

        <button className="bg-white hover:bg-slate-100 border border-white rounded-full p-2 w-[90%] sm:w-[400px]">
          <span className="font-bold text-sm text-black">Next</span>
        </button>

        <button className="bg-black hover:bg-slate-100 border border-white rounded-full p-2 w-[90%] sm:w-[400px]">
          <span className="font-bold text-sm text-white">Forgot password?</span>
        </button>

        <p className="text-sm">
          Don't have an account? <span className="text-sky-400">Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
