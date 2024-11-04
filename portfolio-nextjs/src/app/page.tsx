import Navbar from "@/components/navbar";
import Homepage from "./home/page";
import Footer from "@/components/footer";
import "remixicon/fonts/remixicon.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}
