import React from 'react';

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch); //Sempre que adiciona um evento no window, temos que limpá-lo no retorno
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);
  return match;
};

export default useMedia;
