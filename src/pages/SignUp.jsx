import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const[name, setName] = useState('');
    const[surname, setSurname] = useState('');
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleClickOnSingIn = () => {
        navigate('/', {replace:true});
    }

    const handleOnClickLogin = () => {
        console.log('click');
    }

  return (
    <div>
        <main className="d-flex w-100">
            <div className="container d-flex flex-column">
                <div className="row vh-100">
                    <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">

                            <div className="text-center mt-4">
                                <h1 className="h2">Get started</h1>
                                <p className="lead">
                                    Create Your Account
                                </p>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <div className="m-sm-3">
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label">Name</label>
                                                <input className="form-control form-control-lg" type="text" name="name" placeholder="Enter your name" onChange={(event)=>{setName(event.target.value)}} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Surname</label>
                                                <input className="form-control form-control-lg" type="text" name="surname" placeholder="Enter your surname" onChange={(event)=>{setSurname(event.target.value)}} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Username</label>
                                                <input className="form-control form-control-lg" type="text" name="username" placeholder="Enter your username" onChange={(event)=>{setUsername(event.target.value)}}/>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter password" onChange={(event)=>{setPassword(event.target.value)}}/>
                                            </div>
                                            <div className="d-grid gap-2 mt-3">
                                                <a onClick={handleOnClickLogin} className="btn btn-lg btn-primary">Sign up</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mb-3">
                                Already have account? <a onClick={handleClickOnSingIn}>Log In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default SignUp