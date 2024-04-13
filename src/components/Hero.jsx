import { Box, Typography } from "@mui/material";
import HomeHero from "../assets/New Project (3).png";
import { useEffect, useState } from "react";

function Hero() {
    const[handleZindex,setHandleZindex]=useState(true)
    useEffect(() => {
        const handleScroll = () => {
      if(  window.scrollY===0){
        setHandleZindex(true)
      }else{
        setHandleZindex(false)
      }
         
        };
    
        window.addEventListener('scroll', handleScroll);
    
      
      }, []);
    return (
        <Box
      
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                background: "white",
                height: { xs: "auto", lg: "85vh" },
                position:"relative",
                width: "85%",
                margin: "10px auto",
                marginTop:"100px",
                gap: "2rem",
            }}
        >
            <Box
                sx={{
                    marginTop: { xs: "2.5rem", lg: "0rem" },
                    height: "100%",
                    display: "flex",
                  
                    justifyContent: "center",
                    flexDirection: "column",
                    flexBasis: "45%",
                    background: "white",
                    gap: "2.5rem",
                }}
            >
                <Box sx={{  paddingTop:"15px",}}>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "1.5rem",
                                sm: "2.5rem",
                                lg: "2.5rem",
                                xl: "3rem"
                                
                            },
                            fontWeight: "600",
                            
                            fontFamily: "Poppins",
                            color: "#1F2937",
                        }}
                    >
                        Clear queue management for retail & wholesale ERP!
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "0.8rem",
                                sm: "1rem",
                                md: "1rem",
                                lg: "1.2rem",
                                xl: "1.5rem",
                            },
                            fontWeight: "300",
                            fontFamily: "Poppins",
                            color: "#1F2937",
                        }}
                    >
                        Streamline Retail and Wholesale Operations with our
                        Advanced ERP Software featuring a Crystal Clear Queue
                        System.
                    </Typography>
                </Box>
                <Box>
                    <Box
                        sx={{
                            padding: "0.8rem 1.5rem",
                            width: "fit-content",
                            borderRadius: "3px",
                            cursor: "pointer",
                            backgroundColor: "rgba(40, 145, 250,1)",
                            color: "white",
                            ":hover": {
                                backgroundColor: "black",
                                color: "white",
                            },
                            transition: "0.1s ease",
                            fontWeight: "500",
                        }}
                    >
                        <Typography variant="p">Take a free demo</Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    flexBasis: "55%",
                    height: "100%",
                    padding: "0px 30px",
                    display: "flex",
                    justifyContent: { sm: "center", md: "end" },
                    alignItems: "center",
                    background: "white",
                  
                    
                }}
            >
                <img src={HomeHero} style={{
                      zIndex:handleZindex?1000:1
                }} alt="" width={"450px"} height={"450px"} />
            </Box>
        </Box>
    );
}

export default Hero;
