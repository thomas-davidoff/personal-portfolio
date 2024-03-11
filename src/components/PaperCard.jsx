import React from 'react';
import {
  useTheme, Box, Chip, Typography, Stack, Divider, IconButton, Button,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from '@emotion/styled';
import { LanguageSharp, ManOutlined } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function PaperCard({
  title = 'Project',
  technologies = [],
  links = [],
  description = 'Example descriptioon',
}) {
  const { palette } = useTheme();

  const AccordionItem = styled(Accordion)(() => ({
    backgroundColor: palette.background.default,
    color: palette.text.secondary,
    border: '1px solid transparent',
    transition: 'all .2s ease-in-out',
    padding: 10,
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
      sx={{
        '&:hover': {
          border: `1px solid ${palette.primary.light}`,
          bgcolor: palette.background.paper,
          scale: '1.02',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Box paddingRight="10px" marginRight="5px" flexGrow={1}>
          {/* Title/subtitle */}
          <Typography variant="h4" color="primary" gutterBottom>
            {title}
          </Typography>
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
              // <Chip
              //   // color={palette.secondary.main}
              //   key={`${title}_chip_link_to_${mappedObj.label}`}
              //   label={mappedObj.label}
              //   size="small"
              //   component="a"
              //   href={mappedObj.destination}
              //   target="_blank"
              //   clickable
              //   icon={giveIcon(mappedObj.type)}
              // />
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

      {/* Header Box */}
    </AccordionItem>
  );
}

export default PaperCard;
