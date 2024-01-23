import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from "./Profile";
const quackie = {
  name:"Quackie Makers",
  job : "Makers' favourite rubber duck",
  birthdate: 2013
}
const hissy = {
  name:"Hissy Swan",
  job: "anger",
  birthdate: '33'
}
const foxy = {
  name: "Professor Fox",
  job: "Professor of Cunning",
  birthdate: "unknown"
}
const App = () => {
  return <div>
    <Profile name= {hissy.name}
  job = {hissy.job}
  birthdate = {hissy.birthdate}
  />
  <Profile name= {quackie.name}
  job = {quackie.job}
  birthdate = {quackie.birthdate}
  />
  <Profile name= {foxy.name}
  job = {foxy.job}
  birthdate = {foxy.birthdate}
  />
  </div>
};
export default App