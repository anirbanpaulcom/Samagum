import React, { useEffect, useState } from 'react';

import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';
import MText from '../../components/Text';
import { useDispatch } from 'react-redux';
import BackHeader from './components/BackHeader';
import ImageButton from '../../components/ImageButton';
import InputBox from '../../components/InputBox';
import Svg from '../../assets/svg';
import { setUser } from '../../redux/reducer/user';

const ForgotPasswordScreen = ({ route, navigation }: any) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");

    function handleSubmit() {
        // dispatch(setUser({}));
        navigation?.navigate("WelcomeScreen")
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <BackHeader onPress={() => { }} />
                <View style={styles.mainWrapper}>
                    <MText style={styles.titleWrapper}>Resset Password</MText>
                    <View style={styles.subtitleWrapper}>
                        <MText style={styles.subtitleText}>
                            Please enter your email address to request a password reset
                        </MText>
                    </View>

                    <View style={{ marginTop: 12 }}>
                        <InputBox
                            value={email}
                            keyboardType="email-address"
                            onChangeText={(val) => {
                                setEmail(val)
                            }}
                            placeholder='abc@email.com'
                            placeholderTextColor="#8D8D8D"
                            LeftIcon={<Svg.MessageIcon />}
                        />
                    </View>

                    <ImageButton
                        title="SEND"
                        onPress={handleSubmit}
                        loading={loading}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback >
    )
}

export default ForgotPasswordScreen;