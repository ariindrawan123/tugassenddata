import  React,  { Component, Proptypes } from  'react';  
import  { 
Alert,  
ScrollView,
StyleSheet,
Text,
TextInput,
TouchableOpacity,
View
} from  'react-native'; 

var url = 'http://mhs.rey1024.com/1415051073/daftar.php'; 
  
class mainApp extends Component { 
constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onSave() {
    fetch(url + '?username=' + this.state.username + '&password=' + this.state.password)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          Alert.alert("Fail to Input");
         }
         else 
       {
          Alert.alert("Berhasil Input");
        }  
        
      })
      .done();
  }

  
  render () {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.toolbar}>Tambah User </Text>
         <TextInput  
          style={styles.input}  
          onChangeText={(e) => this.setState({ username: e })} 
          text = {this.state.username}
          placeholder="username" 
        />  
        <TextInput  
          style={styles.input}  
          onChangeText={(e) => this.setState({ password: e })} 
          text = {this.state.password}
          placeholder="password"  
        />  
        <TouchableOpacity onPress={() => this.onSave()} style={styles.btn}> 
        <Text>Simpan</Text>  
        </TouchableOpacity> 
        </ScrollView> 
      </View> 
    );
  }
}

const styles  = StyleSheet.create({ 
    container:  { 
        flex: 1,  
        backgroundColor:  '#fff', 
    },  
    toolbar:  { 
        backgroundColor:  '#c0ca33',  
        color:  '#fff', 
        textAlign:  'center', 
        padding:  25, 
        fontSize: 20, 
    },  
    content:  { 
        flex: 1,  
        padding:  10, 
    },  
    preview:  { 
        backgroundColor:  '#bdc3c7',  
        flex: 1,  
        height: 500,  
    },  
    input:  { 
        backgroundColor:  '#ecf0f1',  
        borderRadius: 3,  
        height: 40, 
        padding:  5,  
        marginBottom: 10, 
        flex: 1,  
    },  
    btn:  { 
        backgroundColor:  '#c0ca33',  
        padding:  10, 
        borderRadius: 3,  
        marginBottom: 30, 
    },  
});
export  default mainApp;