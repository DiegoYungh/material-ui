import * as React from 'react';
import Head from 'docs/src/modules/components/Head';
import { ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import Link from 'docs/src/modules/components/Link';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import MuiStatistics from 'docs/src/components/home/MuiStatistics';
import GradientText from 'docs/src/components/typography/GradientText';
import { brandingDarkTheme } from 'docs/src/modules/brandingTheme';
import IconImage from 'docs/src/components/icon/IconImage';
import BrandingProvider from 'docs/src/BrandingProvider';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetail from '@mui/material/AccordionDetails';
import ROUTES from 'docs/src/route';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';

interface RoleProps {
  description: string;
  title: string;
  url?: string;
}

function Role(props: RoleProps) {
  if (props.url) {
    return (
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <span>
          <Typography
            component="span"
            variant="body1"
            color="text.primary"
            fontWeight={700}
            sx={{ display: 'block', my: 1 }}
          >
            {props.title}
          </Typography>
          <Typography
            component="span"
            color="text.secondary"
            sx={{ display: 'block', mb: 1, maxWidth: 700 }}
          >
            {props.description}
          </Typography>
        </span>
        <Button
          component="a"
          // @ts-expect-error
          variant="link"
          size="small"
          href={props.url}
          endIcon={<KeyboardArrowRightRounded />}
        >
          More about this role
        </Button>
      </Box>
    );
  }

  return (
    <div>
      <Typography variant="body1" color="text.primary" fontWeight={700} sx={{ my: 1 }}>
        {props.title}
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 1, maxWidth: 700 }}>
        {props.description}
      </Typography>
    </div>
  );
}

const Accordion = styled(MuiAccordion)(({ theme }) => ({
  padding: theme.spacing(2),
  transition: theme.transitions.create('box-shadow'),
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    boxShadow: '1px 1px 20px 0 rgb(90 105 120 / 20%)',
  },
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(2),
  },
  '&:before': {
    display: 'none',
  },
  '&:after': {
    display: 'none',
  },
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(-2),
  minHeight: 'auto',
  '&.Mui-expanded': {
    minHeight: 'auto',
  },
  '& .MuiAccordionSummary-content': {
    margin: 0,
    paddingRight: theme.spacing(2),
    '&.Mui-expanded': {
      margin: 0,
    },
  },
}));

const AccordionDetails = styled(MuiAccordionDetail)(({ theme }) => ({
  marginTop: theme.spacing(1),
  padding: 0,
}));

const faqData = [
  {
    summary: 'Are there application deadlines?',
    detail: 'No. If a job is visible on our careers page, then you can still apply.',
  },
  {
    summary: 'Does MUI do whiteboarding during interviews?',
    detail:
      'No. We ask applicants to complete challenges that are close to their future day-to-day contributions.',
  },
  {
    summary: 'Does MUI offer contract job opportunities?',
    detail:
      'Yes. People outside of France will be hired as full-time contractors. (Benefits may vary.)',
  },
];

const openRolesData = [
  // {
  //   // 1
  //   title: 'Product',
  //   roles: [
  //     {
  //       title: 'Product Designer',
  //       description:
  //         'Design is critical to the success of our mission. We are looking for skills that complement our Lead Designer. You will empower our audience that seeks to build outstanding-looking UIs with new tools.',
  //       url: '/company/11-product-designer/',
  //     },
  //   ],
  // },
  {
    // 5
    title: 'Developer Experience',
    roles: [
      {
        title: 'Developer Advocate',
        description:
          'You will educate users on the latest features, craft high-quality examples, and demos, engage with the community, write documentation, advocate for creating faster and more appealing UIs, and help to promote/market the advanced components.',
        url: '/company/50-developer-advocate/',
      },
      {
        title: 'Developer Experience Engineer',
        description: 'You will focus on providing experiences that delight developers using MUI.',
        url: '/company/51-developer-experience-engineer/',
      },
      {
        title: 'Support Engineer - X',
        description:
          "You will provide support to users for the advanced components team. You will directly impact developers' satisfaction and success.",
        url: '/company/50-support-engineer/',
      },
    ],
  },
  {
    // 2
    title: 'Engineering',
    roles: [
      {
        title: 'React Engineer - X',
        description:
          'You will strengthen the advanced components team, build new ambitious complex features, work on strategic problems, and help grow the adoption.',
        url: '/company/20-react-engineer/',
      },
      {
        title: 'Hustler Engineer - Store',
        description: 'You will lead the technical and operational development of MUI Store.',
        url: '/company/22-hustler-engineer/',
      },
    ],
  },
  {
    // 3
    title: 'People',
    roles: [
      {
        title: 'People Operations Manager',
        description:
          'You will build the HR function from the ground up at a high-growth tech company.',
        url: '/company/30-people-operations-manager/',
      },
    ],
  },
  {
    // 4
    title: 'Support',
    roles: [
      {
        title: 'Support Agent - Store',
        description:
          "You will provide support for the customers of MUI Store. You will directly impact customers' satisfaction and success.",
        url: '/company/41-support-agent/',
      },
    ],
  },
];

const futureRolesData = [
  {
    // 1
    title: 'Product',
    roles: [
      {
        title: 'Product Designer',
        description:
          'Design is critical to the success of our mission. We will be looking for skills that complement our Lead Designer. You will empower our community to build outstanding-looking UIs with innovative tools.',
        url: undefined,
      },
    ],
  },
  {
    title: 'Engineering',
    roles: [
      {
        title: 'Full-stack Engineer',
        description:
          'You will strengthen the team working on a new low-code product. We are looking for an experienced and ambitious full-stack engineer that is ready to work in an entrepreneurial environment. You are a manager of one, you are curious, enjoy taking risks, and learning.',
        url: undefined,
      },
    ],
  },
];

function renderFAQItem(index: number, defaultExpanded?: boolean) {
  const faq = faqData[index];
  return (
    <Accordion variant="outlined" defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={<KeyboardArrowDownRounded sx={{ fontSize: 20, color: 'primary.main' }} />}
      >
        <Typography variant="body2" fontWeight="bold" component="h3">
          {faq.summary}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          component="div"
          variant="body2"
          color="text.secondary"
          sx={{ '& ul': { pl: 2 } }}
        >
          {faq.detail}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

function CareersContent() {
  return (
    <React.Fragment>
      {/* Hero */}
      <Container>
        <Box
          sx={{
            height: '40vh',
            minHeight: 300,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: 600,
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="primary.600" fontWeight="bold">
            Careers
          </Typography>
          <Typography component="h1" variant="h2" sx={{ my: 1 }}>
            Build the <GradientText>next generation</GradientText> of tools for UI development
          </Typography>
          <Typography
            color="text.secondary"
            textAlign="center"
            sx={{
              maxWidth: { md: 500 },
              minHeight: 48, // a hack to reduce CLS (layout shift)
            }}
          >
            Our mission is to empower anyone to build UIs, faster. We&apos;re reducing the entry
            barrier, making design skills accessible.
          </Typography>
        </Box>
      </Container>
      {/* Our ultimate goal */}
      <Box
        sx={{ bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'primaryDark.900' : 'grey.50') }}
      >
        <Container sx={{ py: { xs: 4, md: 8 } }}>
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ my: 1 }}>
                Our ultimate goal
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 1, maxWidth: 450 }}>
                We aim high trying to design the most effective and efficient tool for building UIs,
                for developers and designers. MUI started back in 2014, to unify React and Material
                Design. Since then, we&apos;ve become a community of over 2M developers from every
                corner of the world.
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                We plan on doing all that cultivating our values:
              </Typography>
              {[
                'Customer obsessed. We put our customers front & center.',
                'Transparency. Most of our work is public.',
                'Freedom. We work from anywhere in the world.',
                'Autonomy. We want to create a safe, high-trust team.',
                "Excellence. We're aiming high, and we know it.",
              ].map((text) => (
                <Box key={text} sx={{ display: 'flex', alignItems: 'flex-start', mt: 1 }}>
                  <IconImage name="yes" />
                  <Typography variant="body2" color="text.primary" fontWeight={700} sx={{ ml: 1 }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Grid>
            <MuiStatistics />
          </Grid>
        </Container>
      </Box>
      {/* Perks & benefits */}
      <div>
        <Container sx={{ py: { xs: 4, md: 8 } }}>
          <Grid container alignItems="center" spacing={{ xs: 2, sm: 4 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ my: 1 }} id="perks-amp-benefits">
                {'Perks & benefits'}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                To help you go above and beyond with us, we provide:
              </Typography>
              {[
                ['Remote work:', 'Our entire company is distributed.'],
                [
                  'Retreats:',
                  'We meet up once or twice a year for a short week of meetings, events, and fun!',
                ],
                [
                  'Equipment:',
                  'MUI will let you choose new hardware of your choice (up to $2,500 USD).',
                ],
                ['Time off:', 'We provide five weeks of paid time off.'],
              ].map((textArray) => (
                <Box key={textArray[0]} sx={{ display: 'flex', alignItems: 'flex-start', mt: 1 }}>
                  <IconImage name="yes" />
                  <Typography variant="body2" color="text.primary" sx={{ ml: 1 }}>
                    <span style={{ fontWeight: 700 }}>{`${textArray[0]}  `}</span>
                    {textArray[1]}
                  </Typography>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                component={Link}
                href={ROUTES.handbook}
                noLinkStyle
                variant="outlined"
                sx={{ p: 2 }}
              >
                <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                  Handbook
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  See how we run the company and the way we work.
                </Typography>
                <Typography
                  color={(theme) => (theme.palette.mode === 'dark' ? 'primary.400' : 'primary.600')}
                  variant="body2"
                  fontWeight="bold"
                >
                  Learn more{' '}
                  <KeyboardArrowRightRounded fontSize="small" sx={{ verticalAlign: 'middle' }} />
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                component={Link}
                href={ROUTES.blog}
                noLinkStyle
                variant="outlined"
                sx={{ p: 2 }}
              >
                <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                  Blog
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Check behind the scenes and news from the company.
                </Typography>
                <Typography
                  color={(theme) => (theme.palette.mode === 'dark' ? 'primary.400' : 'primary.600')}
                  variant="body2"
                  fontWeight="bold"
                >
                  Learn more{' '}
                  <KeyboardArrowRightRounded fontSize="small" sx={{ verticalAlign: 'middle' }} />
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* Open roles */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <div>
          <Typography variant="h2" sx={{ my: 1 }} id="open-roles">
            {`Open roles (${openRolesData.reduce((acc, item) => acc + item.roles.length, 0)})`}
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2, maxWidth: 500 }}>
            The company is bootstrapped (up to now). It was incorporated in mid-2019 and yet growing
            fast (x2-3 YoY). We doubled the team in 2020 (6), accelerated in 2021 (16), and are on
            track to triple it in 2022 (40). We&apos;re looking for help keep growing in the
            following areas:
          </Typography>
        </div>
        <Divider
          sx={{
            my: { xs: 2, sm: 4 },
            borderColor: (theme) =>
              theme.palette.mode === 'dark' ? 'primaryDark.600' : 'grey.100',
          }}
        />
        <Stack
          spacing={2}
          divider={
            <Divider
              sx={{
                my: { xs: 1, sm: 2 },
                borderColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'primaryDark.600' : 'grey.100',
              }}
            />
          }
        >
          {openRolesData.map((category) => {
            const roles = category.roles;
            return (
              <React.Fragment key={category.title}>
                <Typography component="h3" variant="h5" fontWeight="extraBold">
                  {category.title}
                </Typography>
                {roles.length > 0 ? (
                  roles.map((role) => (
                    <Role
                      key={role.title}
                      title={role.title}
                      description={role.description}
                      url={role.url}
                    />
                  ))
                ) : (
                  <Typography color="text.secondary">No open roles.</Typography>
                )}
              </React.Fragment>
            );
          })}
        </Stack>
      </Container>
      {/* Future roles */}
      <ThemeProvider theme={brandingDarkTheme}>
        <Box sx={{ bgcolor: 'primaryDark.700' }}>
          <Container sx={{ py: { xs: 4, md: 8 } }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <Typography variant="h2" sx={{ my: 1 }} id="future-roles">
                  Future roles
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2, maxWidth: 450 }}>
                  In the future, we will need to fill the following positions. If you don&apos;t
                  want to wait for the positions to be opened, you can jump ahead and submit an{' '}
                  <Link href="https://airtable.com/shr9JdBSiE6noobhc">open application.</Link>
                </Typography>
              </div>
            </Box>
            <Divider sx={{ my: { xs: 2, sm: 4 }, borderColor: 'primaryDark.600' }} />
            <Stack
              spacing={2}
              divider={<Divider sx={{ my: { xs: 1, sm: 2 }, borderColor: 'primaryDark.600' }} />}
            >
              {futureRolesData.map((category) => {
                const roles = category.roles;
                return (
                  <React.Fragment key={category.title}>
                    <Typography component="h3" variant="h5" fontWeight="extraBold">
                      {category.title}
                    </Typography>
                    {roles.length > 0 ? (
                      roles.map((role) => (
                        <Role
                          key={role.title}
                          title={role.title}
                          description={role.description}
                          url={role.url}
                        />
                      ))
                    ) : (
                      <Typography color="text.secondary">No plans yet.</Typography>
                    )}
                  </React.Fragment>
                );
              })}
            </Stack>
          </Container>
        </Box>
      </ThemeProvider>
      {/* Frequently asked questions */}
      <Container sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Typography variant="h2" sx={{ mb: { xs: 2, sm: 4 } }}>
          Frequently asked questions
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {renderFAQItem(0, true)}
            {renderFAQItem(1)}
          </Grid>
          <Grid item xs={12} md={6}>
            {renderFAQItem(2)}
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                borderStyle: 'dashed',
                borderColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'primaryDark.400' : 'grey.300',
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'primaryDark.800' : 'white'),
              }}
            >
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="body2" color="text.primary" fontWeight="bold">
                  Got any questions unanswered or need more help?
                </Typography>
              </Box>
              <Typography variant="body2" color="text.primary" sx={{ my: 1, textAlign: 'left' }}>
                We&apos;re to help you with any other question you have about our hiring process.
              </Typography>
              <Link href="mailto:job@mui.com" variant="body2">
                Contact us <KeyboardArrowRightRounded fontSize="small" sx={{ mt: '1px' }} />
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Careers() {
  return (
    <BrandingProvider>
      <Head
        title="Careers - MUI"
        description="Interested in joining MUI? Learn about the roles we're hiring for."
      />
      <AppHeaderBanner />
      <AppHeader />
      <main>
        <CareersContent />
      </main>
      <Divider />
      <AppFooter />
    </BrandingProvider>
  );
}
