import React from 'react';
import { Box, Stack, Container } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_HOMEPAGE_DATA, GetHomepageData } from '../graphql/homepage';
import PlayIcon2 from './icons/PlayIcon2';
import LoadingSpinner from './LoadingSpinner';
import { fallbackFeedbackData, staticImagePaths, errorMessages } from '../data/fallbackData';
import {
  FeatureContainer,
  FeatureGrid,
  FeatureContent,
  FeatureImage,
  FeatureChip,
  FeatureTitle,
  FeatureDescription,
  DemoButton,
  PlayIconContainer,
  MockupImage,
} from './styles/FeedbackFeature.styles';

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