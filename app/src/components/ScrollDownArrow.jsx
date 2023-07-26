import { useEffect, useState } from 'react';

export default function ScrollDownArrow() {

//   const [showScroll, setShowScroll] = useState(true);

//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       if (window.scrollY > 100) {
//         setShowScroll(true);
//       } else {
//         setShowScroll(false);
//       }
//     });
//   }, []);

  return (
    <div className="scroll-down-arrow">
        <code>scroll down</code>
        <ion-icon name="chevron-down-outline"></ion-icon>
    </div>
  );
}