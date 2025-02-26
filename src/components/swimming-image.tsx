
import { motion } from 'framer-motion';

const SwimmingImage = () => {
  return (
    <>
      <motion.img
        src="/ray_default.png"
        alt="Swimming Ray"
        style={{position: 'absolute',width: '330px', height: 'auto'}}
        animate={{ 
          x: [1500, 200, 100, -500], 
          y: [1000, 300, 0, -1000], 
          rotate: [0, -20, -40, 70] }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
      />
    </>
  );
};

export default SwimmingImage;
