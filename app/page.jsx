import Header from "./components/Header";
import SliderTop from "./components/Slider";

export default function Home() {
 return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <SliderTop />
        <h1
          className="font-bold text-purple-800 text-lg uppercase hover:text-black"
        >Bianca feia</h1>

      </main>
    </div>
  )
}
