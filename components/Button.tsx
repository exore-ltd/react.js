import {ActivityIndicator, StyleSheet, Text, TouchableOpacity,} from "react-native"

import {colors} from "../../constants/colors"

interface IProps {
    text: string
    isDisabled: boolean
    onConfirm: () => void
    height?: number
    light?: boolean
    isLoading?: boolean
}

export const Button = ({
                           text,
                           isDisabled,
                           onConfirm,
                           height,
                           light,
                           isLoading,
                       }: IProps) => (
    <TouchableOpacity
        style={[
            light ? styles.lightButton : styles.button,
            isDisabled && (light ? styles.lightDisabled : styles.buttonDisabled),
            height && {height},
        ]}
        onPress={onConfirm}
        disabled={isDisabled}
    >
        {!isLoading ? (
            <Text
                style={[
                    light ? styles.lightText : styles.buttonText,
                    isDisabled &&
                    (light ? styles.lightTextDisabled : styles.textDisabled),
                ]}
            >
                {text}
            </Text>
        ) : (
            <ActivityIndicator color={colors.WHITE}/>
        )}
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: colors.BERN_RED,
    },
    lightButton: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: colors.WHITE,
        borderColor: colors.BERN_RED,
        borderWidth: 1,
    },
    buttonDisabled: {
        backgroundColor: colors.WOLFRAM,
    },
    buttonText: {
        color: colors.WHITE,
        fontSize: 16,
        fontWeight: "700",
        fontFamily: "Arial",
    },
    lightText: {
        color: colors.BERN_RED,
        fontSize: 16,
        fontWeight: "700",
        fontFamily: "Arial",
    },
    lightDisabled: {
        borderColor: colors.WOLFRAM,
    },
    lightTextDisabled: {color: colors.WOLFRAM},
    textDisabled: {},
})
