import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getUsers } from '../services/api';


export default function HomeScreen() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(response => {
      setUsers(response);
    }).catch(error => {
      console.error("Hata :" , error);
    })
  }, [])
  

  return (
    <View style={styles.container}>
       <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>Kullanıcı Adı: {item.userName}</Text>
            <Text>Parola: {item.password}</Text>
          </View>
        )}
      />
    </View>
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
