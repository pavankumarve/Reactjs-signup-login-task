import react, { Component } from 'react'

class Users extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: this.employees
        }
        // console.log(this.state.list);
    }
    // employees data 
    employees = [
        {
            name: 'pavan',
            gender: 'Male',
            degree: 'BE',
        },
        {
            name: 'sai',
            gender: 'Male',
            degree: 'MBA',
        },
        {
            name: 'hari',
            gender: 'Female',
            degree: 'BE',
        },
    ];
    render() {
        return (
// table heading 
            <div className='User-table pt-5'>
                <h1>User Page</h1>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Degree</th>
                        </tr>
                    </thead>
{/* using map method pushing users data to table */}
                    <tbody>
                        {this.state.list.map((rowData, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{rowData.name}</td>
                                <td>{rowData.gender}</td>
                                <td>{rowData.degree}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users