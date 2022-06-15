import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Brand from "../../../sharedComponents/Brand";
import InterestedButoon from "../../../sharedComponents/InterestedButoon";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});
type interestsProps = {
  open: boolean;
  handelClose: () => void;
};
const governorates = ["حماة", "حمص", "حلب", "دمشق", "الاذقية", "طرطوس"];
const interests = ["بحر", " مناطق سياحية", "مناطق جبلية", "مناطق أثرية"];

const Interests = ({ open, handelClose }: interestsProps) => {
  const navigate = useNavigate();
  const [interestValue, setInterestValue] = React.useState<string[]>([]);
  const selectValueHandler = (value: string) => {
    let temp: string[] = [];
    if (interestValue.includes(value)) {
      temp = interestValue.filter((i) => i !== value);
      setInterestValue([...temp]);
    } else setInterestValue((interestValue) => [value, ...interestValue]);
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { p: { xs: 2, lg: 3 } } }}
      open={open}
      onClose={handelClose}
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Stack justifyContent="space-evenly" alignItems={"center"}>
        <Brand />
      </Stack>
      <DialogTitle id="alert-dialog-title">
        الرجاء اخيار اهماماتك الخاصة لتجربة أكثر راحة
      </DialogTitle>
      <DialogContent sx={{ direction: "ltr" }}>
        <Stack
          direction={"row"}
          spacing={1}
          justifyContent="space-evenly"
          alignItems={"center"}
        >
          {interests.map((i, index) => {
            return (
              <InterestedButoon
                key={i}
                selected={Boolean(interestValue.find((_i) => _i === i))}
                value={i}
                selectValueHandler={() => selectValueHandler(i)}
              />
            );
          })}
        </Stack>
      </DialogContent>
      <DialogTitle id="alert-dialog-title">
        الرجاء اخيار المدن المهتم بها
      </DialogTitle>
      <DialogContent sx={{ direction: "ltr" }}>
        <Stack
          direction={"row"}
          spacing={1}
          justifyContent="space-evenly"
          alignItems={"center"}
        >
          {governorates.map((governorate) => {
            return (
              <InterestedButoon
                key={governorate}
                selected={Boolean(
                  interestValue.find(
                    (_governorate) => _governorate === governorate
                  )
                )}
                value={governorate}
                selectValueHandler={() => selectValueHandler(governorate)}
              />
            );
          })}
        </Stack>
      </DialogContent>

      <Button
        variant="contained"
        sx={{ mx: "5%" }}
        onClick={() => navigate("/")}
      >
        متابعة
      </Button>
    </Dialog>
  );
};

export default Interests;
