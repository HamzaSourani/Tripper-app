import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Tabs from "./tabs/TabsComponent";
import Brand from "../../../sharedComponents/Brand";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <Box flexGrow={1} mb={5}>
      <AppBar
        sx={{ backgroundColor: "#fff", direction: "ltr" }}
        position="static"
      >
        <Toolbar>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Tabs />
            <Button
              LinkComponent={"a"}
              href="#downloadApp"
              variant={"contained"}
              sx={{ Py: 2, mx: 1 }}
            >
              حمل التطبيق
            </Button>
            <Button
              variant={"contained"}
              sx={{ Py: 2, mx: 1 }}
              onClick={() => navigate("/home")}
            >
              الذهاب إلى الموقع
            </Button>
          </Box>
          <Stack alignItems={"flex-end"} sx={{ flexGrow: 1 }}>
            <Brand
              brandColor="var(--primary-color)"
              circleColor="var(--golden-color)"
            />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
