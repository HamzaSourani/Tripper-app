import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import useFetchGovernorates from "../../customHooks/useFetchGovernorates";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import SearchInput from "../../sharedComponents/SearchInput";
import GovernorateCard from "../../sharedComponents/GovernorateCard";
import OutlineGoBack from "../../sharedComponents/OutlineGoBack";
import Loading from "../../sharedComponents/Loading";
import isLoading from "../../sharedFunction/isLoading";
const Governorates = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [fetchGovernoratesStatus, governorates] = useFetchGovernorates();
  return (
    <>
      {isLoading(fetchGovernoratesStatus) && <Loading />}
      <Outlet />
      <Container>
        <Grid
          container
          justifyContent={{ xs: "center", sm: "flex-start" }}
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={11}>
            <OutlineGoBack title="المحافظات السورية" />
          </Grid>
          <Grid item xs={11} md={9}>
            <SearchInput />
          </Grid>

          {governorates.map((governorate) => {
            return (
              <Grid key={governorate.id} item xs={11} sm={6} md={4}>
                <GovernorateCard
                  name={governorate.name}
                  img={governorate.media[0].original_url}
                  onClick={() =>
                    navigate(`${pathname}/governorate/${governorate.id}`)
                  }
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Governorates;
