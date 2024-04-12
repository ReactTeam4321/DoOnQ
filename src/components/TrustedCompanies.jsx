import { Box, Typography } from "@mui/material";
import React from "react";
import image1 from "../assets/IBM.webp";
import image10 from "../assets/REDIS.png";
import image11 from "../assets/Deloitte.jpg";
import image12 from "../assets/ford.jpg";
import image2 from "../assets/MSSQL.jpg";
import image3 from "../assets/Oracle.png";
import image4 from "../assets/microsoft.webp";
import image5 from "../assets/amazon.png";
import image6 from "../assets/MangoDB.webp";
import image7 from "../assets/Google cloud.png";
import image8 from "../assets/Azure.png";
import image9 from "../assets/MySQL.png";

function TrustedCompanies() {
    const imageList = [
        {
            img: image1,
        },
        {
            img: image2,
        },
        {
            img: image3,
        },
        {
            img: image4,
        },
        {
            img: image5,
        },
        {
            img: image6,
        },
        {
            img: image7,
        },
        {
            img: image8,
        },
        {
            img: image9,
        },
        {
            img: image10,
        },
        {
            img: image11,
        },
        {
            img: image12,
        },
    ];
    return (
        <Box sx={{ width: "85%", margin: "4rem auto" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    height: "100px",
                    width: "100%",
                }}
            >
                <Typography
                    variant="p"
                    sx={{
                        textAlign: "center",
                        fontWeight: "400",
                        fontSize: { xs: "1rem", sm: "2rem" },
                        fontFamily: "DM Sans ",
                    }}
                >
                    Trusted by
                </Typography>
                <Typography
                    variant="span"
                    sx={{
                        fontWeight: "600",
                        textAlign: "center",
                        fontSize: { xs: "1rem", sm: "2rem" },
                        px: 1,
                        fontFamily: "DM Sans ",
                    }}
                >
                    55,000+ ERP Softwares
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "grid",
                    placeItems: "center",
                    gridTemplateColumns: {
                        xs: " repeat(2, minmax(0, 1fr))",
                        sm: " repeat(3, minmax(0, 1fr))",
                        md: " repeat(6, minmax(0, 1fr))",
                    },
                }}
            >
                {imageList.map((item, index) => (
                    <img
                        src={item.img}
                        key={index}
                        width={130}
                        height={130}
                        style={{ objectFit: "contain" }}
                        alt={`Image ${index + 1}`}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default TrustedCompanies;
