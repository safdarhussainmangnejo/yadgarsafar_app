import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import ReplyAllIcon from '@mui/icons-material/ReplyAll';

const EditProfile = () => {

    const navigate = useNavigate();


    const fetchData = async () => {
        fetch("https://yadgarsafar-backend.netlify.app/getData")
            .then(response => response.json()).then(data => {
                setProf(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const [prof, setProf] = useState('');
    const [image, setImage] = useState('');
    const [firstName, setFirstname] = useState(prof.firstName);
    const [lastName, setLastname] = useState(prof.lastName);
    const [city, setCity] = useState(prof.city);
    const [country, setCountry] = useState(prof.country);
    const [interest, setInterest] = useState(prof.interests);
    const [url, setUrl] = useState(prof.image);

    const [culturalTour, setCulturalTour] = useState('');
    const [trekkingTour, setTrekkingTour] = useState('');
    const [honeymoonTour, setHoneymoonTour] = useState('');
    const [adventurousTour, setAdventurousTour] = useState('');
    const [summerTour, setSummerTour] = useState('');
    const [winterTour, setWinterTour] = useState('');
    const [springTour, setSpringTour] = useState('');


    const handleImageUpload = e => {
        const img = e.target.files[0];
        setImage(img);
    };

    const uploadImage = async () => {
        let data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'agency');
        data.append('cloud_name', 'yadgarsafar');

        const response = await fetch('https://api.cloudinary.com/v1_1/yadgarsafar/image/upload', {
            method: 'post',
            body: data
        });

        const convertedData = await response.json();
        setUrl(convertedData.url);
        return convertedData
    };



    const handleProductSubmit = async e => {
        e.preventDefault();
        uploadImage().then(async (url) => {

            const interests = [
                culturalTour, trekkingTour, honeymoonTour,
                adventurousTour, summerTour, winterTour,
                springTour
            ]

            const obj = {
                firstName,
                lastName,
                city,
                country,
                interests,
                image: url.url
            }


            await axios.post(`https://yadgarsafar-backend.netlify.app/update/${prof._id}`, obj).then(res => {

                navigate('/profile');
            }

            )
        })

    };


    const CulturalTour = (event) => {
        const { checked, value } = event.target;

        checked ? setCulturalTour(value) : setCulturalTour('')
    }

    const TrekkingTour = (event) => {
        const { checked, value } = event.target;

        checked ? setTrekkingTour(value) : setTrekkingTour('')
    }

    const HoneymoonTour = (event) => {
        const { checked, value } = event.target;

        checked ? setHoneymoonTour(value) : setHoneymoonTour('')
    }

    const AdventurousTour = (event) => {
        const { checked, value } = event.target;

        checked ? setAdventurousTour(value) : setAdventurousTour('')
    }

    const SummerTour = (event) => {
        const { checked, value } = event.target;

        checked ? setSummerTour(value) : setSummerTour('')
    }

    const WinterTour = (event) => {
        const { checked, value } = event.target;

        checked ? setWinterTour(value) : setWinterTour('')
    }

    const SpringTour = (event) => {
        const { checked, value } = event.target;

        checked ? setSpringTour(value) : setSpringTour('')
    }




    return (
        <>
            <form onSubmit={handleProductSubmit} encType="multipart/form-data" className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-5">

                    <label>Upload Image</label>

                    <input type="file" name='image' onChange={handleImageUpload} className="form-control" id="customFile" />
                    <br />
                    {/* {
                        prof.image && 
                        <img src={prof.image} alt="profile Image" className="left" style={{ borderRadius:'270px'}} width="180px"/>
                    } */}
                </div>

                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 p-5">
                    <Link to="/Profile"><ReplyAllIcon />Back to Profile</Link>
                    <br /><br />
                    <input type="text" name='firstName' placeholder="Firstname" onChange={(e) => setFirstname(e.target.value)} className="form-control" defaultValue={prof.firstname} />
                    <br />
                    <input type="text" name='lastName' placeholder="Lastname" onChange={(e) => setLastname(e.target.value)} className="form-control" defaultValue={prof.lastname} />
                    <br />
                    <input type="text" name='city' placeholder="City" onChange={(e) => setCity(e.target.value)} className="form-control" defaultValue={prof.city} />
                    <br />
                    <input type="text" name='country' placeholder="Country" onChange={(e) => setCountry(e.target.value)} className="form-control" defaultValue={prof.country} />
                    <br /><br />
                    <h2>Choose Your Interests</h2>
                    <input type="checkbox" value="Cultural Tour" onChange={CulturalTour} />
                    &nbsp;&nbsp;
                    <label>Cultural Tour</label>
                    &emsp;&emsp;&emsp;&emsp;&nbsp;
                    <input type="checkbox" value="trekking Tour" onChange={TrekkingTour} />
                    &nbsp;&nbsp;
                    <label>Trekking Tour</label>
                    <br />
                    <input type="checkbox" value="honeymoon Tour" onChange={HoneymoonTour} />
                    &nbsp;&nbsp;
                    <label>Honeymoon Tour</label>
                    &emsp;&emsp;&nbsp;
                    <input type="checkbox" value="adventurous Tour" onChange={AdventurousTour} />
                    &nbsp;&nbsp;
                    <label>Adventurous Tour</label>
                    <br />
                    <input type="checkbox" value="summer Tour" onChange={SummerTour} />
                    &nbsp;&nbsp;
                    <label>Summer Tour</label>
                    &emsp;&emsp;&emsp;&emsp;
                    <input type="checkbox" value="winter Tour" onChange={WinterTour} />
                    &nbsp;&nbsp;
                    <label>Winter Tour</label>
                    <br />
                    <input type="checkbox" value="spring Tour" onChange={SpringTour} />
                    &nbsp;&nbsp;
                    <label>Spring Tour</label>

                    <br />

                    <button type="submit" style={{ float: 'right' }} className="btn btn-success">Save Changes</button>
                </div>

            </form>
        </>
    )
}
export default EditProfile;