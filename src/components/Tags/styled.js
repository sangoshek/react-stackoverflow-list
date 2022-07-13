import { Stack, Box } from '@mui/material';
import { styled } from '@mui/system';

const KeywordTag = styled(Box)(({ selected })=>({
  border: '1px solid #fff',
  borderRadius: '15px 15px',
  padding: '0.4rem 1rem',
  margin: '1rem 0.4rem',
  color: selected ? `#999` : `#fff`,
  backgroundColor: selected ? `#fff` : `none`,
  cursor: `pointer`
}))

export { KeywordTag }