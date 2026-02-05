
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
     
      <Drawer.Screen
        name="(tabs)"
        options={{ title: "Home" }}
      />

   
      <Drawer.Screen
        name="(sidebar)/Customer"
        options={{ title: "Customer" }}
      />
      
      <Drawer.Screen
        name="(sidebar)/Profile"
        options={{ title :"Profile"}}
      />
      <Drawer.Screen
        name="(sidebar)/setting"
        options={{ title :"setting"}}
      />
      <Drawer.Screen
        name="(sidebar)/vieworder"
        options={{ title :"vieworder"}}
      />
      
      <Drawer.Screen
        name="(sidebar)/Cancelorder"
        options={{ title :"Cancelorder"}}
      />

      <Drawer.Screen
        name="(sidebar)/Paymentscreen"
        options={{ title :"Paymentscreen"}}
      />

      <Drawer.Screen
        name="(sidebar)/Warehouse"
        options={{ title :"Warehouse"}}
      />

      <Drawer.Screen
        name="(sidebar)/Return"
        options={{ title :"Return"}}
      />

        <Drawer.Screen
        name="(sidebar)/logout"
        options={{ title: "logout" }}
      />
      
     

    </Drawer>
    
  );
}




