import React, { useState } from 'react';
import './Main.css';
// framer-motion : 리액트에서 사용하는 애니메이션 효과 라이브러리
import { motion } from 'framer-motion';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: 'spring' } }}
        className="card"
        style={{ boxShadow: '0px 10px 30px rgba(0,0,0,0.5)' }}
        // 익명함수
        onClick={() => {
          // ! 부정 : 반대
          setIsOpen(!isOpen);
        }}
      >
        <motion.h2 layout="position">React 애니메이션 효과 수업</motion.h2>
        {/* isopen true일 때 보이기 */}
        {isOpen && (
          <motion.div className="expand">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              excepturi consequuntur deserunt aut sunt eaque voluptatum suscipit
              ducimus, laudantium ipsa accusantium culpa voluptas hic impedit ad
              eos sint in sapiente!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut rem
              officiis perspiciatis eos culpa, optio tempore praesentium
              necessitatibus numquam, impedit nisi iusto nam alias eius adipisci
              fugiat porro corporis nobis.
            </p>
            <button>Click</button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Main;
