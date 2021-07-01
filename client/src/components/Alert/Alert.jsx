import React, {useState, useEffect} from "react";

function Alert({ children, variant }) {
  const [show, setShow] = useState(true);

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false);
    }, 5000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  // If show is true this will be returned
  return <div className={`alert alert-${variant}`}>{children}</div>;
}

Alert.defaultPros = {
    variant: 'info',
}
  
export default Alert;
