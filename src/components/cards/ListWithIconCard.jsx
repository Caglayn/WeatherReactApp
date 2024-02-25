import React from 'react'

const ListWithIconCard = (props) => {
    const{headers, content, title, description} = props;
  return (
    <div>
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle text-muted">{description}</h6>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        {
                            headers.map(h => <th key={h}>{h}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        content.map(c => 
                            <tr key={c.unixTime}>
                                <td><span className="rounded-circle me-2"><i className={c.icon}></i></span>{c.name}</td>
                                <td>{c.val}</td>
                                <td>{c.unit}</td>
                                <td>{c.formattedTime}</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListWithIconCard