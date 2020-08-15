import {useState} from 'react';

const useUploadModal = () => {
    const [showUpload, setIsShowing] = useState(false);
  
    function toggleUpload() {
      setIsShowing(!showUpload);
    }
  
    return {
      showUpload,
      toggleUpload,
    }
  };

export default useUploadModal;
  