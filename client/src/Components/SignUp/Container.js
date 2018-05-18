import { compose, withHandlers } from 'recompose';
import { withInputs } from 'custom-hoc';
import { withRouter } from 'react-router';
import { withUser } from '../../utils';
import Component from './Component';


const enhance = compose(
  withInputs({
    username: { validate: value => value.length < 20 && value.length > 3 },
    email: { validate: value => value.length < 25 && value.length > 6 },
    password: { validate: value => value.length < 20 && value.length > 5 },
  }),
  withRouter,
  withUser,
  withHandlers({
    onSubmit: ({ onUserChange, username, email, password, history }) => () => {

      let data = {
        profile: { fullName: username },
        email: email,
        password: password
      }

      fetch("/api/v1/auth/sign-up", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }).then(response => {        
        if (response.status > 401) {  
          alert('Email is already registered');         
          throw new Error("Bad response from server");          
        }
        return response.json();
      }).then(data => {                
        if(data.token){

          const userData = {
            username: data.user.profile.fullName || 'Apiko',
            password: data.token,
            _id: data.user._id
          }

          onUserChange(userData);

          history.push('/');
        }        
      }).catch(function(err) {
        console.log(err)
      });
    }
  }),
);

export default enhance(Component);