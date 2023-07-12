import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UseEffectHookExample from "./src/Hooks/UseEffectHookExample";
import { RootSiblingParent } from 'react-native-root-siblings';


export default function App() {
  return (
      <RootSiblingParent>
          <View style={styles.container}>
              <UseEffectHookExample/>
          </View>
      </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
