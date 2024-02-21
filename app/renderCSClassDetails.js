import React from 'react';

const renderCSClassDetails = (csClass) => {
    // Helper function to render nested objects
    const renderNestedObject = (obj) => {
      return (
        <ul>
          {Object.entries(obj).map(([key, value]) => {
            // Handle further nested objects recursively
            if (typeof value === 'object' && value !== null) {
              return (
                <li key={key}>
                  <strong>{key}:</strong> {renderNestedObject(value)}
                </li>
              );
            } else {
              // Convert undefined values to an empty string and others to string
              const displayValue = value === undefined ? '' : value.toString();
              return (
                <li key={key}>
                  {key}: {displayValue}
                </li>
              );
            }
          })}
        </ul>
      );
    };
  
    return (
      <div>
        {Object.entries(csClass).map(([key, value]) => {
          // Directly render the property if it's not an object
          if (typeof value !== 'object' || value === null) {
            const displayValue = value === undefined ? '' : value.toString();
            return (
              <p key={key}>
                <strong>{key}:</strong> {displayValue}
              </p>
            );
          } else {
            // Use renderNestedObject for nested objects
            return (
              <div key={key}>
                <strong>{key}:</strong> {renderNestedObject(value)}
              </div>
            );
          }
        })}
      </div>
    );
  };
  
  

export default renderCSClassDetails;
