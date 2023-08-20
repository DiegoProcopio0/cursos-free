import Slider from "./components/Slider";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function Home() {
 return (
    <div className="max-w-full h-screen   ">
      <Header />
      <main>
        <Slider />
        <Cards />
      </main>
      <Footer />
    </div>
  )
}
