/* eslint-disable @next/next/no-img-element */
"use client";
import "regenerator-runtime/runtime";

import React, { useState, useRef } from 'react';
import gsap from "gsap";
import {useGsap} from "@gsap/react"
import PhysicsSimulation from './PhysicsSimulation';

const Landing = () => {

 const matterContainerRef = useRef(null);

 return (
    <div className="h-[100vh] overflow-auto">
      <PhysicsSimulation matterContainerRef={matterContainerRef} />
    </div>
 );
};


export default Landing;