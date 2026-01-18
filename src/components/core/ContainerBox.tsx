import { Box, Typography } from "@mui/material";
import { ContainerBoxProps } from "../../types/types";

const ContainerBox = ({ children, title }: ContainerBoxProps) => (
  <Box
    sx={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      minWidth: "260px",
    }}
  >
    <Typography variant="h5">{title}</Typography>
    {children}
  </Box>
);

export default ContainerBox;
