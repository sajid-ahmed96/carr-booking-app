import app from "./firebaseconfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {getDatabase, ref, set} from "firebase/database";

const auth = getAuth(app);
const db = getDatabase(app);

function userSignIn (obj)  {
    return new Promise((resolve, reject)=>{
        createUserWithEmailAndPassword(auth, obj.Email, obj.Password)
        .then((res)=>{
            let uid = res.user.uid;
            obj.id = uid;
            const userReference = ref(db, `user/${obj.id}/`)
            set(userReference,obj)
            .then(()=>{
                resolve('Data and User stored successfully')
                console.log(obj)
            })
            .catch((err)=>{
                reject(err.message)
            })
        })
        .catch((err)=>{
            reject(err.message)            
        })
    })  
}

let userlogin = (obj) => {
    return new Promise ((resolve, reject) => {
        signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then((res)=> {
            let uid = res.user.uid;
            let reference = ref(db, `user/${uid}`)
            onValue(reference, (dt) => {
                if(dt.exists()) {
                    resolve(dt.val())
                }
                else{
                    reject("No data found")
                }
            })
        })
        .catch((err) => {
            console.log(err.message)
        }) 
    })
}

export {userSignIn, userlogin}
