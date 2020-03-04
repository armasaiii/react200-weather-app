import React from 'react'

export default class SearchHistory extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(

            <div className='card border-danger mb-3'>
                <div className='card-body'>
                    <div className='card-header text-white bg-danger'>Search History</div>
            <table>
              {this.props.information == 0 ? 'Your search history will display here.'
                :
                information.map(location =>
                  <tr key={Math.random(1000)}>
                    <td>{location.city}</td>
                    <td style={{ width: 120 }}>{new Date().toLocaleString()}</td>
                  </tr>
                )}
          </table>
        </div>
      </div>
    )
  }
}
