import React from 'react';


class SearchBar extends React.Component{

    handleSubmit=(event)=>{

        console.log(this.state.term);
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
    }
    state={term : ''};
    render(){

        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.handleSubmit}>
                   <div className='field'>
                   <label>Video Search</label>
                        <input type='text' value={this.state.term}
                        
                         onChange={e=> this.setState({term :e.target.value})}/>
                  
                    </div>
                </form>

            </div>
        );
    }
}
 
export default SearchBar;