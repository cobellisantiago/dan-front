import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store';
import SwitchApp from './navigation/Router';

const Index = () => {
  serviceWorker.unregister();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <SwitchApp />
      </Provider>
    </BrowserRouter>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
