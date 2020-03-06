import React, {Component} from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './SearchBar.css'

export default class SearchBar extends Component {

    state = {
            ingredients: [],
            selected: [],
            response: []
        };

    componentDidMount() {
        fetch('/api/ingredients')
            .then(res => res.json())
            .then((data) => {
                this.setState({ingredients: data})
            })
            .catch(console.log)
    }

    onTagsChange = (event, values) => {
        this.setState({
            selected: values
        }, () => {
            // This will output an array of objects
            // given by Autocompelte options property.
            console.log(this.state.selected);
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <Autocomplete
                    multiple
                    size = 'medium'
                    id="tags-outlined"
                    options={this.state.ingredients}
                    getOptionLabel={option => option.name}
                    //defaultValue={}
                    filterSelectedOptions
                    onChange={this.onTagsChange}
                    renderInput={params => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="filterSelectedOptions"
                            placeholder="Ingredients"
                        />
                    )}
                />
                <button onClick={this.handleSearch}>Search</button>
            </div>
        )
    }

    handleSearch = () => {
        this.makeApiCall(this.state.selected);
    };

    makeApiCall = searchInput => {
        let iidList = '';

        for(let i = 0; i < searchInput.length; i++) {
            let obj = searchInput[i];
            if (i < searchInput.length - 1) {
                iidList = iidList.concat(obj.id.toString() + ",");
            }
            else {
                iidList = iidList.concat(obj.id.toString());
            }
            console.log(iidList);
        }

        let searchUrl = `api/ingredients/${iidList}`;
        console.log(searchUrl);

        fetch(searchUrl)
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                console.log(jsonData);
                this.setState({ response: jsonData });
            });
    };
}
