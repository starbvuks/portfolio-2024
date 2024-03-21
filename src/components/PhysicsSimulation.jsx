import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const PhysicsSimulation = ({ matterContainerRef }) => {
 useEffect(() => {
  const reactLogo = "public/assets/logos/react.png";

    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();

    const topContentHeight = matterContainerRef.current.clientHeight * 0.115;
    const availableHeight = matterContainerRef.current.clientHeight - topContentHeight;

    // function createImageTexture(imageUrl) {
    //   return new Promise((resolve) => {
    //     const img = new Image();
    //     img.src = imageUrl;
    //     img.onload = () => {
    //       const canvas = document.createElement("canvas");
    //       const ctx = canvas.getContext("2d");
    //       canvas.width = img.width;
    //       canvas.height = img.height;
    //       ctx.drawImage(img, 10, 10, img.width, img.height);
    //       resolve(canvas);
    //     };
    //   });
    // }

    const render = Render.create({
      element: matterContainerRef.current,
      engine: engine,
      options: {
        width: matterContainerRef.current.clientWidth,
        height: availableHeight,
        background: "transparent",
        wireframes: false,
      },
    });

    render.canvas.style.border = "black";

    const runner = Runner.create();
    const world = engine.world;

    // Create a ball with the React logo
    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
         const img = new Image();
         img.onload = () => {
           const canvas = document.createElement('canvas');
           canvas.width = img.width;
           canvas.height = img.height;
           const ctx = canvas.getContext('2d');
           ctx.drawImage(img, 0, 0);
           resolve(canvas); // Resolve with the canvas instead of the image
         };
         img.onerror = reject;
         img.src = url;
      });
     };
     
     const createBallWithLogo = async () => {
      try {
         const canvas = await loadImage("/assets/orange-sq.png"); // Now we expect a canvas
         const ball = Bodies.circle(450, 50, 60, {
           render: {
             sprite: {
               texture: canvas, // Use the canvas as the texture
               xScale: 1,
               yScale: 1,
             },
           },
         });
         World.add(world, [ball]);
      } catch (error) {
         console.error("Failed to load image:", error);
      }
     };
     
     createBallWithLogo();

    // let boxA = Bodies.circle(450, 50, 60, 60, {
    //   render: {
    //     sprite: {
    //       texture: "public/assets/logos/react.png",
    //       xScale: 1,
    //       yScale: 1,
    //     },
    //   },
    // });
    const boxB = Bodies.circle(450, 50, 60, 60);

    const ground = Bodies.rectangle(
      matterContainerRef.current.clientWidth / 2,
      availableHeight,
      matterContainerRef.current.clientWidth * 5,
      2,
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
      availableHeight,
      matterContainerRef.current.clientWidth * 5,
      2,
      { isStatic: true }
    );

    World.add(world, [boxB, ground, leftWall, rightWall, topWall, bottomWall]);

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
        render.canvas.height = matterContainerRef.current.clientHeight;

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
            availableHeight
          )
        );
      }
    };

    // Set up the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      window.removeEventListener("resize", handleResize);
    };
 }, []);

 return <div ref={matterContainerRef} className="z-10 bg-transparent"></div>;
};

export default PhysicsSimulation;
