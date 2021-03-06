import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Intro from './views/Intro';
import History from './views/History'
import Bulletins from './views/Bulletins';
import PostPage from './containers/PostPage';
import ReactPlayer from 'react-player';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
  }, [location]);

  return (
    <>
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          {/* <AppRoute exact path="/" component={Home} layout={LayoutDefault} /> */}
          {/* 성경퀴즈 임시 */}
          <AppRoute exact path="/" component={Bulletins} />

          <AppRoute exact path="/intro" component={Intro} layout={LayoutDefault} />
          <AppRoute exact path="/history" component={History} layout={LayoutDefault} />
          <AppRoute exact path="/bulletins" component={Bulletins} layout={LayoutDefault} />
          <AppRoute path="/bulletins/:id" component={PostPage} />
        </Switch>
      )} />
    </>
  );
}

export default App;