import { styled } from '@mui/material/styles';
import { Box, Typography, Stack, Card } from '@mui/material';

export const ArchiveContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: theme.palette.background.default,
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.text.primary,
  textAlign: 'center',
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    fontSize: '42px',
    lineHeight: '50px',
  },
}));

export const ArchiveGrid = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: theme.spacing(4),
  },
}));

export const ArchiveCard = styled(Card)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.grey[50],
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: theme.shape.borderRadius + 'px',
  boxShadow: 'none',
  marginTop: '0 !important',
}));

export const CardHeader = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
}));

export const CardSubtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
}));

export const ChartContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 3, 3, 3),
  display: 'flex',
  justifyContent: 'center',
}));

export const ChartImage = styled('img')({
  width: '100%',
  maxWidth: '572px',
  height: 'auto',
});