import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
const SelectDropDownOption = ({ option, img }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgba(40, 145, 250,0.0)",
                "&:hover": {
                    backgroundColor: "rgba(40, 145, 250,0.1)",
                    color: "rgba(40, 145, 250,1)",
                },
                margin: "5px",
                padding: "1.5rem 0.8rem",
                height: "25px",
                borderRadius: "6px",
                fontFamily: "Poppins",
                cursor: "pointer",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Box sx={{ display: "flex", gap: "15px" }}>
                {img && <img src={img} width={22} />}

                <Typography
                    sx={{
                        fontSize: "14px",
                        fontFamily: "Poppins",
                        fontWeight: "500",
                    }}
                >
                    {option}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "block",
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered
                        ? "translate(3%, 0%)"
                        : "translate(-50%, 0%)",
                    transition: "all 0.15s ease-in",
                }}
            >
                <ArrowRightAltIcon sx={{ fontSize: "30px", color: "black" }} />
            </Box>
        </Box>
    );
};


export default SelectDropDownOption