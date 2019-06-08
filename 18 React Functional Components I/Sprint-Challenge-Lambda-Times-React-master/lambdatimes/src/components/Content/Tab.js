import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  let classNameVal ="";
  if (props.selectedTab === props.tab){
    classNameVal = "tab active-tab";
  } else {
    classNameVal = "tab";
  }
    
    
  return (
      <div
        className={classNameVal}
        onClick={() => {
          /* Replace this dummy click handler function with your selectTabHandler function from props 
           you'll need to pass the `tab` in as an argument to this handler. */
           props.selectTabHandler(props.tab)
        }}
      >
        {props.tab.toUpperCase()}
      </div>
    );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string
};

export default Tab;
