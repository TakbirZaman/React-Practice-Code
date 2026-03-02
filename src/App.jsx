import teaImg from './images/tea.jpg'

export default function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-4">

        <img
          className="h-24 max-w-full mx-auto rounded-full ring-2 ring-red-400"
          src={teaImg}
          alt="Have a cup of tea"
        />

        <div className="text-center space-y-2">
          <p className="text-lg text-black font-semibold">
            Let's have a cup of tea
          </p>
          <p className="text-gray-1000 text-sm">
            Relax, enjoy, and learn Tailwind CSS
          </p>
        </div>

      </div>
    </div>
  )
}