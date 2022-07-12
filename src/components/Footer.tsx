import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Brand from "../sharedComponents/Brand";
import NavigationIcon from "../sharedComponents/NavigationIcon";
import NavigationIconLarg from "../sharedComponents/NavigationIconLarg";
import useViewSize from "../customHooks/useViewSize";
import Link from "../sharedComponents/LinkComponent";

const Footer = () => {
  const viewSize = useViewSize({});
  return (
    <Grid
      container
      sx={{
        backgroundColor: "var(--dark-gray-color)",
        color: "var(--white-color)",
        mt: 5,
      }}
    >
      <Grid
        className="Footer"
        container
        spacing={3}
        item
        sx={{
          p: 3,
        }}
        xs={12}
      >
        <Grid item container spacing={2} xs={12} sm={4}>
          <Grid item>
            <Stack spacing={1} sx={{ ml: 1 }}>
              <Brand
                brandColor="var(--golden-color)"
                circleColor="var(--primary-color)"
              />
              <Typography>
                منصة تقوم بعرض الأماكن السياحية و الخدمات السياحية في سورية
                وتنظيم وإقامة الرحلات السياحية
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          item
          container
          spacing={3}
          alignItems={{ xs: "center", sm: "start" }}
          justifyContent={{ xs: "center", sm: "space-evenly", lg: "center" }}
          direction="row"
          xs={12}
          sm={8}
          lg={6}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={11}
            order={{ xs: 2, md: 1, lg: 2 }}
          >
            <Link to="" text="حول المنصة" />
            <Link to={""} text="اتصل بنا" />
            <Link to={""} text="الاسئلة الشائعة" />
            <Link to={""} text="الشروط و الاحكام" />
          </Grid>
          <Grid
            item
            xs={8.5}
            sm={4}
            md={5}
            lg={10}
            order={{ xs: 1, md: 2, lg: 1 }}
          >
            {viewSize ? <NavigationIconLarg /> : <NavigationIcon />}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        className="CopyRight"
        container
        item
        justifyContent={"center"}
        alignItems={"center"}
        xs={12}
        sx={{
          borderWidth: "1px 0px 0px",
          borderStyle: "solid",
          borderColor: "var(--golden-color)",
          backgroundColor: "rgba(255,255,255,.6)",
        }}
      >
        <Typography sx={{ P: 0.2 }}>
          كل الحقوق محفوظة لدى Tripper2020@
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
