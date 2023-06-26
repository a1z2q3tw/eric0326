const firebaseConfig = {
    apiKey: "AIzaSyCglH187r14crOE-vQNQWeqSU6y6jOZitk",
    authDomain: "eric0326-2a8d7.firebaseapp.com",
    databaseURL: "https://eric0326-2a8d7-default-rtdb.firebaseio.com",
    projectId: "eric0326-2a8d7",
    storageBucket: "eric0326-2a8d7.appspot.com",
    messagingSenderId: "731190237026",
    appId: "1:731190237026:web:bfe179cce2da6f8ba33e3b"
};

const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}

; (async () => {
    let result = await write('BBB', 'test')
    console.log(result)

    let response = await read('test')
    console.log(response)

    listen('test', (value) => {
        console.log(value)
    })
})()