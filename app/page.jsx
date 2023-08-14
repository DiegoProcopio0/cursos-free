import Header from "./components/Header";

export default function Home() {
 return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1
          className="font-bold text-purple-800 text-lg uppercase hover:text-black"
        >Cursos free</h1>
      </main>
    </div>
  )
}