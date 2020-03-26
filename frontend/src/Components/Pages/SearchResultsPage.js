import React from 'react'

// takes result from redirect and displays them in cards. Results are referenced using this.props.location.state.responses
// *This component could be better organized into individual components*
class SearchBarPage extends React.Component {

    render() {
        console.log("props responses: " + this.props.location.state.responses);

        // maps results to card components displaying recipe names.
        return (
            <div>
                <h1>Results</h1>
                {this.props.location.state.responses.map((result, index) => (
                    <div className="card" style={{
                        boxShadow: '2px 2px 2px 2px lightgray',
                        transition: 0.5, width: '50%', margin: 'auto'
                    }}>
                        <div className="card-body">
                            <h2 className="card-title"
                                style={{textAlign: "center", marginTop: 10}}> {result.recipeName}</h2>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default SearchBarPage
