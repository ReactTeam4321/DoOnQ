import { Box, Button, Typography } from "@mui/material";
import counters1 from "../assets/counters1.webp";
import counters2 from "../assets/counters2.webp";
import counters3 from "../assets/counters3.webp";


const counters = [
  { img: counters1, value: "55K", text: "Happy customers" },
  { img: counters2, value: "20L", text: "Bills processed everyday" },
  { img: counters3, value: "0%", text: "Processing errors" }
];
export default function Counters() {
  return (
    <Box sx={{ padding: "5rem 30px",gap: '2rem', display:"flex",justifyContent:"space-around",flexDirection: {xs: "column", sm: 'row'} }}>
      {counters.map((counter, index) => (
        <Box key={index} sx={{
          display: "flex",
          flexWrap:"wrap",
          gap: "20px"
        }}>
          <img src={counter.img} width={100} alt={`Counter ${index + 1}`} />
          <Box sx={{ display:"flex",
          flexDirection:"column",
          justifyContent:"space-around",
            color: "#C52031", fontFamily: "Poppins", fontSize: "32px", fontWeight: "600"
          }}>
            <Typography variant='span'>
              {counter.value}
            </Typography>
        
            <Box sx={{
              color: "#6B7280", fontFamily: "DM Sans", fontSize: "18px"
            }}>
              <Typography>
                {counter.text}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
