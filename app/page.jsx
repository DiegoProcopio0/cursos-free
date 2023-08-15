import Slider from "./components/Slider";
import Header from "./components/Header";
import Cards from "./components/Cards";

export default function Home() {
 return (
    <div className="w-screen h-screen ">
      <Header />
      <main>
        <Slider />
        <Cards />
      </main>
    </div>
  )
}
