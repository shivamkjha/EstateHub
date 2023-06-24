const firebaseConfig = {
    apiKey: "AIzaSyBkoHClU8h1DlD4U1sFkbaxIM0N6Y2QH-A",
    authDomain: "estatehub-fe927.firebaseapp.com",
    projectId: "estatehub-fe927",
    storageBucket: "estatehub-fe927.appspot.com",
    messagingSenderId: "1042136791315",
    appId: "1:1042136791315:web:9341ef3f0d8d0142aa82e6",
    measurementId: "G-HX617RDKQN"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

function submit() {
    const email = document.getElementById('new_email').value;
    const password = document.getElementById('new_password').value;
    const repass = document.getElementById('re_enter_password').value;
  
    if (!validate_email(email) || !validate_password(password)) {
        alert('Invalid email or password');
        return;
    }
  
    if (password !== repass) {
        alert('Passwords do not match');
        return;
    }
  
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userRef = database.ref('users/' + user.uid);
  
            const user_data = {
                email: email,
                password: password,
                repass: repass,
                last_login: Date.now()
            };
  
            userRef.set(user_data)
                .then(() => {
                    alert('User data saved successfully');
                    // You can redirect the user to another page here
                })
                .catch((error) => {
                    console.error('Error saving user data:', error);
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
  
            alert(errorMessage);
        });
}

function validate_email(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
}

function validate_password(password) {
    return password.length >= 8;
}