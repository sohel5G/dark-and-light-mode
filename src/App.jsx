
import './App.css'
import { useThemeMode } from './hooks/useThemeMode'

function App() {
  const { changeThemeMode, themeMode } = useThemeMode();

  return (
    <div className='dark:bg-slate-700 h-screen px-5'>
      <div className='flex justify-center items-center py-4'>
        <button onClick={changeThemeMode} className='p-4 mr-4 font-medium text-xl'>
          {themeMode === "light" ? "Dark" : <><span className='text-gray-200'>Light</span></>}
        </button>
      </div>
      <div className='my-5 border-2 dark:border-2 dark:border-slate-500'>
        <h1 className='text-3xl text-center py-7 dark:text-gray-50'>Banner area</h1>
      </div>
      <div className='my-5 border-2 dark:border-2 dark:border-slate-500'>
        <h1 className='text-3xl text-center py-7 dark:text-gray-100'>Website Body</h1>
      </div>
      <div className='my-5 border-2 dark:border-2 dark:border-slate-500'>
        <h1 className='text-3xl text-center py-7 dark:text-gray-200'>Website Footer</h1>
      </div>
    </div>
  )
}

export default App
