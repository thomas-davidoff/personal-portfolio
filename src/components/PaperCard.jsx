import React from "react";
import {
  useTheme,
  Box,
  Paper,
  Chip,
  Typography,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "@emotion/styled";
import { LanguageSharp } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PaperCard = ({ title = "Project", technologies = [], links = [], description = 'Example descriptioon' }) => {
  const theme = useTheme();

  const AccordionItem = styled(Accordion)(() => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.background.default
        : theme.palette.background.default,
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    border: "1px solid transparent",
    transition: "all .2s ease-in-out"
  }));

  const giveIcon = (iconKey) => {
    const iconMap = {
      github: <GitHubIcon />,
      website: <LanguageSharp />,
    };

    if (iconKey in iconMap) {
      return iconMap[iconKey];
    } else {
      return null;
    }
  };

  return (
    <AccordionItem
      sx={{
        "&:hover": {
          border: `1px solid ${theme.palette.primary.light}`,
          bgcolor: theme.palette.background.paper,
          scale: "1.02",
        },
      }}
    >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <Box
              borderRight={`1px solid ${theme.palette.grey[300]}`}
              paddingRight="10px"
              marginRight="5px"
              flexGrow={1}
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
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            whiteSpace: 'pre-line',
            verticalAlign: 'bottom'
          }}>
            {description}
          </Typography>
        </AccordionDetails>


      {/* Header Box */}
    </AccordionItem>
  );
};

export default PaperCard;
