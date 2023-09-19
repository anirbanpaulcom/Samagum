import React, { useEffect, useState } from 'react';

// import crashlytics from '@react-native-firebase/crashlytics';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from './styles';
import MText from '../../components/Text';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducer/user';
import BackHeader from './components/BackHeader';
import ImageButton from '../../components/ImageButton';
import { Row } from '../../components/Wrapper';

const cellCount = 4;
const RESEND_OTP_TIME_LIMIT = 30;
let resendOtpTimerInterval: any;

const VerifyOtpScreen = ({ route, navigation }: any) => {
    const dispatch = useDispatch();
    const theme = useTheme()
    const mobile = route?.params?.mobile;
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(RESEND_OTP_TIME_LIMIT);
    const ref = useBlurOnFulfill({ value, cellCount: cellCount });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        // crashlytics().log('Otp Screen Mounted');
    }, [])

    useEffect(() => {
        startResendOtpTimer();
        return () => {
            if (resendOtpTimerInterval) {
                clearInterval(resendOtpTimerInterval);
            }
        };
    }, [resendButtonDisabledTime]);

    const startResendOtpTimer = () => {
        if (resendOtpTimerInterval) {
            clearInterval(resendOtpTimerInterval);
        }
        resendOtpTimerInterval = setInterval(() => {
            if (resendButtonDisabledTime <= 0) {
                clearInterval(resendOtpTimerInterval);
            } else {
                setResendButtonDisabledTime(resendButtonDisabledTime - 1);
            }
        }, 1000);
    };

    const resendOtp = async () => {
        setValue('')
        setLoading(true);
        setError('')
        setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
        startResendOtpTimer();
        setLoading(false);
    };


    const verifyOtp = async () => {
        // setLoading(true);
        if (value.length === 6) { }
        // dispatch(setUser({}));
        navigation.navigate('ForgotPasswordScreen');
        // setLoading(false);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <BackHeader onPress={() => { }} />
                <View style={styles.mainWrapper}>
                    <MText style={styles.titleWrapper}>Verification</MText>
                    <View style={styles.subtitleWrapper}>
                        <MText style={styles.subtitleText}>
                            We’ve send you the verification code on Chetangoyal49@gmail.com
                            <MText style={styles.subtitleTextBold}>
                                {mobile}
                            </MText>
                        </MText>
                    </View>
                    <View style={styles.codeFieldWrapper} >
                        <CodeField
                            ref={ref}
                            {...props}
                            value={value}
                            onChangeText={(text) => setValue(text)}
                            cellCount={cellCount}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell, { color: theme.colors.text }]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            )}
                        />
                    </View>
                    {error && <MText style={styles.errorMsg}>{error}</MText>}
                    <ImageButton
                        title="CONTINUE"
                        onPress={verifyOtp}
                        loading={loading}
                    />
                    <View style={styles.resendWrapper}>
                        {resendButtonDisabledTime !== 0 && <Row>
                            <MText style={styles.subtitleText}>
                                Re-send code in
                            </MText>
                            <View style={{ width: 6 }} />
                            <MText style={styles.resendButton}>
                                0:{resendButtonDisabledTime}
                            </MText>
                        </Row>}
                        {resendButtonDisabledTime <= 0 &&
                            <TouchableOpacity onPress={resendOtp}>
                                <MText style={styles.resendButton}>
                                    Resend Otp
                                </MText>
                            </TouchableOpacity>}
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >
    )
}

export default VerifyOtpScreen;