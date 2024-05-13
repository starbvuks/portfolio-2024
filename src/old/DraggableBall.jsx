import React, { useState, useRef, useCallback } from 'react';
import { World, Item } from 'react-dom-box2d';
import { motion } from 'framer-motion';

const DraggableBall = ({ onDrag, initialPosition }) => {
 const [position, setPosition] = useState(initialPosition);
 const elementRef = useRef(null);

 const onMouseDown = useCallback((event) => {
    const onMouseMove = (event) => {
      const newPosition = {
        x: position.x + event.movementX,
        y: position.y + event.movementY,
      };
      setPosition(newPosition);
      onDrag(newPosition);
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
 }, [position, onDrag]);

 return (
    <motion.div
      ref={elementRef}
      onMouseDown={onMouseDown}
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        width: 60,
        height: 60,
        borderRadius: '50%',
        backgroundColor: 'blue',
      }}
    />
 );
};
