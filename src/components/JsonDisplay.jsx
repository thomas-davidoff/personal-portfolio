import React from 'react';
import { Box, Typography } from '@mui/material';
import noPhotoExplanation from '@/data/no_photo.json';

function RenderValue({ value, indent, isLast }) {
  if (typeof value === 'string') {
    return (
      <Typography variant="code" component="span">
        <Typography variant="code" component="span" sx={{ color: 'rgb(164, 124, 185)' }}>
          &quot;
          {value}
          &quot;
        </Typography>
        {isLast ? (
          ''
        ) : (
          <Typography variant="code" component="span">
            ,
          </Typography>
        )}
      </Typography>
    );
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return (
      <Typography variant="code" component="span">
        <Typography variant="code" component="span" sx={{ color: 'rgb(229,98,117)' }}>
          {String(value)}
        </Typography>
        {isLast ? (
          ''
        ) : (
          <Typography variant="code" component="span">
            ,
          </Typography>
        )}
      </Typography>
    );
  }
  if (typeof value === 'object' && value !== null) {
    return <RenderObj obj={value} indent={indent + 2} />;
  }
  return null;
}

function RenderObj({ obj, indent }) {
  const curlyBraceColor = indent > 0 ? '#cb75d0' : '#f9d849';
  return (
    <Typography variant="code" component="span">
      <Typography variant="code" component="span" color={curlyBraceColor}>
        &#123;
      </Typography>
      {Object.entries(obj).map(([key, value], index, array) => (
        <Box key={key} sx={{ display: 'block', margin: 0 }}>
          <Typography variant="code" component="span" sx={{ color: 'rgb(145, 212, 197)' }}>
            {`${'\u00A0'.repeat(indent + 2)}`}
            &quot;
            {key}
            &quot;
          </Typography>
          <Typography variant="code" component="span">
            :&nbsp;
          </Typography>
          <RenderValue value={value} indent={indent} isLast={index === array.length - 1} />
        </Box>
      ))}
      <Typography color={curlyBraceColor}>
        {`${'\u00A0'.repeat(indent)}`}
        &#125;
        {indent !== 0 ? '\u002C' : ''}
      </Typography>
    </Typography>
  );
}

function JsonDisplay() {
  return (
    <Box
      sx={{
        backgroundColor: 'rgb(6,22,38)',
        color: 'rgb(211, 218, 230)',
        fontFamily: "'Consolas', 'Monaco', monospace",
        fontVariant: 'body2',
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
