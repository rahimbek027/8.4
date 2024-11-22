import './App.css'
import Header from './components/Header'
import CustomRoute from './routes/CustomRoute'

function App() {

  return (
    <div className='bg-[#FFDF8C] py-[40px] overflow-y-scroll h-[100vh]'>
      <div className="w-[1340px] px-[50px] rounded-[10px] h-[1409px] bg-white mx-auto">
        <Header/>
        <CustomRoute/>
      </div>
    </div>
  )
}

export default App
