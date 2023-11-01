
export default function Input({value, onChange, onSearch}) {
    return (
       <div className="flex items-center justify-center gap-4">
            <input 
                value={value}
                onChange={onChange}
                type="text" 
                placeholder="Pesquisar" 
                className="text-gray-700 md:text-lg ml-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-1 pl-3 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            />
            <button 
                onClick={onSearch}
                className="md:text-lg flex items-center justify-center bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md py-1 px-3 shadow-sm text-white sm:text-sm">
                    Pesquisar
            </button>
       </div>
    )
}   