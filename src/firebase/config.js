import firebase from 'firebase/app'
import 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA9K5rqu1OppzbmI32ZY3dQggi4gQ_Z09s',
  authDomain: 'myexpenses-bc18c.firebaseapp.com',
  projectId: 'myexpenses-bc18c',
  storageBucket: 'myexpenses-bc18c.appspot.com',
  messagingSenderId: '373442039854',
  appId: '1:373442039854:web:1d5e604566f5d09abccfbf',
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }
