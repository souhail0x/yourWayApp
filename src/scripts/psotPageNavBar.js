
const YourComponent = () => {
  // State to manage the background color and border of the div
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const [borderBottom, setBorderBottom] = useState('none');

  // Function to update background color based on scroll position
  const updateBackgroundColor = () => {
    const scrollPosition = window.scrollY;
    const threshold = 100;

    // Change background color and border based on scroll position
    if (scrollPosition > threshold) {
      setBackgroundColor('white'); // Change to your desired color
      setBorderBottom('orange solid 1px'); // Change to your desired color
    } else {
      setBackgroundColor('transparent'); // Change to default or another color
      setBorderBottom('none'); // Change to your desired color
    }
  };

  // Attach the function to the scroll event using useEffect
  useEffect(() => {
    window.addEventListener('scroll', updateBackgroundColor);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', updateBackgroundColor);
    };
  }, []);

  // Trigger the function on component mount
  useEffect(() => {
    updateBackgroundColor();
  }, []);

  return (
    <div className="post-top-header" style={{ backgroundColor, borderBottom }}>
      {/* Your component content goes here */}
    </div>
  );
};

export default YourComponent;
