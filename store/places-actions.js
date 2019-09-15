export const ADD_PlACE = "ADD_PLACE";

export const addPlace = title => {
  return { type: ADD_PlACE, placeData: { title: title } };
};
