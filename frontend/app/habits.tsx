interface Habit{
    _id: string;
    nombre: string;
    descripcion: string;
    progreso: number;
    };
export

type HabitsProps = {
    habits: Habit[];
}
export default function Habits({habits}: HabitsProps) {
    return (
        <div className="w-full max-w-md p-4 bg-white-500 text-black rounded-lg shadow-md mt-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Habitos</h1>
            <ul className="space-y-4">
                {habits.map((habit:Habit) => ( 
                        <li className="flex items-center justify-between" key={habit._id}>
                            <span className="text-black">{habit.nombre}</span>
                                <div className="flex items-center space-x-2">
                                    <progress className="w-24" value="70" max="100"></progress>
                                    <button className="px-2 py-1 text-sm text-white bg-blue-500 rounded">done</button>
                                </div>
                        </li>
                ))
                }
            </ul>
        </div>
    );
}