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

ProfileAbout.propTypes = {
  profile: PropTypes.object
};

export default function ProfileAbout({ profile, role }) {
  // const agencyLocalStorage = JSON.parse(localStorage.getItem("agency"));
  const { companyDescription, email, companyOwner, companyNumber, companyname } = profile;

  return (
    <Card>
      <CardHeader title="About" />

      {role === 'agency' ? (<Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="body2">{companyDescription}</Typography>

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
          <IconStyle icon={emailFill} />
          <Typography variant="body2">{email}</Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle icon={roundBusinessCenter} />
          <Typography variant="body2">
            Our Owner is &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {companyOwner}
            </Link>
          </Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle icon="bxs:phone-call" />
          <Typography variant="body2">
            Contact us at &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {companyNumber}
            </Link>
          </Typography>
        </Stack>
      </Stack>) :

      (<Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="body2">This is Yadgar Safar's profile</Typography>

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
          <IconStyle icon={emailFill} />
          <Typography variant="body2">{email}</Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle icon={roundBusinessCenter} />
          <Typography variant="body2">
            Owners are &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              Safdar Hussain, Madan Lal, and Wahiba Akram
            </Link>
          </Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle icon="bxs:phone-call" />
          <Typography variant="body2">
            Contact Number &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              03053603181
            </Link>
          </Typography>
        </Stack>
      </Stack>)

    }
    </Card>
  );
}
