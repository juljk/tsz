import { compose, withHandlers } from 'recompose';
import { withInputs } from 'custom-hoc';
import { withRouter } from 'react-router';
import { withUser } from '../../utils';
import Component from './Component';


const enhance = compose(
  withInputs({
    username: { validate: value => value.length < 20 && value.length > 3 },
    password: { validate: value => value.length < 20 && value.length > 5 }
  }),
  withRouter,
  withUser,
  withHandlers({
    onSubmit: ({ onUserChange, username, password, history }) => () => {

      let data = {
        email: username,
        password: password
      }

      fetch("/api/v1/auth/sign-in", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }).then(response => {
        if (response.status === 401) {       
          alert("Incorrect username or password");    
          throw new Error("Incorrect username or password");          
        }
        if (response.status > 401) {           
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