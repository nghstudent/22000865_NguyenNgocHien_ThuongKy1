import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ProductList from './components/ProductList';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tieuDe}>DANH SÁCH SẢN PHẨM</Text>
      </View>
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  tieuDe: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
