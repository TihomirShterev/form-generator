import { Card, Typography } from "@mui/material";
import { ContainerCardProps } from "../../types/types";

const ContainerCard = ({ children, title }: ContainerCardProps) => (
  <Card
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
  </Card>
);

export default ContainerCard;
