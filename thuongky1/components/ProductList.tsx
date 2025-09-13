import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

export default function ProductList() {
  return (
    <View style={styles.listSP}>
      <View style={styles.hang}>
        <View style={styles.sanPham}>
          <Text style={styles.tenSanPham}>SẢN PHẨM THỨ 1</Text>
          <Text style={styles.giaSanPham}>Giá: 500.000đ</Text>
          <TouchableOpacity style={styles.themSanPham}>
            Thêm giỏ hàng
          </TouchableOpacity>
        </View>
        <View style={styles.sanPham}>
          <Text style={styles.tenSanPham}>SẢN PHẨM THỨ 2</Text>
          <Text style={styles.giaSanPham}>Giá: 800.000đ</Text>
          <TouchableOpacity style={styles.themSanPham}>
            Thêm giỏ hàng
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.hang}>
        <View style={styles.sanPham}>
          <Text style={styles.tenSanPham}>SẢN PHẨM THỨ 3</Text>
          <Text style={styles.giaSanPham}>Giá: 300.000đ</Text>
          <TouchableOpacity style={styles.themSanPham}>
            Thêm giỏ hàng
          </TouchableOpacity>
        </View>
        <View style={styles.sanPham}>
          <Text style={styles.tenSanPham}>SẢN PHẨM THỨ 4</Text>
          <Text style={styles.giaSanPham}>Giá: 200.000đ</Text>
          <TouchableOpacity style={styles.themSanPham}>
            Thêm giỏ hàng
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.hang}>
        <View style={styles.sanPham}>
          <Text style={styles.tenSanPham}>SẢN PHẨM THỨ 5</Text>
          <Text style={styles.giaSanPham}>Giá: 900.000đ</Text>
          <TouchableOpacity style={styles.themSanPham}>
            Thêm giỏ hàng
          </TouchableOpacity>
        </View>
        <View style={styles.sanPham}>
          <Text style={styles.tenSanPham}>SẢN PHẨM THỨ 6</Text>
          <Text style={styles.giaSanPham}>Giá: 1.000.000đ</Text>
          <TouchableOpacity style={styles.themSanPham}>
            Thêm giỏ hàng
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.hang}>
        <View style={styles.sanPham}>
          <Text style={styles.tenSanPham}>SẢN PHẨM THỨ 7</Text>
          <Text style={styles.giaSanPham}>Giá: 500.000đ</Text>
          <TouchableOpacity style={styles.themSanPham}>
            Thêm giỏ hàng
          </TouchableOpacity>
        </View>
        <View style={styles.sanPham}>
          <Text style={styles.tenSanPham}>SẢN PHẨM THỨ 8</Text>
          <Text style={styles.giaSanPham}>Giá: 730.000đ</Text>
          <TouchableOpacity style={styles.themSanPham}>
            Thêm giỏ hàng
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listSP: {
    flex: 5,
  },
  hang: {
    flex: 1,
    flexDirection: 'row',
  },
  sanPham: {
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    margin: 5,
  },
  tenSanPham: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    margin: 10,
  },
  giaSanPham: {
    fontSize: 13,
    textAlign: 'center',
  },
  themSanPham: {
    flex: 1,
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    margin: 10,
  },
});
