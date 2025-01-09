import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


export default function InfoBox({ info }) {
  const INIT_URL =
    "https://media.istockphoto.com/id/1135335888/photo/bad-air-with-pm-2-5-dust-in-the-atmosphere-in-the-city.jpg?s=612x612&w=0&k=20&c=EUyCf6tCKgnruIJgaIO3i5KbPKVTNnJUVKK7slHLEDM=";

    const HOT_URL="https://media.istockphoto.com/id/979270938/photo/sun-light-on-dramatic-moody-sky-with-cloud.jpg?s=612x612&w=0&k=20&c=ysbKRPY9ZFsnU-mu8Rp4EXb14sxDgJVtjOVP14tXSxY=";
    const COLD_URL="https://media.istockphoto.com/id/160840799/photo/icicles-and-snowstorm.jpg?s=612x612&w=0&k=20&c=LKgdYGIdh94AZ9Q5F9IE5TSHY1zz4oP4uauG79KIN8w=";
    const RAIN_URL="https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtb2t5JTIwd2VhdGhlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={info.humidity>80 ? RAIN_URL:info.temp>15?HOT_URL:COLD_URL} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{
                info.humidity>80 ? <ThunderstormTwoToneIcon/>:info.temp>15?<WbSunnyTwoToneIcon/>:<AcUnitTwoToneIcon/>
            }
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <p>Temperature={info.temp}&deg;C</p>
            <p> Humidity={info.humidity}</p>
            <p> Min_Temp={info.tempMin}</p>
            <p> Max_Temp={info.tempMax}</p>
            <p>
              {" "}
              <i>The Weather can be described as </i>
              {info.weather} and Feels like{info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
