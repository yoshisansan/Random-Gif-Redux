import giphyAPI from "../APIs/giphyAPI";
import remove from "../Removes/removeImg";

export const axiosGif = data => ({
  type: "GET_GIF",
  payload: data
});

export const switchOn = () => ({
  type: "SWITCH_ON"
});

export const switchOff = () => ({
  type: "SWITCH_OFF"
});

export const waitSwitch = () => ({
  type: "WAIT"
});

export const hitGiphy = () => {
  return dispatch => {
    dispatch(switchOn());

    giphyAPI().then(res => {
      const data = res.data.data;
      const getUrls = data.map(item => item.images.downsized.url);
      const list = remove(getUrls);
      loop(list);
    });

    const loop = list => {
      setTimeout(() => {
        console.log(list.length);
        let random = Math.floor(Math.random() * list.length);
        dispatch(axiosGif(list[random]));
        loop(list);
      }, 1000);
    };
  };
};
