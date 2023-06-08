// hooks
import useAuth from '../hooks/useAuth';
//
import { MAvatar } from './@material-extend';
import createAvatar from '../utils/createAvatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {

  const { user } = useAuth();
  const userData = user.data;
  console.log("userData?.length > 0 in MyAvatar ", userData?.length > 0, "local?.role === agency", userData?.role === "agency")
  const agencyLocalStorage = JSON.parse(localStorage.getItem("agency"));
  const local = JSON.parse(localStorage.getItem('user'));
  // console.log("LOcal me aahy chha :---- ",local);
  // console.log("Agency me aahy chha :---- ",agencyLocalStorage);
  // console.log("agency,companyImage:--- ", agencyLocalStorage?.companyImage, " and local.role:-- ", local.role);

  
  return (
    
    userData?.role === "agency" ?
    (
      
      <MAvatar
            src={agencyLocalStorage?.companyImage}
            alt={agencyLocalStorage?.companyName}
            color={agencyLocalStorage?.companyImage ? 'default' : createAvatar(agencyLocalStorage?.companyName).color}
            {...other}
        > 
            {createAvatar(agencyLocalStorage?.companyName).name}
      </MAvatar>
    )
    :
    (<MAvatar
      src="/static/images/adminlogo.png"
      alt={local?.companyName}
      color={agencyLocalStorage?.companyImage ? 'default' : createAvatar(local?.companyName).color}
      {...other}
      > 
      {createAvatar(local?.companyName).name}
    </MAvatar>)
  );
}
