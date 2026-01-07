import { Box, Typography } from "@mui/material";
import { HeroContainerProps } from "../../types";

const HeroContainer = ({ children, title }: HeroContainerProps) => (
  <Box
    sx={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 3,
      minWidth: "240px",
      p: 2,
      borderRadius: "16px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      bgcolor: "#ffffff",
    }}
  >
    <Typography variant="h5">
      {title}
    </Typography>
    {children}
  </Box>
);

export default HeroContainer;
