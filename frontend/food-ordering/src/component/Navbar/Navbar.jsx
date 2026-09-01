
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  return (
    <div className='px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>


        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
            <li className='logo font-semibold text-gray-300 text-2xl'>
                Food Ordering

            </li>

        </div>

        <div className='flex items-center space-x-2 lg:space-x-10'>
            <div className=''>
                <IconButton>
                    <SearchIcon sx={{fontSize: '1.5rem'}}/> 
                </IconButton>

            </div>

            <div className=''>
                <Avatar sx={{bgcolor: 'white', color: "#F50057"}}>I</Avatar>

            </div>

            <div>
                <IconButton>
                    <ShoppingCartIcon sx={{fontSize: '1.5rem'}}/> 
                </IconButton>
            </div>


        </div>

    </div>

    
  )
}