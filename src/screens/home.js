import React from 'react'
import { TextField, Box, Grid, Typography, Button } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'


function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    function handlelocation() {
        console.log(location.pathname)
        navigate("/cardetail")
    }
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 2,
                paddingInline: 10
            }}>
                <TextField fullWidth variant='outlined' label='Search' />
            </Box>
            <Box sx={{
                padding: 5
            }}>
                <Grid container spacing={2} onClick={handlelocation}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{
                            boxShadow: 2,
                            padding: 4
                        }}>
                            <Box>
                                <img src="https://imgd.aeplcdn.com/1200x900/cw/ec/23799/Mitsubishi-Montero-Right-Front-Three-Quarter-74529.jpg?wm=0&q=75" alt="" width="200px" />
                            </Box>
                            <Typography>
                                Car: Mitsubishi
                            </Typography>
                            <Typography>
                                <Typography>
                                    Details: Lorem ipsum dolor sit amet.
                                </Typography>
                                <Typography>
                                    Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate.
                                </Typography>
                            </Typography>
                            <Box>
                                <Button variant='outlined'>Book Now</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{
                            boxShadow: 2,
                            padding: 4
                        }}>
                            <Box>
                                <img src="https://imgd.aeplcdn.com/1200x900/cw/ec/23799/Mitsubishi-Montero-Right-Front-Three-Quarter-74529.jpg?wm=0&q=75" alt="" width="200px" />
                            </Box>
                            <Typography>
                                Car: Mitsubishi
                            </Typography>
                            <Typography>
                                <Typography>
                                    Details: Lorem ipsum dolor sit amet.
                                </Typography>
                                <Typography>
                                    Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate.
                                </Typography>
                            </Typography>
                            <Box>
                                <Button variant='outlined'>Book Now</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{
                            boxShadow: 2,
                            padding: 4
                        }}>
                            <Box>
                                <img src="https://imgd.aeplcdn.com/1200x900/cw/ec/23799/Mitsubishi-Montero-Right-Front-Three-Quarter-74529.jpg?wm=0&q=75" alt="" width="200px" />
                            </Box>
                            <Typography>
                                Car: Mitsubishi
                            </Typography>
                            <Typography>
                                <Typography>
                                    Details: Lorem ipsum dolor sit amet.
                                </Typography>
                                <Typography>
                                    Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate.
                                </Typography>
                            </Typography>
                            <Box>
                                <Button variant='outlined'>Book Now</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{
                            boxShadow: 2,
                            padding: 4
                        }}>
                            <Box>
                                <img src="https://imgd.aeplcdn.com/1200x900/cw/ec/23799/Mitsubishi-Montero-Right-Front-Three-Quarter-74529.jpg?wm=0&q=75" alt="" width="200px" />
                            </Box>
                            <Typography>
                                Car: Mitsubishi
                            </Typography>
                            <Typography>
                                <Typography>
                                    Details: Lorem ipsum dolor sit amet.
                                </Typography>
                                <Typography>
                                    Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate.
                                </Typography>
                            </Typography>
                            <Box>
                                <Button variant='outlined'>Book Now</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home