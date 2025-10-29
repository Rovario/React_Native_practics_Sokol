import React, { useState } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function HomeScreen() {
  const [cartCount, setCartCount] = useState<number>(0);

  const products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Samsung Galaxy',
      price: 15999,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook',
      price: 45999,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Навушники AirPods Pro',
      price: 8999,
      image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Планшет iPad Air',
      price: 24999,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Розумний годинник Apple Watch',
      price: 12999,
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Бездротова колонка JBL',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop'
    }
  ];

  const addToCart = (productName: string): void => {
    setCartCount(cartCount + 1);
    
    Alert.alert(
      'все вийшло',
      `"${productName}" додано до кошика`,
      [{ text: 'OK' }]
    );
  };

  const goToCart = (): void => {
    Alert.alert(
      'Кошик ',
      `У вашому кошику ${cartCount} товарів`,
      [{ text: 'Закрити' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6200ee" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}> магаз техніки</Text>
        <Text style={styles.headerSubtitle}>Електроніка та гаджети</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Популярні товари</Text>
        
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
              resizeMode="cover"
            />
            
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price} ₴</Text>
              
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => addToCart(product.name)}
                activeOpacity={0.7}
              >
                <Text style={styles.addButtonText}> Додати в кошик</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}


        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.cartButton} 
          onPress={goToCart}
          activeOpacity={0.8}
        >
          <Text style={styles.cartButtonText}>
            Перейти до кошика ({cartCount})
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },


  header: {
    backgroundColor: '#6200ee',
    padding: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e0e0e0',
    textAlign: 'center',
    marginTop: 5,
  },

  scrollView: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    margin: 15,
    marginBottom: 10,
  },

  productCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
  },
  productInfo: {
    padding: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 12,
  },

  addButton: {
    backgroundColor: '#6200ee',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },


  footer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    elevation: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cartButton: {
    backgroundColor: '#03dac6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});