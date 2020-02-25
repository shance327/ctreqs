import React, {Component} from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        width: 100,
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function Sizes() {
    const classes = useStyles(); }

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { }
    }

    render() {
        return (
            <div id="test">
                <Autocomplete
                    multiple
                    id="size-small-outlined-multi"
                    size="small"
                    options={Ingredients}
                    getOptionLabel={option => option.title}
                    //defaultValue={[top100Films[13]]}
                    renderInput={params => (
                        <TextField
                            style={{backgroundColor: '#FFFFFF',
                                top: "150px",
                                width: "500px",
                                left: "300px"

                        }}
                            {...params}
                            variant="outlined"
                            label="Input Ingredients"
                            placeholder="Input Ingredients"
                            fullWidth
                        />
                    )}
                />
            </div>
        )
    }
}

const Ingredients = [{ title: 'Apple Juice'}, {title: 'Lime Juice'}, {title: 'Rum'} ];
