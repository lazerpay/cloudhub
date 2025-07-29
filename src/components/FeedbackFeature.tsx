import React from 'react';
import { Box, Typography, Stack, Container, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { GET_HOMEPAGE_DATA, GetHomepageData } from '../graphql/homepage';
import PlayIcon2 from './icons/PlayIcon2';
import LoadingSpinner from './LoadingSpinner';
import { fallbackFeedbackData, staticImagePaths, errorMessages } from '../data/fallbackData';

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
  maxWidth: '547px',
  order: { xs: 1, md: 2 }
}));

const FeatureImage = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  order: { xs: 2, md: 1 }
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
  color: theme.palette.common.black,
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
  color: '#6e6e6e',
  marginBottom: theme.spacing(4)
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

const FeedbackFeature: React.FC = () => {
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

  const feedbackData = data?.homepage?.feedbacksection;
  const content = feedbackData || fallbackFeedbackData;

  return (
    <FeatureContainer>
      <Container maxWidth="xl">
        <FeatureGrid spacing={8}>
          <FeatureImage>
            <MockupImage 
              src={feedbackData?.image?.url || "/images/feedback-interface.svg"}
              alt={feedbackData?.image?.alt || "Feedback interface showing team member requests"}
            />
          </FeatureImage>
          
          <FeatureContent>
            <FeatureChip label={content.tagtext} />
            
            <FeatureTitle>
              {content.title}
            </FeatureTitle>
            
            <FeatureDescription>
              {content.description}
            </FeatureDescription>
            
            <DemoButton>
              <PlayIconContainer>
                <PlayIcon2 width={7} height={9} color="#ffffff" />
              </PlayIconContainer>
              {content.ctatext}
            </DemoButton>
          </FeatureContent>
        </FeatureGrid>
      </Container>
    </FeatureContainer>
  );
};

export default FeedbackFeature;