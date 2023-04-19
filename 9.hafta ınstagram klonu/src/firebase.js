import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile
} from "firebase/auth";
import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore"
import toast from "react-hot-toast";
import {userHandle} from "utils";
const firebaseConfig = {
  apiKey: "AIzaSyBUK7fH3pz_ZfB3nzT_dJhEaTAP6AtKrzk",
  authDomain: "instaclone61.firebaseapp.com",
  projectId: "instaclone61",
  storageBucket: "instaclone61.appspot.com",
  messagingSenderId: "228872799683",
  appId: "1:228872799683:web:eb6dcb58b84bc6da096976",
  measurementId: "G-8J9JF92N4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const db = getFirestore(app)

onAuthStateChanged(auth, async user => {
  if (user) {
    console.log(user)
        const docSnap = await getDoc(doc(db, "users", user.uid))
    const dbUser  = docSnap.data()
        let data = {
            uid: dbUser.uid,
            fullName: dbUser.fullName,
            email: dbUser.email,
      username: dbUser.username
        }
        userHandle(data)
    } else {
        userHandle(false)
    }
})

export const login = async (email, password) => {
	try {
		return await signInWithEmailAndPassword(auth, email, password)
	} catch (err) {
		toast.error(err.code)
	}
}

export const getUserInfo = async uname => {
	const username = await getDoc(doc(db, "usernames", uname))
	if (username.exists()) {
		return (await getDoc(doc(db, "users", username.data().user_id))).data()
	} else {
		toast.error("Kullanıcı bulunamadı!")
		throw new Error("Kullanıcı bulunamadı!")
	}
}

export const register = async ({email, password, full_name, username}) => {
	try {
		const user = await getDoc(doc(db, "usernames", username))
		if (user.exists()) {
			toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor.`)
		} else {
			const response = await createUserWithEmailAndPassword(auth, email, password)
			if (response.user) {

				await setDoc(doc(db, "usernames", username), {
					user_id: response.user.uid
				})

				await setDoc(doc(db, "users", response.user.uid), {
					fullName: full_name,
					username: username,
					followers: [],
					following: [],
					notifications: [],
					website: '',
					bio: '',
					phoneNumber: '',
					gender: '',
					posts: 0
				})

				await updateProfile(auth.currentUser, {
					displayName: full_name
				})

				return response.user

			}
		}
	} catch (err) {
		toast.error(err.code)
	}
}

export const logout = async () => {
	try {
		await signOut(auth)
	} catch (err) {
		toast.error(err.code)
	}
}