import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import './Avatar.css'
import { Button, Card, CardActionArea, CardContent, CardMedia, InputBase } from "@mui/material";
import styled from "@emotion/styled";





function ResponsiveAppBar() {
const pages = ["Paths", "Courses", "Premium", "For Business"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];


const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 
  const Search = styled("div")(({}) => ({
    backgroundColor: "#ffff",
    marginLeft: 580,
    marginRight:550,
    display: "flex",
    borderRadius: 5,
    padding:4,
    marginTop:20,
    Search: "none"
  }));
  const StyledInputBase = styled(InputBase)(({
      marginLeft: 20
  }));
 const array = [
   {
     id: 1,
     name: "CODE PICTRUE PROJECT1",
     text: "Manage your code",
     text1:"project",
     img: "./p2.webp",
   },
   {
     id: 2,
     name: "CODE PICTRUE PROJECT2",
     text: "Build quick and",
     text1: "beautiful WordPress sites",
     img: "./p3.webp",
   },
   {
     id: 3,
     name: "CODE PICTRUE PROJECT3",
     text: "set up your. NET",
     text1:"coding enviroment with",
     text2:"Visual Studio",
     text1:"",
     img: "./p3.webp",
   },
   {
     id: 4,
     name: "CODE PICTRUE PROJECT4",
     text: "Think like a computer:",
     text2:"Understanding the logic of",
     text3:"programming",
     img: "./p5.webp",
   },
     {id: 5, name: "CODE PICTRUE PROJECT5",
     text:"Understanding the",
     text1:"Web",
     img:"./p3.webp"
    },
 ];

  return (
    <>
      <Box>
        <AppBar style={{ background: "#fff" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h5"
                sx={{
                  ml: 8,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Aharoni",
                  fontWeight: 700,
                  color: "violet",
                  textDecoration: "none",
                  fontSize: 20,
                }}
              >
                OPENCLASSROOMS
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((text) => (
                  <Box
                    key={text}
                    sx={{ color: "black", ml: 3, display: "block", mb: 1 }}
                  >
                    {text}
                  </Box>
                ))}
              </Box>
              <SearchIcon sx={{ color: "#3a3b3d", mr: 3, mt: 0.5 }} />
              <Box sx={{ flexGrow: 0, mr: 8 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <AppBar sx={{ mt: 8, background: "#f7f3f2", padding: 1.5 }}>
          <Box sx={{ display: "flex", ml: 9 }}>
            <Typography sx={{ color: "#080707" }}>Home {">"}</Typography>
            <Typography sx={{ ml: 0.5, color: "gray" }}>Dashboard</Typography>
          </Box>
        </AppBar>
      </Box>
      <Box sx={{ mt: 20 }}>
        <Typography
          sx={{ color: "#ffffffff", fontSize: 40, textAlign: "center" }}
        >
          What do you want to learn today?
        </Typography>
        <Search>
          <StyledInputBase placeholder="Search…" />
        </Search>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          mt: 30,
        }}
      >
        <Typography
          sx={{ ml: 20, color: "black", fontWeight: 700 }}
          style={{ fontFamily: "Aharoni", paddingTop: 40 }}
        >
          Recently pulisshed Courses
        </Typography>
        <hr
          style={{
            width: 1270,
            marginTop: 5,
          }}
        />
        <Box display="flex" style={{marginLeft:35}}>
          {array.map((row) => (
            <Card sx={{ margin: 2 }} style={{ height: 338 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                  image={row.img}
                  alt="green iguana"
                />
                <Button
                  sx={{
                    backgroundColor: "#e6e5e3",
                    borderRadius: 5,
                    mt: -2,
                    ml: 0.5,
                    color: "violet",
                  }}
                >
                  {row.name}
                </Button>
                <CardContent>
                  <Typography variant="h6" color="black">
                    {row.text}
                  </Typography>
                  <Typography variant="h6" color="black">
                    {row.text1}
                  </Typography>
                  <Typography variant="h6" color="black">
                    {row.text2}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <br />
              <Box sx={{ backgroundColor: "#dbd7d7" }}>
                <hr />
                <Typography
                  variant="h6"
                  color="black"
                  sx={{ textAlign: "center" }}
                >
                  See Course
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}
export default ResponsiveAppBar;
