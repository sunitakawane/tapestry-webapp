import React, { Component } from 'react';
import NavBarLanding from '../../../components/NavBarLanding'

/*import TableLanding from '../../../components/TableLanding'*/

class CompletedTests extends Component {
    state = {
        userId : 'Anirudha'
    };
    render() {
        return (
            <div>
                <NavBarLanding activepage='/completedTests' userId={this.state.userId}/>
                {/*<TableLanding />*/}
            </div>
        );
    }
}

export default CompletedTests;