import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

type appProps = {
  title: string,
  buttonColor: any,
  name: string,
};

const PlayAgain = (props: appProps) => {
  const playAgain = () => {
    window.location.reload();
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" color={props.buttonColor}>
        {props.name}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{props.title}</DialogHeader>
        <DialogBody>What say you try again??</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>NO</span>
          </Button>
          <Button variant="gradient" color="cyan" onClick={playAgain}>
            <span>Play Again</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
export default PlayAgain;
