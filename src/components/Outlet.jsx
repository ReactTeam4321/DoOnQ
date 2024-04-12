import { Box, Typography } from "@mui/material";
import outlook1 from "../assets/manufacturing.png";
import outlook2 from "../assets/Inventoryy.png";
import outlook3 from "../assets/warehous.png";
import outlook4 from "../assets/HumanResources.png";
import outlook5 from "../assets/commerces.png";
import outlook6 from "../assets/accounting.png";
import outlook7 from "../assets/analytics.png";
import outlook8 from "../assets/mobile.png";
import outlook9 from "../assets/reporting.png";
import outlook10 from "../assets/management.png";

function Outlook() {
    const boxData = [
        {
            imageSrc: outlook1,
            text: "Manufacturing",
            
        },
        {
            imageSrc: outlook2,
            text: "Inventory",
        },
        {
            imageSrc: outlook3,
            text: "Warehouse",
        },
        {
            imageSrc: outlook4,
            text: "Human Resources",
        },
        {
            imageSrc: outlook5,
            text: "Commerce",
        },
        {
            imageSrc: outlook6,
            text: "Financial Accounts",
        },
        {
            imageSrc: outlook7,
            text: "Analytics",
        },
        {
            imageSrc: outlook8,
            text: "Mobile ERP",
        },
        
        {
            imageSrc: outlook9,
            text: "Reporting",
        },
        {
            imageSrc: outlook10,
            text: "Management",
        },
       
     
    ];
    
    return (
        <Box
            sx={{
                minHeight: "500px",
                background: "#C52031",
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                    padding: "30px 0px",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontFamily: "DM Sans",
                        color: "white",
                        fontSize: "16px",
                        textTransform: "uppercase",
                        fontWeight: "700",
                    }}
                >
                    Outlet types
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        color: "white",
                        fontSize: "40px",
                        fontFamily: "poppins",
                        fontWeight: "600",
                    }}
                >
                    Built for all types of ERP business
                </Typography>
                <Typography
                    variant="p"
                    sx={{
                        fontFamily: "DM Sans",
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "400",
                    }}
                >
                    The all-in-one ERP Management System for all types of
                    software formats and billing
                </Typography>
            </Box>
    <Box sx={{padding:"0px",display:"grid",flexWrap:"wrap",gridTemplateColumns:{
        xs: "auto auto",
        sm: "auto auto auto",
        md: "auto auto auto",
        lg: "auto auto auto auto auto ",

    },placeItems:"center"}}>
    {
              boxData.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        height: "350px",
                        width: {
                            xs:"0%",
                            md:"100%"
                        },
                        display: "flex",
                    
                        flexDirection: "column",
                        justifyContent: "center",
                        padding:{
                            xs:0,
                            lg:"50px"
                        },
                        alignItems: "center",
                        background:
                            "linear-gradient(311.01deg,rgba(0,0,0,.2) -48.64%,transparent 69.86%),#b30b1c",
                    }}
                >
                    <img
                        src={item.imageSrc}
                        style={{
                            height: "130px",
                            width: "130px",
                        }}
                    />
                    <Typography variant="span" sx={{whiteSpace:"wrap",textAlign:"center",fontSize:"28px",color:"#FFFFFF",fontFamily:"DM Sans"}}>
                        {item.text}
                    </Typography>
                </Box>))
      }
    </Box>
        </Box>
    );
}
export default Outlook;
