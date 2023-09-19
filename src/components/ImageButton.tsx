import React from 'react'

import {
    StyleProp,
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
    View,
    ActivityIndicator,
    ImageStyle,
    ImageBackground
} from 'react-native'

import { Icon } from './Icon';

import MText from './Text';

import { Row } from './Wrapper';
import { Colors, Styles } from '../styles';
import { Size } from '../constants';
import { h, w } from '../utils';
import images from '../assets/images';

type IconPosition = 'right' | 'left';
type mode = 'text' | 'outlined' | 'contained' | 'elevated'
interface ImageButtonProps {
    style?: StyleProp<ViewStyle>;
    title?: string | null;
    image?: string;
    onPress?: () => void;
    disabled?: boolean;
    loading?: boolean;
    icon?: string;
    iconColor?: string;
    iconType?: Function;
    iconPosition?: IconPosition;
    textStyle?: TextStyle;
    SvgIcon?: any;
    mode?: mode;
    color?: string;
    loaderColor?: string;
    loaderSize?: number;
    iconSize?: number;
    iconStyle?: ImageStyle;
}

const ImageButton = ({
    style,
    title,
    onPress,
    loading,
    disabled,
    icon,
    iconColor,
    iconType,
    iconPosition,
    textStyle,
    SvgIcon,
    mode,
    color,
    loaderColor,
    iconSize,
    iconStyle,
}: ImageButtonProps) => {
    const isIconAvailable = !!icon && !!iconType;

    let rowStyle = {}
    if (iconPosition) {
        rowStyle = { flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row' }
    }

    const titleColor = mode === 'outlined' || mode === 'text' ? Colors.primary : Colors.white;

    return (
        <TouchableOpacity disabled={disabled} activeOpacity={0.7} onPress={onPress}>
            <ImageBackground
                source={images.imageButton} borderRadius={20} resizeMode="stretch"
                style={[styles.buttonContainer, style, Styles.centered]}
            >
                {loading ? (
                    <ActivityIndicator size="small" color={loaderColor} />
                ) : (
                    <Row style={rowStyle}>
                        {isIconAvailable && (
                            <Icon
                                type={iconType}
                                name={icon}
                                color={iconColor}
                                size={iconSize}
                                style={iconStyle}
                            />
                        )}
                        {SvgIcon && <SvgIcon />}
                        {title && <MText
                            style={[styles.text, textStyle ? textStyle : {}]}
                            color={color ? color : titleColor || Colors.white}>
                            {title}
                        </MText>}
                    </Row>
                )}
            </ImageBackground>
        </TouchableOpacity>
    )
};

ImageButton.defaultProps = {
    loaderColor: Colors.white,
    iconColor: Colors.white,
}

const styles = StyleSheet.create({
    text: {
        fontSize: Size.s14,
        fontWeight: "400",
    },
    buttonContainer: {
        width: Size.wWidth / 1.6,
        height: 60,
        borderRadius: 8,
        alignSelf: "center",
        marginTop: 20,
    }
});

export default ImageButton;
