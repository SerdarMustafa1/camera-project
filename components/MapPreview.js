import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import ENV from "../env";

const MapPreview = props => {
  let imagePreviewUrl;

  // if (props.location) {
  //   imagePreviewUrl = `https://image.maps.api.here.com/mia/1.6/mapview?app_id=OXcK9OBqocw4MCzTUwIo&app_code=j2py9TI4EsA_Bn3fhA9LMA&lat=37.7442&lon=-119.5931,1000&vt=0&z=14`;
  // }

  if (props.location) {
    imagePreviewUrl = `https://image.maps.api.here.com/mia/1.6/mapview?app_id=${ENV.HEREID}&app_code=${ENV.HERECODE}&lat=${props.location.lat}
    &lon=${props.location.lng}
    &vt=0
    &z=14`;
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.mapPreview, ...props.style }}
    >
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center"
  },
  mapImage: {
    width: "100%",
    height: "100%"
  }
});

export default MapPreview;
