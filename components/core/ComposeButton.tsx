import { Button, styled } from "@mui/material";

const ComposeButton = styled(Button)({
  backgroundColor: "#FFFFFF",
  boxShadow:
    "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.15)",
  borderRadius: "40px",
  textTransform: "none",
  fontSize: 16,
  border: "1px solid",
  lineHeight: 1.5,
  width: "126px",
  height: "48px",
  padding: "12px 20px 12px 12px",
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default ComposeButton;
