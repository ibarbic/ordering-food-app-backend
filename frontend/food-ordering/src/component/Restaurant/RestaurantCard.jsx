import { Card, Chip, IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const RestaurantCard = () => {
  return (
    <Card className="w-[18rem] h-72 ">

        <div className = {`${true ? 'cursor-pointer' : "cursor-not-allowed"} relative `}>
            <img src="https://images.pexels.com/photos/30479386/pexels-photo-30479386.jpeg" alt="Restaurant" className="w-full h-40 rounded-t-md object-cover" />
        <Chip 
        size="small" 
        className="absolute top-2 left-2" 
        color={true ? "success" : "error"}
        label={true ? "Open" : "Closed"}
        />
        </div>
        <div className="p-4 textPart lg:flex w-full justify-between">
            <div className="space-y-1">
                <p ClassName = "font-semibold text-lg">Pizza place</p>
                <p className = "text-gray-500 text-sm">
                    Craving it all? Dive into our global fla...
                </p>

            </div>
            <div>
                <IconButton>
                    {true ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                </IconButton>
            </div>

        </div>

       

    </Card>
  )
}

export default RestaurantCard