import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import pinFill from '@iconify/icons-eva/pin-fill';
import emailFill from '@iconify/icons-eva/email-fill';
import roundBusinessCenter from '@iconify/icons-ic/round-business-center';
// material
import { styled } from '@mui/material/styles';
import { Link, Card, Typography, CardHeader, Stack } from '@mui/material';

// ----------------------------------------------------------------------

const IconStyle = styled(Icon)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2)
}));

// ----------------------------------------------------------------------

AdminLocation.propTypes = {
  profile: PropTypes.object
};

export default function AdminLocation({ profile, packages }) {
  //   const agencyLocalStorage = JSON.parse(localStorage.getItem("agency"));
  const { companyCity, companyProvince } = profile;
  console.log('packages value: ', packages);
  return (
    <Card>
      {packages && (
        <>
          <CardHeader title="Yadgar Safar's Services" />

          <Stack spacing={2} sx={{ p: 3 }}>
            <Stack direction="row">
              <IconStyle icon="heroicons-solid:office-building" />
              <Typography variant="body2">
                We care about &nbsp;
                <Link component="span" variant="subtitle2" color="text.primary">
                  Our Customers
                </Link>
              </Typography>
            </Stack>

            <Stack direction="row">
              <IconStyle icon="heroicons-solid:office-building" />
              We provide travel packages &nbsp;
              <Link component="span" variant="subtitle2" color="text.primary">
                with resonable price
              </Link>
            </Stack>

            <Stack direction="row">
              <IconStyle icon="heroicons-solid:office-building" />
              <Typography variant="body2">
                Our trip packages are for &nbsp;
                <Link component="span" variant="subtitle2" color="text.primary">
                  Families, Friends, and Companies
                </Link>
              </Typography>
            </Stack>

            <Stack direction="row">
              <IconStyle icon={roundBusinessCenter} />
              <Typography variant="body2">
                <Link component="span" variant="subtitle2" color="text.primary">
                  Our companies values customer feedback.
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </>
      )
    
    }

      {!packages && (
        <>
          <CardHeader title="Our Location" />

          <Stack spacing={2} sx={{ p: 3 }}>
            <Typography variant="body2">Our Office Address Details are mentioned below</Typography>

            <Stack direction="row">
              <IconStyle icon={pinFill} />
              <Typography variant="body2">
                Office in &nbsp;
                <Link component="span" variant="subtitle2" color="text.primary">
                  Pakistan
                </Link>
              </Typography>
            </Stack>

            <Stack direction="row">
              <IconStyle icon={pinFill} />
              In Province &nbsp;
              <Link component="span" variant="subtitle2" color="text.primary">
                Sindh
              </Link>
            </Stack>

            <Stack direction="row">
              <IconStyle icon={pinFill} />
              <Typography variant="body2">
                In City &nbsp;
                <Link component="span" variant="subtitle2" color="text.primary">
                  Sukkur
                </Link>
              </Typography>
            </Stack>

            <Stack direction="row">
              <IconStyle icon={roundBusinessCenter} />
              <Typography variant="body2">
                <Link component="span" variant="subtitle2" color="text.primary">
                  We are one of the best travel service providers in Pakistan.
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </>
      )
    }

      
    </Card>
  );
}
