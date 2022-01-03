import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./Navigator/DrawerNavigator"
export default function app(){
  return(
<NavigationContainer>

<DrawerNavigator />
  
    </NavigationContainer>
  );
}