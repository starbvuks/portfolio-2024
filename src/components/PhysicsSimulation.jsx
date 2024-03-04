import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const PhysicsSimulation = ({ matterContainerRef }) => {
 useEffect(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();

    const render = Render.create({
      element: matterContainerRef.current,
      engine: engine,
      options: {
        width: matterContainerRef.current.clientWidth,
        height: matterContainerRef.current.clientHeight, // Adjust height dynamically
        background: 'transparent',
        wireframes: false,
      },
    });

    render.canvas.style.border = 'black';

    const runner = Runner.create();
    const world = engine.world;

    // Create objects within the confined space
    const boxA = Bodies.circle(400, 200, 60, 60);
    const boxB = Bodies.circle(450, 50, 60, 60);

    const ground = Bodies.rectangle(
      matterContainerRef.current.clientWidth / 2,
      matterContainerRef.current.clientHeight + 60 / 2,
      matterContainerRef.current.clientWidth * 5,
      60,
      { isStatic: true }
    );

    // Create collision boundaries
    let leftWall = Bodies.rectangle(
      0 - 60 / 2,
      matterContainerRef.current.clientHeight / 2,
      60,
      matterContainerRef.current.clientHeight * 5,
      { isStatic: true }
    );
    let rightWall = Bodies.rectangle(
      matterContainerRef.current.clientWidth + 60 / 2,
      matterContainerRef.current.clientHeight / 2,
      60,
      matterContainerRef.current.clientHeight * 5,
      { isStatic: true }
    );
    let topWall = Bodies.rectangle(
      matterContainerRef.current.clientWidth / 2,
      0 - 60 / 2,
      matterContainerRef.current.clientWidth * 5,
      60,
      { isStatic: true }
    );
    let bottomWall = Bodies.rectangle(
      matterContainerRef.current.clientWidth / 2,
      matterContainerRef.current.clientHeight + 60 / 2,
      matterContainerRef.current.clientWidth * 5,
      60,
      { isStatic: true }
    );

    World.add(world, [boxA, boxB, ground, leftWall, rightWall, topWall, bottomWall]);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(world, mouseConstraint);

    Render.run(render);
    Runner.run(runner, engine);

    // Function to handle window resize
    const handleResize = () => {
      if (matterContainerRef.current) {
        render.canvas.width = matterContainerRef.current.clientWidth;
        render.canvas.height = matterContainerRef.current.clientHeight; // Adjust height dynamically

        Matter.Body.setPosition(
          ground,
          Matter.Vector.create(
            matterContainerRef.current.clientWidth / 2,
            matterContainerRef.current.clientHeight
          )
        );

        // Adjust collision boundaries
        Matter.Body.setPosition(
          leftWall,
          Matter.Vector.create(
            0 - 60 / 2,
            matterContainerRef.current.clientHeight / 2
          )
        );
        Matter.Body.setPosition(
          rightWall,
          Matter.Vector.create(
            matterContainerRef.current.clientWidth + 60 / 2,
            matterContainerRef.current.clientHeight / 2
          )
        );
        Matter.Body.setPosition(
          topWall,
          Matter.Vector.create(
            matterContainerRef.current.clientWidth / 2,
            0 - 60 / 2
          )
        );
        Matter.Body.setPosition(
          bottomWall,
          Matter.Vector.create(
            matterContainerRef.current.clientWidth / 2,
            matterContainerRef.current.clientHeight + 60 / 2
          )
        );
      }
    };

    // Set up the resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      window.removeEventListener('resize', handleResize);
    };
 }, []);

 return (
    <div
      ref={matterContainerRef}
      className="z-10 bg-transparent"
    ></div>
 );
};

export default PhysicsSimulation;
