import React from 'react';
import { Box, Typography, Stack, Container, Card, CardContent, CircularProgress, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { GET_HOMEPAGE_SECTIONS, GetHomepageSectionsData } from '../graphql/queries';
import MentionsIcon from './icons/MentionsIcon';
import PollsIcon from './icons/PollsIcon';
import ResolveIcon from './icons/ResolveIcon';

const CTAContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(315deg, #FB432C 0%, #FF591E 100%)',
  padding: theme.spacing(8, 0),
  color: theme.palette.common.white
}));

const CTAContent = styled(Stack)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8)
}));

const CTATitle = styled(Typography)(({ theme }) => ({
  fontSize: '54px',
  fontWeight: 600,
  lineHeight: '63px',
  letterSpacing: '-1.5px',
  color: theme.palette.common.white,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    fontSize: '42px',
    lineHeight: '50px'
  }
}));

const CTASubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  color: theme.palette.common.white,
  opacity: 0.9
}));

const NotificationCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#222222',
  borderRadius: '20px',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  marginBottom: theme.spacing(4),
  color: theme.palette.common.white
}));

const NotificationHeader = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(3),
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
}));

const NotificationBody = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: '1px solid rgba(0, 0, 0, 0.08)',
  backgroundColor: 'rgba(0, 0, 0, 0.02)'
}));

const FeatureCards = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  flex: 1,
  backgroundColor: '#111111',
  borderRadius: '24px',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  color: theme.palette.common.white
}));

const FeatureCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
  '&:last-child': {
    paddingBottom: theme.spacing(3)
  }
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(1)
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  color: '#737373'
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '400px'
}));

const ErrorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '400px',
  padding: theme.spacing(4)
}));

const NotificationImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '20px'
});

const OrangeCTASection: React.FC = () => {
  const { loading, error, data } = useQuery<GetHomepageSectionsData>(GET_HOMEPAGE_SECTIONS);

  if (loading) {
    return (
      <CTAContainer>
        <LoadingContainer>
          <CircularProgress size={60} sx={{ color: 'white' }} />
        </LoadingContainer>
      </CTAContainer>
    );
  }

  if (error) {
    return (
      <CTAContainer>
        <ErrorContainer>
          <Alert severity="error" sx={{ maxWidth: 600 }}>
            Failed to load feedback dashboard content. Please try again later.
          </Alert>
        </ErrorContainer>
      </CTAContainer>
    );
  }

  const dashboardData = data?.homepage?.feedbackdashboardsection;
  
  // Fallback to static content if no data
  const fallbackData = {
    toptext: "Best time here",
    title: "Better feedback at the right time.",
    feedbackdashboardmentionscard: {
      title: "Mentions",
      description: "Mention anyone on your team to include them in a post."
    },
    feedbackdashboardpollscard: {
      title: "Polls", 
      description: "Get a quick gut check from the team on design options."
    },
    feedbackdashboardcommentscard: {
      title: "Resolve comments",
      description: "Mark comments as resolved to keep the conversation focused."
    }
  };

  const content = dashboardData || fallbackData;

  return (
    <CTAContainer>
      <Container maxWidth="lg">
        <CTAContent>
          <CTASubtitle>{content.toptext}</CTASubtitle>
          <CTATitle>{content.title}</CTATitle>
        </CTAContent>

        {dashboardData?.image?.url ? (
          <Box sx={{ marginBottom: 4 }}>
            <NotificationImage 
              src={dashboardData.image.url}
              alt={dashboardData.image.alt || "Feedback dashboard notification"}
            />
          </Box>
        ) : (
          <NotificationCard>
            <NotificationHeader>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    width: 35,
                    height: 38,
                    background: 'linear-gradient(315deg, #FB432C 0%, #FF591E 100%)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                />
                <Stack>
                  <Typography sx={{ fontSize: '21.86px', fontWeight: 500, color: 'white' }}>
                    Cloudhub
                  </Typography>
                  <Typography sx={{ fontSize: '19.43px', fontWeight: 400, color: '#737373' }}>
                    2m ago in Brand
                  </Typography>
                </Stack>
              </Stack>
              <Typography
                sx={{
                  fontSize: '18.21px',
                  fontWeight: 500,
                  color: 'white',
                  backgroundColor: '#FB432C',
                  padding: '8px 16px',
                  borderRadius: '8px'
                }}
              >
                View post
              </Typography>
            </NotificationHeader>
            
            <NotificationBody>
              <Typography sx={{ fontSize: '19.43px', fontWeight: 400, lineHeight: '29.14px', color: 'white' }}>
                3 people are looking for feedback this week
              </Typography>
            </NotificationBody>
          </NotificationCard>
        )}

        <FeatureCards>
          <FeatureCard>
            <FeatureCardContent>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <MentionsIcon width={40} height={40} color="#ffffff" />
                <FeatureTitle>{content.feedbackdashboardmentionscard.title}</FeatureTitle>
              </Stack>
              <FeatureDescription>
                {content.feedbackdashboardmentionscard.description}
              </FeatureDescription>
            </FeatureCardContent>
          </FeatureCard>

          <FeatureCard>
            <FeatureCardContent>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <PollsIcon width={32} height={32} color="#ffffff" />
                <FeatureTitle>{content.feedbackdashboardpollscard.title}</FeatureTitle>
              </Stack>
              <FeatureDescription>
                {content.feedbackdashboardpollscard.description}
              </FeatureDescription>
            </FeatureCardContent>
          </FeatureCard>

          <FeatureCard>
            <FeatureCardContent>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <ResolveIcon width={32} height={32} color="#ffffff" />
                <FeatureTitle>{content.feedbackdashboardcommentscard.title}</FeatureTitle>
              </Stack>
              <FeatureDescription>
                {content.feedbackdashboardcommentscard.description}
              </FeatureDescription>
            </FeatureCardContent>
          </FeatureCard>
        </FeatureCards>
      </Container>
    </CTAContainer>
  );
};

export default OrangeCTASection;