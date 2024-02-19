import React from 'react'
import HashLoader from "react-spinners/HashLoader";

const SpinnerButton = (props) => {
    const{handleOnClick, loading, text} = props;
  return (
    <div>
        <button className="btn btn-primary btn-lg" onClick={handleOnClick} disabled={loading}>
            {
                loading ?  
                <span className='text-center'>
                    &nbsp;
                    <HashLoader size={20} loading={loading} color="#36d6be" />
                    &nbsp;
                </span>
                :
                text
            }
        </button>
    </div>
  )
}

export default SpinnerButton