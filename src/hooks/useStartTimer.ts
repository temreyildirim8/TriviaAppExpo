import { useEffect, useState } from 'react';

const useStartTimer = (initialTime: number = 20) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    setTimer(initialTime);
    setIsButtonDisabled(true);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsButtonDisabled(false);
    }

    return () => clearInterval(intervalId);
  }, [timer]);

  return { isButtonDisabled, timer, startTimer };
};

export default useStartTimer;
