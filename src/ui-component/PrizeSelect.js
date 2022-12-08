import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function PrizeSelect() {
    const theme = useTheme();
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{
                ...theme.typography.customInput
            }}
            renderInput={(params) => <TextField {...params} label="Select Price" />}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [{ label: 'The Shawshank Redemption', year: 1994 }];
