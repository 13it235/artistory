import React from 'react';
import cookie from 'react-cookie';

class Token extends React.Component {

    componentWillMount() {
        const token = this.props.location.hash;
        // console.log("token type", typeof (token));
        // console.log("token", token);

        if (token !== undefined && token !== '') {
            var tokenRes = {
                access_token: null,
                expires_in: null,
                viewtype: "login",
                session_state: null
            }
            var first_split = token.split('&');

            for (var i = 0; i < first_split.length; i++) {
                var key = first_split[i].split('=')[0];
                switch (key) {
                    case "#access_token":
                        tokenRes.access_token = first_split[i].split('=')[1];
                        break;
                    case "expires_in":
                        tokenRes.expires_in = first_split[i].split('=')[1]; //60
                        break;
                    // case "viewtype":
                    //     tokenRes.viewtype = first_split[i].split('=')[1];
                    //     break;
                    // case "session_state":
                    //     tokenRes.session_state = first_split[i].split('=')[1];
                    //     cookie.save("session_state", tokenRes.session_state);
                    //     break;
                    default:
                        break;
                }
            }

            var access_token = tokenRes.access_token;

            if (tokenRes.expires_in) {
                var int_expires = parseInt(tokenRes.expires_in) - 10;

                cookie.save('access_token', access_token, { maxAge: int_expires });

                setTimeout(() => {
                    alert('Session expired');
                    cookie.remove("access_token");
                    cookie.remove("userinfo")
                    this.props.history.push('/');
                }, tokenRes.expires_in);
            }
            if (access_token) {
                cookie.save("access_token", access_token);
                this.props.history.push('/app')
            } else {
                this.props.history.push('/')
            }
        }
    };

    render() {
        return null;
    }
}

export default Token;

// function getHashParameter(name) {
//     if (location.hash) {
//         var vars = location.hash.substring(1).split('&');
//         var key = {};
//         for (var i = 0; i < vars.length; i++) {
//             var tmp = vars[i].split('=');
//             key[tmp[0]] = tmp[1];
//         }
//         return key[name];
//     }
//     return null;
// }


