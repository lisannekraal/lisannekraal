import { useState } from 'react';


function ScrollArrow () {

  const [showUpScroll, setShowUpScroll] = useState(false)
  const [showDownScroll, setShowDownScroll] = useState(true)

  const checkScrollTop = () => {
    if (!showUpScroll && window.pageYOffset > 5500){
      setShowUpScroll(true)
      setShowDownScroll(false)
    } else if (showUpScroll && window.pageYOffset <= 5500){
      setShowUpScroll(false)
      setShowDownScroll(true)
    }
  };

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const scrollDown= () => {
    window.scrollBy({top: 800, behavior: 'smooth'});
  }

  window.addEventListener('scroll', checkScrollTop);

  return (
    <>
      <i 
        className="fas fa-chevron-up scrollTop"
        onClick={scrollTop}
        style={{height: 40, display: showUpScroll ? 'flex' : 'none'}}
      ></i>
      <i 
        className="fas fa-chevron-down scrollTop"
        onClick={scrollDown}
        style={{height: 40, display: showDownScroll ? 'flex' : 'none'}}
      ></i>
    </>
  )


}

export default ScrollArrow;
