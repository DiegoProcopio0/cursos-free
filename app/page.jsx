import Slider from "./components/Slider";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import About from "./components/About";
import Favorites from "./components/Favorites";

export default function Home() {
 return (
    <div className="max-w-full h-screen">
      <Header />
      <Slider />
      <main className="sm:px-9">
        <About />
        <Cards />
        <Favorites />
      </main>
      <Footer />
    </div>
  )
}
