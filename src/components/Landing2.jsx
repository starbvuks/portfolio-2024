/* eslint-disable @next/next/no-img-element */
"use client";
import "regenerator-runtime/runtime";

import React, { useState, useRef } from 'react';
import { World, Item } from 'react-dom-box2d';
import PhysicsSimulation from './PhysicsSimulation';

const Landing = () => {
 const [balls, setBalls] = useState([
    { id: 1, position: { x: 50, y: 50 } },
    { id: 2, position: { x: 100, y: 100 } },
    // Add more balls as needed
 ]);

 const handleDrag = (newPosition, index) => {
    const updatedBalls = balls.map((ball, i) =>
      i === index ? { ...ball, position: newPosition } : ball
    );
    setBalls(updatedBalls);
    // Here, you might need to manually update the physics world
    // to reflect the new position of the ball. This could involve
    // setting the position of the corresponding physics body or
    // applying forces to it.
 };

 const matterContainerRef = useRef(null);

 return (
    <div className="h-[100vh] overflow-auto" ref={matterContainerRef}>
      <PhysicsSimulation matterContainerRef={matterContainerRef} />
    </div>
 );
};


export default Landing;