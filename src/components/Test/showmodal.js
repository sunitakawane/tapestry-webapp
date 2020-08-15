import {useState} from 'react';

const useTestModal = () => {
    const [showTest, setIsShowing] = useState(false);
  
    function toggletest() {
      setIsShowing(!showTest);
    }
  
    return {
      showTest,
      toggletest,
    }
  };

export default useTestModal;
  