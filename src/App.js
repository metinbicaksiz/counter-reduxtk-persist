import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, reset} from "./redux/counterSlice";
import {useEffect, useState} from "react";
import {IoMoon, IoSunny} from "react-icons/io5";
import {CiLight} from "react-icons/ci";

function App() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

  const darkModeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
      <div
          className="dark:bg-gray-800 bg-zinc-300 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      >
        <div>
          <button onClick={darkModeHandler} className="p-3 mx-3">
            {theme === 'light' && <IoMoon size="32px"/>}
            {theme === 'dark' &&  <CiLight size="32px" className="text-white" />
            }
          </button>
        </div>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="m-auto dark:text-white">
            <h1 className="text-5xl font-bold dark:text-orange-500">Counter</h1>
          </div>
          <div className="font-bold text-5xl m-auto dark:text-white">
            {count}
          </div>

          <div className="flex gap-4 flex-col sm:flex-row justify-center">
            <button
                className="text-white bg-orange-500 dark:text-orange-500 dark:bg-white md:text-2xl sm:text-lg font-bold rounded-md px-3 py-2"
                onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
                className="text-white bg-orange-500 dark:text-orange-500 dark:bg-white md:text-2xl sm:text-lg font-bold rounded-md px-3 py-2"
                onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
          <div className="m-auto">
            <button
                className=" font-bold bg-red-500 text-white dark:bg-gray-100 dark:text-red-600 text-4xl rounded-md sm:px-16 px-3 py-2"
                onClick={() => dispatch(reset())}
            >
              Reset
            </button>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center dark:text-white">
          <h2>DKMB</h2>
        </footer>
      </div>
  );
}

export default App;
