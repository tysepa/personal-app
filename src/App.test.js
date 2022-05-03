import React from 'react';
import App from './App';
import { render, screen, fireEvent } from "@testing-library/react";
import PersonalList from "./PersonalList"


describe('App', ()=>{
  it('Render without crashing',()=>{
    const appWrapper = render(<App />)
  })
  it('',()=>{
    const appWrapper = render(<App />)
    appWrapper.findAllByDisplayValue(PersonalList)
  })
})