import {TextInput, Text, View, StyleSheet, Image, Button, Pressable} from 'react-native'

export const Test = () => {
    return (
        <View style={styles.innerContainer}>
            {/*<Image style={styles.image} source={require('./textures/Plant Icon.png')}></Image> */}
           <Text style={styles.text}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder='Email address'>
            </TextInput>
            <Text style={styles.text}>Password</Text>
            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder='Password'
            ></TextInput>
            <Pressable style={styles.button}>
                <Text>Login</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,
      },
    input:{
        borderRadius: 20,
        borderWidth: 1,
        height: 40,
        paddingLeft: 20 
    },
    text:{
        paddingVertical: 10,
        paddingLeft: 20,
    },
    image: {
        width: 200,
        height: 200
    },
    button: {
        borderRadius: 20,
        borderWidth: 1,
        paddingTop: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
