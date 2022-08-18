import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import { stations } from "../../sharedType/tripsType";
import JourneyPlace from "./JourneyPlace";
type tripPathProps = {
  stations: stations;
};
const TripPath = ({ stations }: tripPathProps) => {
  const [activeStep, setActiveStep] = React.useState<number>(
    stations[0].journey_id.length
  );
  const changeShowenPlaceHandler = (index: number) => {
    if (activeStep === stations[0].journey_id.length) setActiveStep(index);
    else setActiveStep(stations[0].journey_id.length);
  };
  return (
    <Stepper
      sx={{
        "& .MuiStepConnector-line": {
          borderLeft: " 2px dashed #2e05d3",
        },
      }}
      activeStep={activeStep}
      nonLinear
      orientation="vertical"
    >
      {stations[0].journey_places.map((place, index) => (
        <Step key={place.id} onClick={() => changeShowenPlaceHandler(index)}>
          <StepLabel
            sx={{
              p: "8px 6px",
              "& .MuiSvgIcon-root.Mui-active": {
                outline: "4px solid var(--golden-color)",
                color: " #eeedf700",
                borderRadius: "50%",
                width: 15,
                height: 15,
              },
              "& .MuiSvgIcon-root": {
                outline: "4px solid var(--primary-color)",
                color: " #eeedf700",
                borderRadius: "50%",
                width: 15,
                height: 15,
              },
            }}
          >
            {place.place.name}
          </StepLabel>
          <StepContent sx={{ borderLeft: " 2px dashed #2e05d3" }}>
            <Typography>
              <JourneyPlace
                description={place.place.description}
                media={place.place.media}
              />
            </Typography>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};

export default TripPath;
