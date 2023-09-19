import { View, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import CustomLoader, { CustomPanel } from '../../components/CustomLoader';
import styles from './styles';
import SignUpStepOne from './components/SignUpStepOne';
import SignUpStepTwo from './components/SignUpStepTwo';
import SignUpInfoStepThree from './components/SignUpInfoStepThree';


export default function RegisterScreen({ navigation }: any) {
    const dispatch = useDispatch();
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [steps, setSteps] = useState(0);

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />

            {steps === 0 && <SignUpStepOne setSteps={setSteps} navigation={navigation} />}

            {steps === 1 && <SignUpStepTwo
                setSteps={setSteps}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                cPassword={cPassword}
                setCPassword={setCPassword}
                navigation={navigation}
            />}

            {steps === 2 && <SignUpInfoStepThree
                setSteps={setSteps}
                navigation={navigation}
                cPassword={cPassword}
                email={email}
                password={password}
                setLoading={setLoading}
            />}

            <CustomPanel loading={loading} />
            <CustomLoader loading={loading} />
        </View>
    )
}

