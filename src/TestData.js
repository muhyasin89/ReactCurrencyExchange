import React from 'react';

class TestData extends React.Component {
    render() {
      const data = [
        {
            "id":1,
            "name": "wow"
        },
      ];
  
      return (
        <ul>
          {data.map(item => {
            return <ul>
                    <li>{item.id}</li>
                    <li>{item.name}</li>
                </ul>;
          })}
        </ul>
      );
    }
  }

export default TestData;