import React, { useState } from "react";
import {
  useTheme,
  Box,
  Paper,
  Button,
  Chip,
  Typography,
  Stack
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "@emotion/styled";
import { LanguageSharp } from "@mui/icons-material";

const PaperCard = ({ title = "Project", technologies = [], links = [] }) => {
  const theme = useTheme();
  const Item = styled(Paper)(() => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "#1A2027"
        : theme.palette.background.default,
    ...theme.typography.body2,
    padding: theme.spacing(3),
    // textAlign: "center",
    color: theme.palette.text.secondary,
    border: "1px solid transparent",
    transition: 'all .2s ease-in-out'
  }));


  const giveIcon = (iconKey) => {
    const iconMap = {
        'github': <GitHubIcon />,
        'website': <LanguageSharp />
    }

    if (iconKey in iconMap) {
        return iconMap[iconKey]
    }
    else {
        return null
    }
  }


  return (
    <Item
      sx={{
        "&:hover": {
          color: "gray",
          border: `1px solid ${theme.palette.secondary.main}`,
          bgcolor: theme.palette.background.paper,
          scale: '1.02'
        },
      }}
    >
      {/* Header Box */}
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Box
          borderRight={`1px solid ${theme.palette.grey[300]}`}
          paddingRight="10px"
          marginRight="5px"
          width='400px'
        >
          {/* Title/subtitle */}
          <Typography variant="h5" color="primary" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="h6" color="secondary" gutterBottom>
            {technologies.join(" | ")}
          </Typography>
          {/* Chips */}
          <Stack direction="row" spacing={1} marginRight={1}>
            {links.map((mappedObj) => (
              <Chip
                key={`${title}_chip_link_to_${mappedObj.label}`}
                label={mappedObj.label}
                size="small"
                component="a"
                href={mappedObj.destination}
                target="_blank"
                clickable
                icon={giveIcon(mappedObj.type)}
              />
            ))}
          </Stack>
        </Box>
        <Box
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
