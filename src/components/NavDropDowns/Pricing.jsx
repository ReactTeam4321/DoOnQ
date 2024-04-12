import { Box, Typography } from "@mui/material";
import { useState } from "react";

function Pricing() {
    const options = [
        { option: "Billing", img: "" },
        { option: "Inventory", img: "" },
        { option: "Online Ordering", img: "" },
        { option: "Reporting", img: "" },
        { option: "Menu", img: "" },
        { option: "CRM", img: "" },
    ];
    const [isDropDownClicked, setIsDropDownClicked] = useState(false);
    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                background: "white",
                ":hover": {
                    background: "rgba(40, 145, 250, 0.05)",
                },
                justifyContent: "center",
                padding: "0.5rem 1.2rem",
                borderRadius: "4px",
            }}
            onMouseEnter={() => setIsDropDownClicked(true)}
            onMouseLeave={() => setIsDropDownClicked(false)}
        >
            <Box
                onClick={() => setIsDropDownClicked(!isDropDownClicked)}
                sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    cursor: "pointer",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "16px",
                        fontFamily: "DM Sans",
                        fontWeight: "500",
                    }}
                >
                    {"Pricing"}
                </Typography>
            </Box>
        </Box>
    );
}

export default Pricing;
