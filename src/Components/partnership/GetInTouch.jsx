import React, { useState } from 'react'
import '../smallcompo/css/getintouch.css'
import { TextField, styled } from '@mui/material'
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const InputField = styled(TextField)`
justify-content:space-between;

`

const GetInTouch = () => {
    const [locations, setLocations] = useState('');
    const [micromarket, setMicromarket] = useState('');
    const [building, setBuilding] = useState('');
    const [workspaceType, setWorkspaceType] = useState('');
    const [age, setAge] = useState('');
    const [flag, setFlag] = useState(false); // Example radio button state
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleLocationsChange = (event) => {
        setLocations(event.target.value);
    };

    const handleMicromarketChange = (event) => {
        setMicromarket(event.target.value);
    };

    const handleBuildingChange = (event) => {
        setBuilding(event.target.value);
    };

    const handleWorkspaceTypeChange = (event) => {
        setWorkspaceType(event.target.value);
    };

    // const handleRadioChange = () => {
    //     setFlag(!flag);
    // };
    return (
        <>
            <div className='get_main_component'>
                <div className="get_form" style={{ width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p className="form_heading" style={{ color: "#EA762B", fontSize: '32px', fontWeight: '600' }}>Got questions? We've got answers.</p>
                        <p className="form_description">
                            Fill out the form below and a member of our team will get in touch with you to learn more about your workplace needs
                        </p>
                    </div>
                    <div className="form_inputs">
                        <div style={{ display: 'flex', gap: '4%' }}>
                            <InputField size='small' style={{ width: '48%', height: '4px !important' }} id="outlined-basic" label="First Name*" variant="outlined" placeholder='First Name*' />
                            <InputField size='small' style={{ width: '48%' }} id="outlined-basic" label="Last Name*" variant="outlined" placeholder='Last Name*' />
                        </div>
                        <div style={{ display: 'flex', gap: '4%' }}>
                            <InputField size='small' style={{ width: '48%' }} id="outlined-basic" label="Company Name*" variant="outlined" placeholder='Company Name*' />
                            <InputField size='small' style={{ width: '48%' }} id="outlined-basic" label="Company E-mail Address*" variant="outlined" placeholder='Company E-mail Address*' />
                        </div>
                        <InputField size='small' id="outlined-basic" label="Phone Number*" variant="outlined" placeholder='Phone Number*' />
                        <FormControl size='small' style={{ width: '100%' }}>
                            <InputLabel id="locations-label">Locations*</InputLabel>
                            <Select
                                labelId="locations-label"
                                id="locations-select"
                                value={locations}
                                label="Locations*"
                                onChange={handleLocationsChange}
                            >
                                <MenuItem className='select_get_in_touch' value={'Pune'}>
                                    Pune - Location information for Pune
                                </MenuItem>
                                <MenuItem className='select_get_in_touch' value={'Bhopal'}>
                                    Bhopal - Location information for Bhopal
                                </MenuItem>
                                <MenuItem className='select_get_in_touch' value={'Hyderabad'}>
                                    Hyderabad - Location information for Hyderabad
                                </MenuItem>
                                {/* Add more MenuItem components for other locations as needed */}
                            </Select>
                        </FormControl>

                        <FormControl size='small' style={{ width: '100%' }}>
                            <InputLabel id="micromarket-label">Micromarket*</InputLabel>
                            <Select
                                labelId="micromarket-label"
                                id="micromarket-select"
                                value={micromarket}
                                label="Micromarket*"
                                onChange={handleMicromarketChange}
                            >
                                <MenuItem className='select_get_in_touch' value={'Pune'}>
                                    Pune - Micromarket information for Pune
                                </MenuItem>
                                <MenuItem className='select_get_in_touch' value={'Bhopal'}>
                                    Bhopal - Micromarket information for Bhopal
                                </MenuItem>
                                <MenuItem className='select_get_in_touch' value={'Hyderabad'}>
                                    Hyderabad - Micromarket information for Hyderabad
                                </MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl size='small' style={{ width: '100%' }}>
                            <InputLabel id="building-label">Building*</InputLabel>
                            <Select
                                labelId="building-label"
                                id="building-select"
                                value={building}
                                label="Building*"
                                onChange={handleBuildingChange}
                            >
                                <MenuItem className='select_get_in_touch' value={'Pune'}>
                                    Pune - Building information for Pune
                                </MenuItem>
                                <MenuItem className='select_get_in_touch' value={'Bhopal'}>
                                    Bhopal - Building information for Bhopal
                                </MenuItem>
                                <MenuItem className='select_get_in_touch' value={'Hyderabad'}>
                                    Hyderabad - Building information for Hyderabad
                                </MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl size='small' style={{ width: '100%' }}>
                            <InputLabel id="workspace-label">Workspace type*</InputLabel>
                            <Select
                                labelId="workspace-label"
                                id="workspace-select"
                                value={workspaceType}
                                label="Workspace type*"
                                onChange={handleWorkspaceTypeChange}
                            >
                                <MenuItem className='select_get_in_touch' value={'Pune'}>
                                    Pune - Workspace types in Pune
                                </MenuItem>
                                <MenuItem className='select_get_in_touch' value={'Bhopal'}>
                                    Bhopal - Workspace types in Bhopal
                                </MenuItem>
                                <MenuItem className='select_get_in_touch' value={'Hyderabad'}>
                                    Hyderabad - Workspace types in Hyderabad
                                </MenuItem>
                            </Select>
                        </FormControl>

                        <div className="form_inputs_checkbox" style={{ border: 'none', display: 'flex', flexDirection: 'column', gap: '20px', paddingLeft: '4%' }}>
                            <FormControl>
                                <FormLabel id="demo-controlled-radio-buttons-group">Do you have a broker?*</FormLabel>
                                <RadioGroup
                                    // aria-labelledby="demo-radio-buttons-group-label"
                                    // defaultValue="female"
                                    name="radio-buttons-group"
                                    onChange={handleChange}
                                    // value={value}
                                    row
                                    id='outline-basic'
                                >
                                    <div style={{ display: 'flex', gap: '20px', margin: '5px 0' }}>
                                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '20px' }}>
                                            <input checked={!flag} onClick={() => setFlag(false)}  type="radio" />Yes
                                        </div>
                                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '20px' }}>
                                            <input checked={flag} onClick={() => setFlag(true)} type="radio" />No
                                        </div>
                                    </div>
                                    {/* <FormControlLabel value="female" control={<Radio />} label="Yes" />
                  <FormControlLabel value="male" control={<Radio style={{outline:'none'}} />}label="No" />  */}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="agreement">
                        <p style={{ fontSize: '10px', color: '#897C7C', fontWeight: '600', paddingLeft: '4%' }}>By clicking the button below, you agree to our <span>Terms of Service</span> and acknowledge our <span>Privacy Policy</span></p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="agreement_button" style={{ width: '45%', height: "40px", border: 'none', borderRadius: '8px' }}>Get in touch</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetInTouch
