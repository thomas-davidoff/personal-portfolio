import React from "react";
import {
  useTheme,
  Box,
  styled,
  Paper,
  Button,
  Chip,
  Typography,
  Stack
} from "@mui/material";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const PaperCard = ({
  title = "Project",
  subtitle = "This is an example project"
}) => {
  const theme = useTheme();
  const Item = styled(Paper)(() => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "#1A2027"
        : theme.palette.background.default,
    ...theme.typography.body2,
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary,
    border: "1px solid transparent",
  }));

  return (
    <Item
      sx={{
        "&:hover": {
          color: "gray",
          border: `1px solid ${theme.palette.secondary.main}`,
          bgcolor: theme.palette.background.paper
        },
      }}
    >
      {/* Header Box */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Box
        // border="solid 1px red"
        >
          {/* Title/subtitle */}
          <Typography variant="h5" color="primary" fontWeight='bold'>
            {title}
          </Typography>
          <Typography variant="h6" color="secondary" gutterBottom>
            {subtitle}
          </Typography>
          {/* Chips */}
          <Stack direction="row" spacing={1} marginRight={1}>
            <Chip label="Python" size="small" />
            <Chip label="Javascript" size="small" />
          </Stack>
        </Box>
        <Box
          //   border="solid 1px blue"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100px", width: "100px" }}
        >
          <Button endIcon={<ArrowForwardRoundedIcon />}>More Info</Button>
        </Box>
      </Stack>
    </Item>
  );
};

export default PaperCard;