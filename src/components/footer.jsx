import { Box, Button, Typography } from "@mui/material";
import React from "react";
export default function Footer() {
    const data = {
        pos: {
            option1: "Billing",
            option2: "Inventory",
            option3: "Reporting",
            option4: "Online ordering",
            option5: "CRM",
            option6: "Menu",
        },
        Addons: {
            option1: "Marketplace",
            option2: "Payroll",
            option3: "Suppliers Hub",
            option4: "Marketing Hub",
            option5: "Integrations",
        },
        outletTypes: [
            "Retail",
            "Wholesale",
            "Construction",
            "Hospitality",
            "Inventory",
            "Warehouse",
            "Food Management",
            "Accounts",
            "Reporting",
            "Environmental",
        ],
        resources: [
            "Pricing",
            "Blog",
            "Careers",
            "Support",
            "About Us",
            "Reseller",
            "Magazine",
        ],
        companyInfo: {
            name: "DOONQ SOFTWARE SOLUTIONS LLC",
            address: "Unit-2, Sundos Building, Al Nahda 2, Dubai, United Arab Emirates",
        },
    };
    const { pos, Addons, outletTypes, resources, companyInfo } = data;

    return (
        <>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        sm: "repeat(3, minmax(0, 1fr))",
                        md: "repeat(3, minmax(0, 1fr))",
                        lg: "repeat(5, minmax(0, 1fr))",
                    },
                    justifyContent: "start",
                    width: "100%",
                    placeItems: {
                        xs:"center",
                        md:"start"
                    },
                    padding: {
                        xs:"0",
                        md:"50px 100px "
                    },
                    height: "auto",
                    border: ".5px solid transparent",
                    borderTopColor: "#6B7280",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        flexDirection: "column",
                        gap: "20px",

                        margin: "20px",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "700",
                            fontSize: "18px",
                            color: "rgb(17 24 39 1)",
                        }}
                    >
                        {Object.keys(pos).length > 0 ? "POS" : null}
                    </Typography>
                    {Object.values(pos).map((option, index) => (
                        <Typography
                            key={index}
                            variant="p"
                            sx={{
                                color: "#6B7280",
                                fontWeight: "400",
                                fontSize: "16px",
                                textTransform: "capitalize",
                            }}
                        >
                            {option}
                        </Typography>
                    ))}
                    <Button
                        variant="contained"
                        sx={{
                            height: "33px",
                            fontSize: "13px",
                            whiteSpace: "nowrap",
                            textTransform: "unset",
                            backgroundColor: "#1F2937",
                        }}
                    >
                        Take a free demo
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        flexDirection: "column",
                        gap: "20px",

                        margin: "20px",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "700",
                            fontSize: "18px",
                            color: "rgb(17 24 39 1)",
                        }}
                    >
                        {Object.keys(Addons).length > 0 ? "Addons" : null}
                    </Typography>
                    {Object.values(Addons).map((option, index) => (
                        <Typography
                            key={index}
                            variant="p"
                            sx={{
                                color: "#6B7280",
                                fontWeight: "400",
                                fontSize: "16px",
                                textTransform: "capitalize",
                            }}
                        >
                            {option}
                        </Typography>
                    ))}
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        flexDirection: "column",
                        gap: "20px",

                        margin: "20px",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "700",
                            fontSize: "18px",
                            color: "rgb(17 24 39 1)",
                        }}
                    >
                        Outlet Types
                    </Typography>
                    {outletTypes.map((type, index) => (
                        <Typography
                            key={index}
                            variant="p"
                            sx={{
                                color: "#6B7280",
                                fontWeight: "400",
                                fontSize: "16px",
                                textTransform: "capitalize",
                            }}
                        >
                            {type}
                        </Typography>
                    ))}
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        flexDirection: "column",
                        gap: "20px",

                        margin: "20px",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "700",
                            fontSize: "18px",
                            color: "rgb(17 24 39 1)",
                        }}
                    >
                        Resources
                    </Typography>
                    {resources.map((resource, index) => (
                        <Typography
                            key={index}
                            variant="p"
                            sx={{
                                color: "#6B7280",
                                fontWeight: "400",
                                fontSize: "16px",
                                textTransform: "capitalize",
                            }}
                        >
                            {resource}
                        </Typography>
                    ))}
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        flexDirection: "column",
                        gap: "20px",

                        margin: "20px",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "700",
                            fontSize: "18px",
                            color: "rgb(17 24 39 1)",
                        }}
                    >
                        {companyInfo.name}
                    </Typography>

                    <Typography
                        variant="p"
                        sx={{
                            color: "#6B7280",
                            fontWeight: "400",
                            fontSize: "16px",
                            textTransform: "capitalize",
                        }}
                    >
                        {companyInfo.address}
                    </Typography>
                </Box>
            </Box>
            {/* <Box
                sx={{
                    padding: "100px 100px 20px 100px",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                }}
            >
                <Box sx={{ background: "white" }}>
                    <img src={DoOnQ} alt="logo" width={130} />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        marginLeft: "50px",
                        fontSize: "20px",
                        gap: "20px",
                        color: "rgb(17 24 39 1)",
                    }}
                >
                    <FaInstagram />
                    <FaLinkedin />
                    <FaYoutube />
                    <FaFacebook />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        marginLeft: "50px",
                        fontSize: "20px",
                        gap: "7px",
                        color: "#6B7280",
                    }}
                >
                    <CiMail />
                    <Typography
                        sx={{
                            color: "#6B7280",
                            fontWeight: "400",
                            fontSize: "17px",
                        }}
                        variant="p"
                    >
                        doonq@gmail.com
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        marginLeft: "50px",
                        fontSize: "25px",
                        gap: "7px",
                        color: "#6B7280",
                    }}
                >
                    <BiPhoneCall />
                    <Typography
                        sx={{
                            color: "#6B7280",
                            fontWeight: "400",
                            fontSize: "17px",
                            textTransform: "capitalize",
                        }}
                        variant="p"
                    >
                        +971 52700136
                    </Typography>
                </Box>
            </Box> */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Typography
                    sx={{
                        color: "#6B7280",
                        fontWeight: "400",
                        fontSize: "16px",
                        textAlign: "center",
                        width: "100%",
                        padding: "10px 10px 30px 10px",
                        textTransform: "capitalize",
                    }}
                    variant="p"
                >
                    Copyrights © 2024 - DOONQ SOFTWARE SOLUTIONS LLC, DUBAI, UAE.
                </Typography>
            </Box>
        </>
    );
}
