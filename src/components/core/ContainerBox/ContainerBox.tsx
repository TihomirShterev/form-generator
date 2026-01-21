import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface ContainerBoxProps {
  title: string;
  children: ReactNode;
}

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
