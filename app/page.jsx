
import Header from "./components/Header";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";

export default function Home() {

 return (
    <div className="max-w-full h-screen">
      <Header />
      <Favorites />
      <Footer />
    </div>
  )
}
