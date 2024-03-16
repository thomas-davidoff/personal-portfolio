import React from 'react';
import {
  useTheme, Box, Typography, Stack, Divider, Button,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from '@emotion/styled';
import { LanguageSharp } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function PaperCard({
  title = 'Project',
  technologies = [],
  links = [],
  description = 'Example descriptioon',
  isFeatured = false,
}) {
  const { palette } = useTheme();

  const AccordionItem = styled(Accordion)(() => ({
    backgroundColor: palette.background.default,
    color: palette.text.secondary,
    border: '1px solid transparent',
    transition: 'all .3s ease-out',
    padding: 10,
    borderRadius: '8px', // Apply uniform border radius
    '&:before': {
      display: 'none', // Optionally remove the default border line inside the accordion
    },
    '&:first-of-type': {
      borderRadius: '8px',
    },
    '&:last-of-type': {
      borderRadius: '8px',
    },
    '&:hover': {
      border: `1px solid ${palette.primary.light}`,
      bgcolor: palette.background.paper,
      scale: '1.02',
    },
    '&.Mui-expanded': {
      '&.MuiAccordion-root': { bgcolor: palette.background.paper },
    },
  }));

  const giveIcon = (iconKey) => {
    const iconMap = {
      github: <GitHubIcon />,
      website: <LanguageSharp />,
    };

    if (iconKey in iconMap) {
      return iconMap[iconKey];
    }
    return null;
  };

  return (
    <AccordionItem
      disableGutters
      sx={{
        '&:hover': {
          border: `1px solid ${palette.primary.light}`,
          bgcolor: palette.background.paper,
        },
        '&.Mui-expanded': {
          '&.MuiAccordion-root': { bgcolor: palette.background.paper },
        },
        width: '100%',
        mb: 2,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Box paddingRight="10px" marginRight="5px" flexGrow={1}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {isFeatured && <StarBorderIcon sx={{ mr: 1, color: palette.secondary.main }} />}
            <Typography variant="h4" color="primary" gutterBottom>
              {title}
            </Typography>
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            divider={<Divider variant="middle" orientation="vertical" flexItem />}
            spacing={1}
            height="auto"
            flexWrap="wrap"
            mb={1}
          >
            {technologies.map((tech) => (
              <Typography variant="h6" color={palette.text.secondary} key={`${tech}_text`}>
                {tech}
              </Typography>
            ))}
          </Stack>
          <Stack direction="row" spacing={1} marginRight={1}>
            {links.map((mappedObj) => (
              <Button
                size="small"
                startIcon={giveIcon(mappedObj.type)}
                target="_blank"
                href={mappedObj.destination}
                key={`${title}_${mappedObj.label}_button`}
                color="secondary"
                variant="outlined"
              >
                <Typography
                  variant="h6"
                  key={`${title}_${mappedObj.label}_text`}
                  textTransform="lowercase"
                >
                  {mappedObj.label}
                </Typography>
              </Button>
            ))}
          </Stack>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            whiteSpace: 'pre-line',
            verticalAlign: 'bottom',
          }}
        >
          {description}
        </Typography>
      </AccordionDetails>
    </AccordionItem>
  );
}

export default PaperCard;
