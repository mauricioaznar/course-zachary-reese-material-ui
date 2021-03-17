import React, {useState} from 'react';
import Header from './ui/Header'
import Footer from './ui/Footer'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './LandingPage'
import Services from './Services'
import CustomSoftware from './CustomSoftware'
import MobileApps from './MobileApps'
import Websites from './Websites'
import './App.css'
import Revolution from './Revolution'
import About from './About'
import Contact from './Contact'
import Estimate from './Estimate'



function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/services" render={() => <Services />} />
          <Route exact path="/customsoftware" render={() => <CustomSoftware setSelectedIndex={setSelectedIndex} setValue={setValue} />} />
          <Route exact path="/mobileapps" render={() => <MobileApps setSelectedIndex={setSelectedIndex} setValue={setValue} />}  />
          <Route exact path="/websites" render={() => <Websites setSelectedIndex={setSelectedIndex} setValue={setValue} />} />
          <Route exact path="/revolution" render={() => <Revolution />} />
          <Route exact path="/about" render={() => <About setSelectedIndex={setSelectedIndex} setValue={setValue} />} />
          <Route exact path="/contact" render={() => <Contact setSelectedIndex={setSelectedIndex} setValue={setValue} />} />
          <Route exact path="/estimate" render={() => <Estimate /> } />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
