import { FilledInput, FormControl, FormHelperText, InputAdornment } from '@mui/material'
import React,{ FC } from 'react'
import { IAnthropometric } from '../App';

interface IAnthropometricForm{
    anthropometric?: IAnthropometric | undefined,
    setAnthropometric?:((anthropometric:IAnthropometric | undefined) => void | undefined)
}

const AnthropometricForm:FC<IAnthropometricForm> = (props):any => {

        const handleHeightChange = (event: React.FormEvent<any>) => {
            props.setAnthropometric?.({
                ...props.anthropometric,
                height:parseFloat(event.currentTarget.value)
            });
        };
    
        const handleBodyWeightChange = (event: React.FormEvent<any>) => {
            props.setAnthropometric?.({
                ...props.anthropometric,
                weight:parseFloat(event.currentTarget.value)
            });
        };
    
        const handleTricepChange = (event: React.FormEvent<any>) => {
            props.setAnthropometric?.({
                ...props.anthropometric,
                tricep_skinfold: parseFloat(event.currentTarget.value),
            });
        };
    
        const handleSubscapularChange = (event: React.FormEvent<any>) => {
            props.setAnthropometric?.({
                ...props.anthropometric,
                subscapular_skinfold: parseFloat(event.currentTarget.value),
            });
        };
    
        const handleSupraspinalChange = (event: React.FormEvent<any>) => {
            props.setAnthropometric?.({
                ...props.anthropometric,
                supraspinal_skinfold: parseFloat(event.currentTarget.value),
            });
        };
    
        const handleHumerusChange = (event: React.FormEvent<any>) => {
            props.setAnthropometric?.({
                ...props.anthropometric,
                humerus_breadth: parseFloat(event.currentTarget.value),
            });
        };
    
        const handleFemurChange = (event: React.FormEvent<any>) => {
            props.setAnthropometric?.({
                ...props.anthropometric,
                femur_breadth: parseFloat(event.currentTarget.value),
            })
        };
    
        const handleCalfChange = (event: React.FormEvent<any>) => {
            props.setAnthropometric?.({
                ...props.anthropometric,
                calf_girth: parseFloat(event.currentTarget.value),
            });
        };
    
        const handleBicepChange = (event: React.FormEvent<any>) => {
            props.setAnthropometric?.({
                ...props.anthropometric,
                bicep_girth: parseFloat(event.currentTarget.value),
            });
        };

    return (
        <>
            <FormControl sx={{width:"100%"}} variant="filled">
                <FormHelperText>Height</FormHelperText>
                <FilledInput
                    id="height"
                    placeholder="180"
                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                    onChange={handleHeightChange}
                />
            </FormControl>

            <FormControl sx={{width:"100%"}} variant="filled">
                <FormHelperText>Bodyweight</FormHelperText>
                <FilledInput
                    id="bodyweight"
                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                    aria-describedby="filled-weight-helper-text"
                    placeholder="80"
                    onChange={handleBodyWeightChange}
                />
            </FormControl>

            <FormControl sx={{width:"100%"}} variant="filled">
                <FormHelperText>Tricep skin fold </FormHelperText>
                <FilledInput
                    id="tricep"
                    endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                    aria-describedby="filled-weight-helper-text"
                    placeholder="12"
                    onChange={handleTricepChange}
                />
            </FormControl>

            <FormControl sx={{width:"100%"}} variant="filled">
                <FormHelperText>Subscapular skin fold</FormHelperText>
                <FilledInput
                    id="subscapular"
                    placeholder="12"
                    endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                    aria-describedby="filled-weight-helper-text"
                    onChange={handleSubscapularChange}
                />
            </FormControl>

            <FormControl sx={{width:"100%"}} variant="filled">
                <FormHelperText>Supraspinal skin fold</FormHelperText>
                <FilledInput
                    id="supraspinal"
                    placeholder="12"
                    endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                    aria-describedby="filled-weight-helper-text"
                    onChange={handleSupraspinalChange}
                />
            </FormControl>

            <FormControl sx={{width:"100%"}} variant="filled">
                <FormHelperText>Humerus breadth </FormHelperText>
                <FilledInput
                    id="humerus"
                    placeholder="7"
                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                    aria-describedby="filled-weight-helper-text"
                    onChange={handleHumerusChange}
                />
            </FormControl>

            <FormControl sx={{width:"100%"}} variant="filled">
                <FormHelperText>Femur breadth</FormHelperText>
                <FilledInput
                    id="femur"
                    placeholder="8"
                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                    aria-describedby="filled-weight-helper-text"
                    onChange={handleFemurChange}
                />
            </FormControl>

            <FormControl sx={{width:"100%"}} variant="filled">
                <FormHelperText>Calf circumference</FormHelperText>
                <FilledInput
                    id="calf"
                    placeholder="38"
                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                    aria-describedby="filled-weight-helper-text"
                    onChange={handleCalfChange}
                />
            </FormControl>

            <FormControl sx={{width:"100%"}} variant="filled">
                <FormHelperText>Bicep circumference</FormHelperText>
                <FilledInput
                    id="bicep"
                    placeholder="38"
                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                    aria-describedby="filled-weight-helper-text"
                    onChange={handleBicepChange}
                />
            </FormControl>
        </>
    )
}

export default AnthropometricForm