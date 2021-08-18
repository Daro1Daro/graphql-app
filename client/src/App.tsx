import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component';

function App() {
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
