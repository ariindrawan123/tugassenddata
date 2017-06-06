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

var url = 'http://mhs.rey1024.com/1415051094/adduser.php'; 
  
class mainApp extends Component { 
constructor(props) {
    super(props);
    this.state = {
      nama: "",
      alamat: "",
      notlpn: "",
      idalbum: "",
    };
  }

  onSave() {
    fetch(url + '?nama=' + this.state.nama + '&alamat=' + this.state.alamat + '&no_tlpn=' + this.state.notlpn  + '&id_album=' + this.state.idalbum)
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
        <Text style={styles.toolbar}>Add a new User </Text>
         <TextInput  
          style={styles.input}  
          onChangeText={(e) => this.setState({ nama: e })} 
          text = {this.state.nama}
          placeholder="Nama User" 
        />  
        <TextInput  
          style={styles.input}  
          onChangeText={(e) => this.setState({ alamat: e })} 
          text = {this.state.alamat}
          placeholder="Alamat"  
        />  
        <TextInput  
          style={styles.input}  
          onChangeText={(e) => this.setState({ notlpn: e })} 
          text = {this.state.notlpn}
          placeholder="No Tlpn" 
        />  
        <TextInput  
          style={styles.input}  
          onChangeText={(e) => this.setState({ idalbum: e })} 
          text = {this.state.idalbum}
          placeholder="Id Album"  
        />  
        <TouchableOpacity onPress={() => this.onSave()} style={styles.btn}> 
        <Text>Save!</Text>  
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
        backgroundColor:  '#3498db',  
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
        backgroundColor:  '#3498db',  
        padding:  10, 
        borderRadius: 3,  
        marginBottom: 30, 
    },  
});
export  default mainApp;