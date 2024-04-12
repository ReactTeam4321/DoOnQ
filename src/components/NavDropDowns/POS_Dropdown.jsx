import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const SelectDropDownOption = ({ option, img, onClickHandler }) => {
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
            onClick={onClickHandler}
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

function POS_Dropdown({ name, options, widthPercentage }) {
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
                padding: "0.2rem 0rem 0.2rem 1.2rem",
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
                    {name}
                </Typography>

                <Box
                    sx={{
                        padding: 0,
                        margin: 0,
                        marginTop: "5px",
                        transform: isDropDownClicked
                            ? "translate(-50%, -20%) rotate(-180deg)"
                            : "translate(-50%, 0%) rotate(0deg)",
                        transition: "transform 0.2s ease-in-out",
                    }}
                >
                    <ArrowDropDownIcon
                        className="dropDown"
                        sx={{
                            fontSize: "20px",
                            fontWeight: "10px",
                            transition: "all ease 0.2s",
                        }}
                    />
                </Box>
            </Box>
            {isDropDownClicked && (
                <Box
                    sx={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        width: widthPercentage || "200%",
                        boxShadow: "0 1px 10px rgba(0, 0, 0, 0.1)",
                        borderRadius: "3px",
                        backgroundColor: "white",
                        zIndex: "10",
                    }}
                >
                    <Box sx={{ padding: "2px " }}>
                        {options.map((option) => (
                            <SelectDropDownOption
                                key={option.title}
                                option={option.title}
                                img={option.img}
                                onClickHandler={() =>
                                    handleCompanySelect(option)
                                }
                            />
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    );
}

export default POS_Dropdown;
