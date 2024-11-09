import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FormEvent, useState } from "react";
import { RoutesPage } from "../types/RoutesPage";

const FormPoll: React.FC = () => {
  const [pollName, setPollName] = useState("");
  const [pollOptionNameOne, setOptionNameOne] = useState("");
  const [pollOptionNameTwo, setOptionNameTwo] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const textValidation = (text: string) => {
    const textEvaluation = /[A-Za-z0-9!?-]{8,12}/;
    return textEvaluation.test(text);
  };

  const clearError = () => {
    setError({ error: false, message: "" });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!textValidation(pollName) && !textValidation(pollOptionNameOne)&& !textValidation(pollOptionNameTwo)) {
      setError({
        error: true,
        message: "Fill in the inputs correctly",
      });
      return;
    }

    clearError();

    //   try {
    //     const response = await fetch("http://localhost:5133/api/User", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         name,
    //         lastName: lastname,
    //         age,
    //       }),
    //     });

    //     if (!response.ok) {
    //       alert("Bien");
    //     } else {
    //       setError({ error: true, message: "HUBO UN ERROR" });
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     setError({ error: true, message: "HUBO UN ERROR" });
    //   }

    setLoading(true);

    setLoading(false);
    setError({
      error: false,
      message: "",
    });
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      autoComplete="on"
      style={{ margin: "15px", padding: "20px" }}
      boxShadow={3}
      borderRadius={3}
    >
      <Grid
        container
        spacing={2}
      >
        <Grid
          size={{ xs: 12 }}
          textAlign="center"
        >
          <Typography variant="h4">New Poll</Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            label="Poll Name"
            id="poll_name"
            type="text"
            fullWidth
            required
            error={error.error}
            helperText={error.message}
            onChange={(e) => setPollName(e.target.value)}
            value={pollName}
          />
        </Grid>
        <Grid
          size={{ xs: 12 }}
          textAlign="center"
        >
          <Typography variant="h4">Options: </Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
            <Typography variant="h4">1 </Typography>
          <TextField
            label="Option Name"
            id="lastName"
            type="text"
            fullWidth
            required
            error={error.error}
            helperText={error.message}
            onChange={(e) => setOptionNameOne(e.target.value)}
            value={pollOptionNameOne}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
            <Typography variant="h4">2 </Typography>
          <TextField
            label="Option Name"
            id="lastName"
            type="text"
            fullWidth
            required
            error={error.error}
            helperText={error.message}
            onChange={(e) => setOptionNameTwo(e.target.value)}
            value={pollOptionNameTwo}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 2 }}>
        <a href={RoutesPage.MAIN_PAGE}>
          <Button
            fullWidth
            sx={{ mt: 2 }}
            disabled={loading}
          >
            Cancel
            {loading && <CircularProgress size={12} />}
          </Button>
          </a>
        </Grid>
        <Grid size={{ xs: 12, md: 2 }}>
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 2 }}
            disabled={loading}
          >
            Save
            {loading && <CircularProgress size={12} />}
          </Button>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default FormPoll;
