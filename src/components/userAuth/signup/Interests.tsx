import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
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
const interests = ["بحر", " مناطق سياحية", "مناطق جبلية", "مناطق أثرية"];
const Interests = ({ open, handelClose }: interestsProps) => {
  const [interestValue, setInterestValue] = React.useState<string[]>([]);
  const addValueHandeler = (value: string) => {
    setInterestValue((interestValue) => [value, ...interestValue]);
  };
  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { p: { lg: 3 } } }}
      open={open}
      onClose={handelClose}
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Brand />
      <DialogTitle id="alert-dialog-title">
        الرجاء اخيار اهماماتك الخاصة لتجربة أكثر راحة
      </DialogTitle>
      <DialogContent sx={{ direction: "ltr" }}>
        <Grid
          container
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
                addValueHandeler={() => addValueHandeler(i)}
              />
            );
          })}
        </Grid>
      </DialogContent>
      <DialogTitle id="alert-dialog-title">
        الرجاء اخيار المدن المهتم بها
      </DialogTitle>
      <DialogContent sx={{ direction: "ltr" }}>
        <Grid
          container
          spacing={1}
          justifyContent="space-evenly"
          alignItems={"center"}
        ></Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained">إعادة تعيين</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Interests;
