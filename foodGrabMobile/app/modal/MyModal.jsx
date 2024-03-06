import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Modal from "react-native-modal";

const MyModal = ({isModalOpen, emptyField, closeModal, samePassword}) => {
  return (
    <View>
        <Modal 
            isVisible={isModalOpen} backdropOpacity={0.50} 
            animationIn={'slideInDown'} animationOut={'fadeOut'} 
            animationInTiming={500} animationOutTiming={10}
        >
            <View style={styles.container}>
                <View>
                    <Text>{emptyField}</Text>
                    <Text>{samePassword}</Text>
                </View>
                <TouchableOpacity onPress={closeModal}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    </View>
  );
};

export default MyModal;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        width: '90%',
        maxHeight: '20%',
        alignSelf : 'center',
        borderRadius : 10
    },
});
