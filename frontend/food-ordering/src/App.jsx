
import './App.css'
import {CssBaseline, ThemeProvider} from '@mui/material';
import { darkTheme } from './component/Theme/DarkTheme';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';

/**
   @todo: 55.44
**/

function App() {


  return (
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      <Home/>
    


    </ThemeProvider>

    
  );
}

export default App
