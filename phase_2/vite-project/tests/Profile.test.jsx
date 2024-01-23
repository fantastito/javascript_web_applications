// file: tests/Profile.test.jsx

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "../src/Profile";

test("renders with the correct title ", () => {
  // Setup - rendering the component on the page
    const quackie = {
        name:"Quackie Makers",
        job : "Makers' favourite rubber duck",
        birthdate: 2013
    }  
    render(<Profile name= {quackie.name}
        job = {quackie.job}
        birthdate = {quackie.birthdate}
        />);

  // Assert
    expect(screen.getByRole("heading")).toHaveTextContent("Quackie Makers");
});

test("renders with the job title ", () => {
    // Setup - rendering the component on the page
        const quackie = {
            name:"Quackie Makers",
            job : "Makers' favourite rubber duck",
            birthdate: 2013
        }  
        render(<Profile name= {quackie.name}
            job = {quackie.job}
            birthdate = {quackie.birthdate}
            />);
    
    // Assert
        expect(screen.getByRole("paragraph", {name: "job"})).toHaveTextContent("Makers' favourite rubber duck");
        // expect(screen.getByRole("paragraph")).toHaveTextContent("Makers' favourite rubber duck");
    });

// test("renders with the birthdate", () => {
//     // Setup - rendering the component on the page
//         const quackie = {
//             name:"Quackie Makers",
//             job : "Makers' favourite rubber duck",
//             birthdate: 2013
//         }  
//         render(<Profile name= {quackie.name}
//             job = {quackie.job}
//             birthdate = {quackie.birthdate}
//             />);
    
//     // Assert
//         expect(screen.getByRole("birthday")).toHaveTextContent(2013);
//     });