import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import routes from "./routes/routes";
import db from "./firebase";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import "./App.css";

function App() {
  useEffect(() => {
    onSnapshot(collection(db, "tweets"), (snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
    });
  });
  useEffect(() => {
    onSnapshot(collection(db, "comment"), (snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
    });
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          {routes.map((route, key) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            }
            return (
              <Route
                path={route.path}
                element={
                  <Layout>
                    <route.element />
                  </Layout>
                }
                key={key}
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
