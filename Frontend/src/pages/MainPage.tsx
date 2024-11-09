import Container from "@mui/material/Container";
import React from "react";
import { Typography } from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import { RoutesPage } from "../types/RoutesPage";

const MainPage: React.FC = () => {
  return (
    <Container sx={{ maxWidth: "90%" }}>
      <Typography variant="h6">Poll List</Typography>

      <Link
        className="link"
        to={RoutesPage.FORM_POLL}
      >
        <AddCircleOutlineIcon /> Add New
      </Link>
    </Container>
  );
};

export default MainPage;
