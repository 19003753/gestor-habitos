export default function Habits(){
    return (
        <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md mt-8">
            <h1 className="text-2xl font-bold mb-4">Habitos</h1>
            <ul className="space-y-4">
                
                
                <li className="flex items-center justify-between">
                <span className="text-black">Lectura</span>
                <div className="flex items-center space-x-2">
                    <progress className="w-24" value="70" max="100"></progress>
                    <button className="px-2 py-1 text-sm text-white bg-blue-500 rounded">done</button>
                </div>
                </li>

                
                <li className="flex items-center justify-between">
                <span className="text-black">Aprender a programar</span>
                <div className="flex items-center space-x-2">
                    <progress className="w-24" value="70" max="100"></progress>
                    <button className="px-2 py-1 text-sm text-white bg-blue-500 rounded">done</button>
                </div>
                </li>

            </ul>
        </div>
    );
}