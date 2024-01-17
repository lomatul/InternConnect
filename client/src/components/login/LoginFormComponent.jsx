import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/useAuthcontext';
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../../services/helper';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

const LoginFormComponent = () => {
  const navigate = useNavigate();
  const [student_id, setStudent_id] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useAuthContext();
  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [loginError, setLoginError] = useState('');

  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUpClick = () => {
    setIsAdminMode(true);
  };

  const handleSignInClick = () => {
    setIsAdminMode(false);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle input change and allow only digits
  const handleStudentIdChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^\d*$/; // Regular expression to match digits only
    if (regex.test(inputValue)) {
      setStudent_id(inputValue);
    }
  };

  const handleAdminSubmit = async (event) => {
    event.preventDefault();

    setLoginError('');

    try {
      await axios
        .post(`${BASE_URL}/InterConnect/admin/postlogin`, { username, password })
        .then((response) => {
          console.log(response);
          const User = response.data.User;
          console.log(User);
          dispatch({ type: 'LOGINADMIN', payload: User });
          //temporary saving in local storage
          localStorage.setItem('adminuser', JSON.stringify(User));
          navigate('/Admin');
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 308) {
              console.log('status', error.response.data.redirectUrl);
              navigate(error.response.data.redirectUrl, {
                state: { Id: error.response.data.id },
              });
            } else if (error.response.status === 401) {
              // Handle incorrect username or password
              setLoginError('Incorrect username or password.');
            }
            console.log(error.response);
            console.log('server responded');
          } else if (error.request) {
            console.log('network error');
          } else {
            console.log(error);
          }
        });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleStudentSubmit = async (event) => {
    event.preventDefault();

    if (student_id.length === 9 && student_id.startsWith('2')) {
      setIdError('');
      setPasswordError('');

      try {
        await axios
          .post(
            `${BASE_URL}/InterConnect/student/postlogin`,
            { student_id, password },
            { withCredentials: true }
          )
          .then((response) => {
            console.log(response);
            const User = response.data.User;
            console.log(User);
            dispatch({ type: 'LOGINSTUDENT', payload: User });
            //temporary saving in local storage
            localStorage.setItem('user', JSON.stringify(User));
            toast.success(response.data.message);
            navigate('/Student');
          })
          .catch((error) => {
            if (error.response) {
              if (error.response.status === 308) {
                console.log('status', error.response.data.redirectUrl);
                toast.success('Please update your password');
                navigate(error.response.data.redirectUrl, {
                  state: { Id: error.response.data.id, from: 0 },
                });
              } else if (error.response.status === 401) {
                setPasswordError('Incorrect username or password.');
              }
              console.log(error.response);
              console.log('server responded');
            } else if (error.request) {
              console.log('network error');
            } else {
              console.log(error);
            }
          });
      } catch (error) {
        console.error('An error occurred:', error);
      }
    } else {
      setIdError(
        "Invalid Student ID. It should be 9 digits long and start with '2'"
      );
    }
  };

  return (
    <div className={`logincontainer ${isAdminMode ? 'admin-mode' : ''}`}>
      <div className="forms-logincontainer">
        <div className="signin-signup">
          <form onSubmit={handleAdminSubmit} className="admin-form">
            <input
              type="text"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />{' '}
            <br />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />{' '}
            <br />
            
            
            <label >
            <Checkbox
            style={{marginRight:"10px"}}
            id="Showpassword"
            checked={showPassword}
            onChange={handleShowPasswordToggle}
            />
                Show Password
              </label>
            <span style={{ color: 'red' }}>{loginError}</span>
            <div>
              <input type="submit" value="Sign in" />
             
            </div>
            <br />
          </form>

          <form onSubmit={handleStudentSubmit} className="student-form">
            <input
              type="text"
              placeholder="Enter your Student ID"
              required
              value={student_id}
              onChange={handleStudentIdChange}
            />{' '}
            <br />
            <span style={{ color: 'red' }}>{idError}</span>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />{' '}
            <br />
            <span style={{ color: 'red' }} >{passwordError}</span>
            <label >
            <Checkbox
            style={{marginRight:"10px"}}
            id="Showpassword"
            checked={showPassword}
            onChange={handleShowPasswordToggle}
            />
                Show Password
              </label>
            <div>
              <input type="submit" value="Sign in" />

            </div>
            <br />
            <a href="/Forget">Forgot Password ?</a>
            <br />
          </form>
        </div>
      </div>

      <div className="panels-logincontainer">
        <div className="panel left-panel">
          <div className="logincontent">
            <h2 className="title">Welcome Admin Login</h2>
            <p>You are not an Admin? Go to Student Login</p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={handleSignUpClick}
            >
              Student Login
            </button>
          </div>
          <img src="admin-login.png" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="logincontent">
            <h2 className="title">Welcome Student Login</h2>
            <p>You are not a Student? Go to Admin Login </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={handleSignInClick}
            >
              Admin Login
            </button>
          </div>
          <img src="stu-login.png" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginFormComponent;
