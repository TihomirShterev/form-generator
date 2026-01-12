import { Box, Typography } from "@mui/material";
import { HeroContainerProps } from "../../types";

const HeroContainer = ({ children, title }: HeroContainerProps) => (
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

export default HeroContainer;
