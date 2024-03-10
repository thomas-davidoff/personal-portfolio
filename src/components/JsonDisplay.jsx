import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import noPhotoExplanation from '@/data/no_photo.json';

const CompactTypography = styled(Typography)({
  margin: 0,
  lineHeight: 1.2,
});

function RenderValue({ value, indent, isLast }) {
  if (typeof value === 'string') {
    return (
      <CompactTypography component="span">
        <CompactTypography component="span" sx={{ color: 'rgb(164, 124, 185)' }}>
          &quot;
          {value}
          &quot;
        </CompactTypography>
        {isLast ? '' : <CompactTypography component="span">,</CompactTypography>}
      </CompactTypography>
    );
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return (
      <CompactTypography component="span">
        <CompactTypography component="span" sx={{ color: 'rgb(229,98,117)' }}>
          {String(value)}
        </CompactTypography>
        {isLast ? '' : <CompactTypography component="span">,</CompactTypography>}
      </CompactTypography>
    );
  }
  if (typeof value === 'object' && value !== null) {
    return <RenderObj obj={value} indent={indent + 2} />;
  }
  return null;
}

function RenderObj({ obj, indent }) {
  return (
    <CompactTypography component="span">
      <CompactTypography component="span">&#123;</CompactTypography>
      {Object.entries(obj).map(([key, value], index, array) => (
        <Box key={key} sx={{ display: 'block', margin: 0 }}>
          <CompactTypography component="span" sx={{ color: 'rgb(145, 212, 197)' }}>
            {`${'\u00A0'.repeat(indent + 2)}`}
            &quot;
            {key}
            &quot;
          </CompactTypography>
          <CompactTypography component="span">:&nbsp;</CompactTypography>
          <RenderValue value={value} indent={indent} isLast={index === array.length - 1} />
        </Box>
      ))}
      <CompactTypography>
        {`${'\u00A0'.repeat(indent)}`}
        &#125;
        {indent !== 0 ? '\u002C' : ''}
      </CompactTypography>
    </CompactTypography>
  );
}

function JsonDisplay() {
  return (
    <Box
      sx={{
        backgroundColor: 'rgb(6,22,38)',
        color: 'rgb(211, 218, 230)',
        fontFamily: "'Consolas', 'Monaco', monospace",
        padding: 2,
        borderRadius: 1,
        overflowX: 'auto',
        whiteSpace: 'pre-wrap',
        margin: 'auto',
        width: '100%',
      }}
    >
      <RenderObj obj={noPhotoExplanation} indent={0} />
    </Box>
  );
}

export default JsonDisplay;
