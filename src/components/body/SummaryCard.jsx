import React from 'react'

const SummaryCard = (props) => {
    const {title, icon, value, description, unit} = props;

    const descriptionText = description.length > 20 ? `${description.slice(0, 20)}...` : description;
  return (
    <div className="col-sm-4">
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col mt-0">
                        <h5 className="card-title">{title}</h5>
                    </div>

                    <div className="col-auto">
                        <div className="stat text-primary">
                            <span dangerouslySetInnerHTML={{ __html: icon }} />
                        </div>
                    </div>
                </div>
                <h1 className="mt-1 mb-3">{value}</h1>
                <div className="mb-0">
                    <p><span className="text-primary">{unit}</span></p>
                    <span title={description} className="text-muted">{descriptionText}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SummaryCard