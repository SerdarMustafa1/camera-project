import React from "react";
import { View, Image, StyleSheet } from "react-native";
import * as ENV from "../env";

const MapPreview = props => {
  let imagePreviewUrl;

  if (props.location) {
    imagePreviewUrl = `https://image.maps.api.here.com/mia/1.6/mapview?app_id=${ENV.HEREID}&app_code=${ENV.HERECODE}&lat=${props.location.lat}
    &lon=${props.location.lng}
    &vt=0
    &z=14`;
  }

  return (
    <View style={{ ...styles.mapPreview, ...props.style }}>
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        props.children
      )}
    </View>
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
