import React, {useState} from 'react';
import { TouchableOpacity, Text, Button } from "react-native"

interface TouchButtonProps {
    label: string
    onPress?: () => void
}

export const TouchText = ({label, ...props}: TouchButtonProps) => {
    return (
        <TouchableOpacity {...props}>
            <Text>{ label }</Text>
        </TouchableOpacity>
    )
}
