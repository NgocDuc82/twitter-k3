import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import routes from "./routes/routes";
import { DefaultLayout } from './layouts/DefaultLayout'

// test 

import Home from "./pages/home/Home"


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {routes.map((route, key) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            }
            return <Route path={route.path} element={
              <Layout >
                <route.element />
              </Layout>
            } key={key} />

          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;