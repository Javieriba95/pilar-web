import React, {useEffect, useState} from "react";
import {
    Grid,
    Paper,
    Box,
    Card,
    CardHeader,
    CardContent,
    TextField,
    Button,
    Stack,
    Typography,
    Checkbox,
} from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../../redux/appRedux";


const Formularios = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [name1, setName1] = useState('')
    const [name2, setName2] = useState('')
    const [name3, setName3] = useState('')
    const [name4, setName4] = useState('')
    const [name5, setName5] = useState('')
    

const handleChangeName = (e) => {
    setName(e.target.value)
}

const handleChangeName1 = (e) => {
    setName1(e.target.value)
}
const handleChangeName2 = (e) => {
    setName2(e.target.value)
}
const handleChangeName3 = (e) => {
    setName3(e.target.value)
}
const handleChangeName4 = (e) => {
    setName4(e.target.value)
}
const handleChangeName5 = (e) => {
    setName5(e.target.value)
}

const handleSumbit = () => {

}


return (
<Grid container spacing={3}>
    <Grid item md={12} xs={12}>
    <Card>
         <CardHeader title="Formulario"/>
             <CardContent>
             <Typography>{name}</Typography>
                     <Stack spacing={2}>
                        <Stack sx={{justifyContent:'space-around'}} direction='row'>
                                <Grid item md={6}>
                                    <TextField value={name} label="nombre" variant="outlined"onChange={handleChangeName} />
                                </Grid>   
                        </Stack>
                        <Stack sx={{justifyContent:'space-around'}} direction='row'>
                                <Grid item md={6}>
                                    <TextField value={name1} label="nombre1" variant="outlined"onChange={handleChangeName1} />
                                </Grid>   
                        </Stack>
                        <Stack sx={{justifyContent:'space-around'}} direction='row'>
                                <Grid item md={6}>
                                    <TextField value={name2} label="nombre2" variant="outlined"onChange={handleChangeName2} />
                                </Grid>   
                        </Stack>
                        <Stack sx={{justifyContent:'space-around'}} direction='row'>
                                <Grid item md={6}>
                                    <TextField value={name3} label="nombre3" variant="outlined"onChange={handleChangeName3} />
                                </Grid>   
                        </Stack>
                        <Stack sx={{justifyContent:'space-around'}} direction='row'>
                                <Grid item md={6}>
                                    <TextField value={name4} label="nombre4" variant="outlined"onChange={handleChangeName4} />
                                </Grid>   
                        </Stack>
                        <Stack sx={{justifyContent:'space-around'}} direction='row'>
                                <Grid item md={6}>
                                    <TextField value={name5} label="nombre5" variant="outlined"onChange={handleChangeName5} />
                                </Grid>   
                        </Stack>
                    </Stack>

                        <Grid item md={6}>
                            <Button disabled={!name} variant="contained"onClick={()=>handleSumbit()}>Enviar</Button>
                        </Grid>
                
        </CardContent>
    </Card>
    </Grid>
</Grid>
);
};
export default Formularios; 