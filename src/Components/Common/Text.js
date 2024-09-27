import React from 'react';

const Text = ({ styles = '', content }) => {
   return <p className={`${styles}`}>{content}</p>;
};

export default Text;
