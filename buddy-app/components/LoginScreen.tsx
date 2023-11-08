import {TextInput, Text, View, StyleSheet} from 'react-native'

export const Test = () => {
    return (
        <View>
           <Text>Email</Text>
            <TextInput
                style={styles.input}
                placeholder='Email adress'>
            </TextInput>
            <Text>Password</Text>
            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder='Password'
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderRadius: 25,
        borderWidth: 1,
        height: 40,
        padding: 10
    },
});
