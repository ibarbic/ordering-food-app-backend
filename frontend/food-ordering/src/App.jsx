
import './App.css'
import {CssBaseline, ThemeProvider} from '@mui/material';
import { darkTheme } from './component/Theme/DarkTheme';
import Navbar from './component/Navbar/Navbar';

/**
   @todo: 25.47
**/

function App() {


  return (
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      <div className='text-green-600'>
        ivan
      </div>


    </ThemeProvider>

    
  );
}

export default App
