import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';

export default () => {
  const [image, setImage] = useState(null);

  const camera = async () => {
    let result = await ImagePicker.launchCameraAsync();
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }
  return (
    <View>
      <Button
        title="camera roll"
        onPress={pickImage}
      />
      <Button
        title="take a picture"
        onPress={camera}
      />
      {image &&
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      }
    </View>
  );
}

