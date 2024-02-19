import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginWithUsername } from '../api/UserService';
import { storeUser } from '../redux/UserSlice';
import { useNavigate } from 'react-router-dom';
import SpinnerButton from '../components/buttons/SpinnerButton';

const SignIn = () => {
    const[userName, setUserName] = useState();
    const[password, setPassword] = useState();
    const[apiProgress, setApiProgress] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnClickLogin = async () => {
        setApiProgress(true);
        loginWithUsername(userName, password).then(response => {
            console.log(response);
            dispatch(storeUser(response.data));
            setApiProgress(false);
        }).catch(error => {
            console.log(error);
            setApiProgress(false);
        });
    }

    const handleOnClickSignUp = () => {
        navigate('/signup', {replace:true});
    }

  return (
    <div>
        <main className="d-flex w-100">
            <div className="container d-flex flex-column">
                <div className="row vh-100">
                    <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">

                            <div className="text-center mt-4">
                                <h1 className="h2">Welcome!</h1>
                                <p className="lead">
                                    Sign in to your account to continue
                                </p>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <div className="m-sm-3">
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" onChange={(event) => setUserName(event.target.value)} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" onChange={(event) => setPassword(event.target.value)} />
                                            </div>
                                            <div>
                                                <div className="form-check align-items-center">
                                                    <input id="customControlInline" type="checkbox" className="form-check-input" value="remember-me" name="remember-me" />
                                                    <label className="form-check-label text-small" htmlFor="customControlInline">Remember me</label>
                                                </div>
                                            </div>
                                            <div className="d-grid gap-2 mt-3 text-center">
                                                <SpinnerButton handleOnClick={handleOnClickLogin} loading={apiProgress} text={"Sign in"} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mb-3">
                                Don't have an account? <a onClick={handleOnClickSignUp}>Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default SignIn