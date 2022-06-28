export const getIdFromUrl = (url) => {
  let urlSplited = url.split("/");
  return urlSplited[urlSplited.length - 2];
};

export const setFirstLetterCapitalize = (string = "pokemon") => {
  let getCapitalized = string.charAt(0).toUpperCase();
  let transform = `${getCapitalized}${string.slice(1)}`;
  return transform;
};
