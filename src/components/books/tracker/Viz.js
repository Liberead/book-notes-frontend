import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DrawLine from 'components/books/tracker/DrawLine';

const Viz = props => {
  useEffect(() => {
    if (props.selectedBook.tracking) {
      DrawLine(props);
    }
  }, [props]);
  return <div className="viz" />;
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps)(Viz);
