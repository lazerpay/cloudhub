import React from 'react';
import { Box, Typography, Stack, Container, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { GET_HOMEPAGE_DATA, GetHomepageData } from '../graphql/homepage';
import CheckIcon from './icons/CheckIcon';
import PlayIcon from './icons/PlayIcon';
import LoadingSpinner from './LoadingSpinner';
import { fallbackShareData, staticImagePaths, errorMessages } from '../data/fallbackData';

const FeatureContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: theme.palette.background.default
}));

const FeatureGrid = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(10),
    justifyContent: 'space-evenly'
  }
}));

const FeatureContent = styled(Stack)(({ theme }) => ({
  flex: 1,
  maxWidth: '547px'
}));

const FeatureImage = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
}));

const FeatureChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: '14px',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  width: 'fit-content'
}));


const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: '54px',
  fontWeight: 600,
  lineHeight: '63px',
  letterSpacing: '-1.5px',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    fontSize: '42px',
    lineHeight: '50px'
  }
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '30px',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4)
}));

const FeatureBadges = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(3.5),
  marginBottom: theme.spacing(3)
}));

const FeatureBadge = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1)
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: theme.palette.grey[200],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const BadgeText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  color: theme.palette.text.primary
}));

const DemoButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  padding: 0,
  justifyContent: 'flex-start',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline'
  }
}));

const PlayIconContainer = styled(Box)(({ theme }) => ({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(1)
}));

const MockupImage = styled('img')({
  width: '100%',
  maxWidth: '650px',
  height: 'auto',
  borderRadius: '24px'
});

const ShareFeature: React.FC = () => {
  const { loading, error, data } = useQuery<GetHomepageData>(GET_HOMEPAGE_DATA);

  if (loading || error) {
    return (
      <FeatureContainer>
        <LoadingSpinner 
          variant="section" 
          error={error} 
          errorMessage={errorMessages.homepageSections}
        />
      </FeatureContainer>
    );
  }

  const shareData = data?.homepage?.sharesection;
  const content = shareData || fallbackShareData;

  return (
    <FeatureContainer>
      <Container maxWidth="xl">
        <FeatureGrid spacing={8}>
          <FeatureContent>
            <FeatureChip label={content.tagtext} />
            
            <FeatureTitle>
              {content.title}
            </FeatureTitle>
            
            <FeatureDescription>
              {content.description}
            </FeatureDescription>
            
            <FeatureBadges>
              <FeatureBadge>
                <IconContainer>
                  <CheckIcon width={9} height={7} color="#282828" />
                </IconContainer>
                <BadgeText>Coded</BadgeText>
              </FeatureBadge>
              <FeatureBadge>
                <IconContainer>
                  <CheckIcon width={9} height={7} color="#282828" />
                </IconContainer>
                <BadgeText>100% Secure</BadgeText>
              </FeatureBadge>
            </FeatureBadges>
            
            <DemoButton>
              <PlayIconContainer>
                <PlayIcon width={7} height={9} color="#ffffff" />
              </PlayIconContainer>
              {content.ctatext}
            </DemoButton>
          </FeatureContent>
          
          <FeatureImage>
            <MockupImage 
              src={shareData?.image?.url || staticImagePaths.codeEditorMockup}
              alt={shareData?.image?.alt || "Code editor interface showing API testing"}
            />
          </FeatureImage>
        </FeatureGrid>
      </Container>
    </FeatureContainer>
  );
};

export default ShareFeature;