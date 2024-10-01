// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZHoDn9UKnMojiiVRsGeMMFoS2cyCg34U",
  authDomain: "myfirebase-5e456.firebaseapp.com",
  projectId: "myfirebase-5e456",
  storageBucket: "myfirebase-5e456.appspot.com",
  messagingSenderId: "177336369159",
  appId: "1:177336369159:web:4461079b67653091d8aaa2",
  measurementId: "G-WWEJN9C74F"
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignup = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuário creado com sucesso:', user);
      })
      .catch((error) => {
        const errorcode = error.code;
        const errorMessage = error.message;
        console.error('Erro ao criar usuário', error);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder = "Email"
        value = {email}
        onChangeText = {setEmail}
      />
      <TextInput
        placeholder = "Senha"
        secureTextEntry
        value = {password}
        onChangeText = {setPassword}
      />
      <Button title = "Cadastrar" onPress = {handleSignup}/>
    </View>
  );
};

export default App
