import Logo from "../assets/hlogowhite.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Login from "./login";

function HomeLogin() {
  return (
    <div className="hero min-h-screen flex items-center justify-center">
      <div className="hero-content flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
        <img
          src={Logo}
          className="w-[300px] md:w-[500px] rounded-lg mb-8 lg:mr-20"
        />
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Happening Now
          </h1>
          <h1 className="py-6 text-3xl md:text-5xl font-bold text-white">
            Join Today.
          </h1>
          <p className="pt-4 flex justify-center">
            <button className="flex items-center justify-center gap-2 p-2 bg-slate-100 rounded-xl w-[300px] text-black font-semibold hover:bg-slate-300">
              <FcGoogle className="text-xl" />
              Sign up With Google
            </button>
          </p>
          <p className="pt-2 mb-4 flex justify-center">
            <button className="flex items-center justify-center gap-2 p-2 bg-slate-100 rounded-xl w-[300px] text-black font-semibold hover:bg-slate-300">
              <FaApple className="text-xl" />
              Sign up With Apple
            </button>
          </p>
          <div className="divider divider-neutral w-[300px] mx-auto">Or</div>

          <p className="pt-2 flex justify-center">
            <button className="p-2 bg-sky-400 rounded-xl w-[300px] text-black font-semibold hover:bg-sky-500">
              Create Account
            </button>
          </p>
          <p className="pt-2 text-xs font-light">
            By signing up, you agree to the{" "}
            <span className="text-sky-400">Terms of Service</span> and{" "}
            <span className="text-sky-400">Privacy Policy</span>, including
          </p>
          <p className="text-xs font-light text-sky-400">Cookie Use.</p>

          <div className="pt-10">
            <h1 className="font-bold text-xl text-white mb-4">
              Already have an account?
            </h1>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-zinc-950 border border-sky-400 rounded-xl w-[300px] text-sky-400 hover:bg-sky-300 p-2"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Sign in
            </button>
          </div>
          <dialog
            id="my_modal_3"
            className="modal flex flex-col justify-center items-center "
          >
            <div className="modal-box bg-zinc-950 group-hover:bg-slate-100 border border-blackspace-x-2 p-2 w-[350px] md:w-[800px] flex flex-col justify-center items-center">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <Login />
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default HomeLogin;
