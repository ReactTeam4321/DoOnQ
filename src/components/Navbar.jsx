import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import billing from "../assets/billing.svg";
import crm from "../assets/crm.svg";
import DoOnQ from "../assets/LOGO2.png";
import inventory from "../assets/inventorylogo.png";
import onlineOrdering from "../assets/onlineOrdering.svg";
import reporting from "../assets/reporting.svg";
import POS_Dropdown from "./NavDropDowns/POS_Dropdown";
import Pricing from "./NavDropDowns/Pricing";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import SelectDropDownOption from "./options";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import QuickNavigator from "./QuickNavigator";
import mobileapps from "../assets/mobile-app.png";
import payroll from "../assets/payroll.png"

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const posOptions = [
        { title: "Point Of Sales", img: onlineOrdering },
        { title: "Inventory", img: inventory },
        { title: "Financial Accounts", img: billing },
        { title: "Dashboard", img: reporting },
        { title: "CRM", img: crm },
        { title: "HR Payroll",img: payroll},
        { title: "Mobile Apps",img: mobileapps}
    ];
    const AddOnsOptions = [
        { title: "Marketplace", img: "" },
        { title: "Marketting hub", img: "" },
        { title: "Supply Chain Management", img: "" },
        { title: "Suppliers hub", img: "" },
        { title: "Integration", img: "" },
        { title: "Customer Support", img: "" },
        { title: "Security Services", img: "" },
        { title: "Upgrades & Migrations", img: "" },
    ];
    const resourcesOptions = [
        { title: "Blogs", img: "" },
        { title: "Youtube", img: "" },
        { title: "Webinars", img: "" },
        { title: "About us", img: "" },
        { title: "Contact us", img: "" },
        { title: "Careers", img: "" },
        { title: "Support", img: "" },
    ];

    return (
        <Box
            sx={{
                backgroundColor: "white",
                padding: "0rem 0 1.2rem 0",
                top:"0",
                boxShadow: "rgba(33, 35, 38, 0.3) 0px 10px 10px -10px",
                zIndex: "10",
                position:"fixed",
                width:"100%"
               
            }}
        >
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <QuickNavigator />
            </Box>
            
            <Box
                sx={{
                    width: "88%",
                    margin: "0 auto",
                    display: "flex",
                    fontWeight: "500",
                    gap: "2rem",
                }}
            >
                <Box
                    sx={{
                        //padding:"10px",
                        display: "flex",
                    }}
                >
                    <Box sx={{  objectFit:"cover", background: "inherit",marginTop:"10px",
                 }}>
                        <img src={DoOnQ} alt="logo" width="150px" height="70px" />
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "end", md: "space-between" },
                        flexBasis: "100%",
                    }}
                >
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            gap: "0.4rem",
                            color: "rgb(31 ,41, 55,)",
                        }}
                    >
                        <POS_Dropdown
                            options={posOptions}
                            name={"ERP"}
                            widthPercentage={"280%"}
                        />
                        <POS_Dropdown
                            options={AddOnsOptions}
                            name={"Features"}
                        />
                        {/* <POS_Dropdown
                            options={posOptions}
                            name={"Outlet types"}
                        /> */}
                        <Pricing />
                        <POS_Dropdown
                                options={resourcesOptions}
                                name={"Resources"}
                            />
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2rem",
                        }}
                    >
                        

                        <Box
                            sx={{
                                display: { xs: "none", sm: "flex" },
                                padding: "0.6rem 1.2rem",
                                border: "1px solid black",
                                borderRadius: "3px",
                                cursor: "pointer",
                                ":hover": {
                                    backgroundColor: "black",
                                    color: "white",
                                },
                                transition: "0.1s ease",
                                fontWeight: "500",
                            }}
                        >
                            <Typography variant="p">BOOK A DEMO</Typography>
                        </Box>
                        <Box sx={{ display: { xs: "block", md: "none" } }}>
                            <IconButton
                                onClick={handleClick}
                                style={{
                                    transition: "transform 0.3s ease-in-out",
                                    transform: open ? "rotate(90deg)" : "none",
                                }}
                            >
                                {open ? (
                                    <CloseIcon
                                        sx={{
                                            fontSize: "30px",
                                        }}
                                    />
                                ) : (
                                    <MenuIcon
                                        sx={{
                                            fontSize: "30px",
                                        }}
                                    />
                                )}
                            </IconButton>
                        </Box>
                    </Box>
                    {open && (
                        <Box
                            sx={{
                                display: { xs: "block", md: "none" },
                                position: "absolute",
                                top: "90%",
                                left: 0,
                                backgroundColor: "white",
                                width: "100%",
                                margin: "0 auto",
                                height: "100vh",
                                color: "black",
                                zIndex: 10,
                            }}
                        >
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    sx={{
                                        color: "#1F2937",
                                        fontSize: "16px",
                                        fontFamily: "DM Sans",
                                        padding: "8px 24px"
                                    }}
                                >
                                    POS
                                </AccordionSummary>
                                <AccordionDetails>
                                    {posOptions.map((option) => (
                                        <SelectDropDownOption
                                            key={option.title}
                                            option={option.title}
                                            img={option.img}
                                        />
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                    sx={{
                                        color: "#1f2937",
                                        fontSize: "16px",
                                        fontFamily: "DM Sans",
                                        padding: "8px 24px"
                                    }}
                                >
                                    Add-Ons
                                </AccordionSummary>
                                <AccordionDetails>
                                    {AddOnsOptions.map((option) => (
                                        <SelectDropDownOption
                                            key={option.title}
                                            option={option.title}
                                        />
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                    sx={{
                                        color: "#1F2937",
                                        fontSize: "16px",
                                        fontFamily: "DM Sans",
                                        padding: "8px 24px"
                                    }}
                                >
                                    Resources
                                </AccordionSummary>
                                <AccordionDetails>
                                    {resourcesOptions.map((option) => (
                                        <SelectDropDownOption
                                            key={option.title}
                                            option={option.title}
                                        />
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    aria-controls="panel4-content"
                                    id="panel4-header"
                                    onClick={handleClick}
                                    sx={{
                                        color: "#1F2937",
                                        fontSize: "16px",
                                        fontFamily: "DM Sans",
                                        padding: "8px 24px"
                                    }}
                                >
                                    Pricing
                                </AccordionSummary>
                            </Accordion>
                            <Box sx={{
                                margin: "0px 0px 16px",
                                padding: "20px 20px",
                            }}>
                                <Typography sx={{
                                    marginBottom: "20px",
                                    color: "#6B7280",
                                    fontSize: "18px",
                                    fontFamily: "DM Sans",
                                }}>
                                    Get in touch with our team to clarify your queries
                                </Typography>
                                <Button sx={{
                                    padding: "10px 20px",
                                    width: "fit-content",
                                    borderRadius: "3px",
                                    cursor: "pointer",
                                    backgroundColor: "#1F2937",
                                    color: "white",
                                    ":hover": {
                                        backgroundColor: "black",
                                        color: "white",
                                    },
                                    transition: "0.1s ease",
                                    fontWeight: "500",
                                }}
                                >
                                    <Typography variant="p">BOOK A FREE DEMO</Typography>
                                    <Box>
                                    </Box>
                                </Button>
                            </Box>
                        </Box>
                    )}
            </Box>
        </Box>
        </Box >
    );
}

export default Navbar;
