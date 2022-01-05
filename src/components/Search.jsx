import React from 'react';

class Search extends React.Component{

    state = {
        search: ''
    }

    searchHandler(event){
        this.setState({search: event.target.value});
    }

    searchBtnHandler(event){
        if(event.key === 'Enter')
            this.props.searchFilms(this.state.search);
    }

    render(){
        return(
            <div className="row">
                <div className="input-field">
                    <input 
                        placeholder='Search' 
                        id="email_inline" 
                        type="search" 
                        className="validate"
                        value={this.state.search}
                        onChange={(event) => this.searchHandler(event)}
                        onKeyDown={(event) => this.searchBtnHandler(event)}
                    />
                </div>
            </div>
        )
    }
}

export default Search;