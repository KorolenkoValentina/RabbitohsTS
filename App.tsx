import React from 'react';
import Navigator from './src/navigations/Navigation';

const App: React.FC <{ navigation: any }> = ({ navigation })=> {
  return (
    
      <Navigator navigation={navigation}/>
      
    
  );
}

export default App;



