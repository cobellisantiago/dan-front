import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import clearAll from '../store/helpers/actions';
import App from '../App';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    clearAll
  },
  dispatch
);

const SwitchApp = connect(
  mapStateToProps,
  mapDispatchToProps
// eslint-disable-next-line no-shadow
)(({ clearAll }) => {
  // TODO Define correct ones
  // const history = useHistory();
  // const env = runtimeEnv();
  // const {expireSession} = useAuthDataContext();
  // const location = useLocation();

  // httpClient.initialize(
  //   'http://localhost:7000', null,
  //   // setToken,
  //   () => {
  //     // removeToken();
  //     // if (!location.pathname.includes('login')) {
  //     //   history.push(`/login?redir=${location.pathname}`);
  //     // } else {
  //     //   history.push(`/login`);
  //     // }
  //     clearAll();
  //   },
  //   // getToken(),
  //   null, null
  //   // expireSession
  // );

  clearAll();

  return (
    <App />
  );
});

export default SwitchApp;
