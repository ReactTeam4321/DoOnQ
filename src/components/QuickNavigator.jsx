import { Box,Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function QuickNavigator() {
    return (
        <Box
            sx={{
                width: { xs: '100%', md: '85%' },
                minHeight: '40px',
                color: 'black',
                background: '#DFDFDF',
                clipPath: { md: 'polygon(0 0, 100% 0, 100% 100%, 10% 100%)' },
                display: 'flex',
                alignItems: 'center',
                paddingLeft: { sm: '0.6rem', md: '4rem', lg: '8rem' },
                justifyContent: 'space-between',
                flexWrap: { xs: 'wrap', md: 'nowrap' },
                padding: { xs: '0.5rem' },
            }}
        >
            <Box>
      
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexBasis: "80%",
                    gap: { xs: '1rem', md: '0.5rem', lg: '2rem' },
                    alignItems:"center",
                    cursor: 'pointer',
                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                }}
            >
                    <Typography sx={{
                        fontSize:"15px",
                        fontFamily:"DM Sans",
                        display:{
                            xs:"none",
                            md:"unset"
                        },
                          ':hover': {
                            color: 'skyblue',
                        },
     
          }}>
          Software Solutions Provider in Dubai, UAE
          </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center ',
                        gap: '5px',
                        ':hover': {
                            color: 'skyblue',
                        },
                        fontSize: { xs: '12px', md: '14px' },
                    }}
                >
                    <LocalPhoneIcon sx={{
                        fontWeight:'bolder'
                    }} /> +971-56700136
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center ',
                        gap: '5px',
                        ':hover': {
                            color: 'skyblue',
                        },
                        fontSize: { xs: '12px', md: '14px' },
                    }}
                >
                    {' '}
                    <MailOutlineIcon  sx={{
                        fontWeight:'bolder'
                    }} /> uae@doonq.com
                </Box>
            </Box>
            <Box
                sx={{
                    
                    display: 'flex',
                    gap: { sm: '0.5rem', lg: '1rem' },
                    cursor: 'pointer',
                    marginInlineStart: { xs: 'auto', md: '0' },
                }}
            >
                <FacebookIcon 
                    sx={{
                        color:'#1877F2',
                        ':hover': {
                            color: 'black',
                        },
                        fontSize: '21px',
                    }}
                />
                <InstagramIcon
                    sx={{
                        color:"#d62976",
                        ':hover': {
                            color: 'black',
                        },
                        fontSize: '21px',
                    }}
                />
                <TwitterIcon
                    sx={{
                        color:'#1877F2',
                        ':hover': {
                            color: 'black',
                        },
                        fontSize: '21px',
                    }}
                />
                <YouTubeIcon
                    sx={{
                        color:"#FF0000",
                        ':hover': {
                            color: 'black',
                        },
                        fontSize: '21px',
                    }}
                />
            </Box>
            <Box></Box>
        </Box>
    );
}

export default QuickNavigator;
