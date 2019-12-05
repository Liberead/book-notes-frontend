import React, { useRef, useEffect, useState } from 'react';
import Viz from 'components/books/tracker/Viz';

const styles = {
  container: {
    height: '50%',
    width: '80%'
  }
};

const BookTrackerReport = () => {
  const [lineDimensions, setLineDimensions] = useState({
    width: 0,
    height: 0
  });
  const { width, height } = lineDimensions;
  const ref = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      resetRefDimension();
    };

    window.addEventListener('resize', handleResize);
    return _ => {
      window.removeEventListener('resize', handleResize);
    };
  });
  useEffect(() => {
    resetRefDimension();
  }, [ref.current]);

  const resetRefDimension = () => {
    const width = ref.current ? ref.current.clientWidth : 0;
    const height = ref.current ? ref.current.clientHeight : 0;

    setLineDimensions({
      width: width,
      height: height
    });
  };

  return (
    <div style={styles.container} ref={ref}>
      <Viz width={width} height={height} />
    </div>
  );
};

export default BookTrackerReport;
