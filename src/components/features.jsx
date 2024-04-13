import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography } from "@mui/material";
import image2 from "..//assets/INVENTORY.webp";
import image3 from "..//assets/Report.jpg";
import image5 from "..//assets/ONLINEORDERING.jpg";
import image1 from "../assets/POS.jpg";
import image4 from "../assets/acc.jpg";

export default function Features() {
    const featureContent = [
        {
            id: 1,
            image: image1,
            title: "A ERP billing software",
            titleStart: "A ERP ",
            titleEnd: "software",
            highlight: "billing",
            description:
                "Take orders, punch bills and generate KOT. Accept payments either by splitting bill or merging tables. Easily apply discounts and coupons. All of this, and more, is easy and quick with ERP billing.",
            exploreFeatures: "Explore all features",
        },
        {
            id: 2,
            image: image2,
            title: "ERP Inventory management made easier",
            titleStart: "ERP",
            titleEnd: "management made easier",
            highlight: "Inventory",
            description:
                "Do inventory management the smart way. Put your inventory on the item-wise auto deduction, get low-stock alters, day-end inventory reports and more with Inventory.",
            exploreFeatures: "Explore all features",
        },
        {
            id: 3,
            image: image3,
            title: "Get real-time ERP Reports",
            titleStart: "Get real-time ERP",
            titleEnd: "",
            highlight: "Reports",
            description:
                "Automate your ERP reports and go paper free! Let ERP POS automatically track your business activities and provide you error free reports on your ERP day-end sales, online orders, staff actions, inventory consumption, and various 80+ essential business reports",
            exploreFeatures: "Explore all features",
        },
        {
            id: 4,
            image: image4,
            title: "Company's business transactions financial accounts",
            titleStart: "Company's business transactions",
            titleEnd: "accounts.",
            highlight: "financial",
            description:
            "In financial management and accounting, ERP systems provide a unified platform for recording, processing, and reporting financial transactions and data.",
            exploreFeatures: "Explore all features",
        },
        {
            id: 5,
            image: image5,
            title: "A single Online Ordering System to manage all your orders",
            titleStart: "A single",
            titleEnd: "to manage all your orders",
            highlight: "Online Ordering System",
            description:
                "Accept online orders, manage online menu, mark food ready, collect payment and check revenue without shuffling between multiple screens.",
            exploreFeatures: "Explore all features",
        },

    ];

    return (
        <>
            <Box
                sx={{
                    padding: {
                        xs: "10px",
                        md: "10px 100px",
                        
                    },
                    margin:"0 1.5rem",
                    display:"flex",
                    flexDirection:"column",
                    gap:"10px"
                }}
            >
                <Typography
                    variant="span"
                    sx={{ color: "#C52031", fontWeight: 700, padding: "0px" }}
                >
                    SMART ERP FEATURES
                </Typography>
                <Typography
                    variant="h1"
                    sx={{
                        color: "#1F2937",
                        fontSize:{
                           xs:"30px",
                           md:"40px"
                        } ,
                        fontWeight: 600,
                        fontFamily: "Poppins",
                        //padding: "10px",
                        
                    }}
                >
                    A ERP business solution made for all your needs
                </Typography>
                <Typography
                    variant="p"
                    sx={{
                        color: "#6B7280",
                        fontSize: "18px",
                        fontWeight: 400,
                        //padding: "10px",
                        fontFamily: "DM Sans",
                        
                    }}
                >
                    A quick and easy-to-use ERP billing software that
                    makes managing high order volumes butter smooth
                </Typography>
            </Box>
            {
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        margin: "0 1.5rem"
                    }}
                >
                    {featureContent.map((content, index) => (
                        <Box
                            key={index}
                            sx={{
                                my: 2,
                                display: "flex",
                                padding: {
                                    xs: "10px 0px",
                                    md: "10px 100px",
                                },
                                flexWrap: {
                                    xs: "wrap",
                                    md: "nowrap",
                                },
                                flexDirection:{
                                    xs:"column",
                                    md:"row"
                                },
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "2rem"
                            }}
                        >
                            <Box
                                sx={{
                                    display:"flex",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    width: {
                                        xs:"100%",
                                        md:"50%"
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "min(100%,600px)",
                                        // height: "400px",
                                    }}
                                >
                                    <img
                                        src={content.image}
                                        style={{
                                            width: "inherit",
                                            height: "80%",
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "start",
                                    width: {
                                        xs:"100%",
                                        md:"50%"
                                    },
                                    flexWrap: {
                                        xs: "wrap",
                                        md: "nowrap",
                                    },
                                    flexDirection: "column",
                                    // paddingInline: {
                                    //     xs: "20px",
                                    //     sm: "80px",
                                    //     md: "20px",
                                    // },
                                }}
                            >
                                <Box sx={{
                                    margin:"1 1rem",
                                    display:"flex",
                                    flexDirection:"column",
                                    
                                }} >
                                    <Typography
                                        variant="span"
                                        sx={{
                                            color: "#1F2937",
                                            fontSize: {
                                                xs:"30px",
                                                md:"40px"
                                            },
                                            fontFamily: "DM Sans",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {content.titleStart}{" "}
                                        <Typography
                                            variant="span"
                                            sx={{
                                                color: "#C52031",
                                                // fontSize: "28px",
                                                fontFamily: "DM Sans",
                                            }}
                                        >
                                            {content.highlight}
                                        </Typography>{" "}
                                        {content.titleEnd}
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="p"
                                    sx={{
                                        fontSize: "18px",
                                        color: "#6B7280",
                                        fontFamily: "DM Sans",
                                        padding: "10px 0px",
                                    }}
                                >
                                    {content.description}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                                 color: "#1F2937",
                                                 cursor:"pointer",
                                        ":hover": {
                                            color: "#C52031",
                                        },
                                        gap: "5px"
                                    }}
                                >
                                    <Typography
                                        variant="p"
                                        sx={{
                                            fontSize: "18px",
                                   
                                            fontFamily: "DM Sans",
                                            fontWeight: 500,
                                            padding: "20px 0px",
                                           
                                        }}
                                    >
                                        {content.exploreFeatures}
                                    </Typography>
                                    <ArrowForwardIcon
                                        sx={{ paddingTop: "2px",
                                              
                                        
                                    }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            }
        </>
    );
}
