import {useState} from 'react';

const useUploadModal = () => {
    const [showupload, setIsShowing] = useState(false);
  
    function toggleupload() {
      setIsShowing(!showupload);
    }
  
    return {
      showupload,
      toggleupload,
    }
  };

export default useUploadModal;
  