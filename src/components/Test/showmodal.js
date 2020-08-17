import {useState} from 'react';

const useTestModal = () => {
    const [showtest, setIsShowing] = useState(false);
  
    function toggletest() {
      setIsShowing(!showtest);
    }
  
    return {
      showtest,
      toggletest,
    }
  };

export default useTestModal;
  