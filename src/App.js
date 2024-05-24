import State from './components_0524/State';
import Test from './components_0524/Test';

//App은 Root(최상위 부모) 컴포넌트라고 부른다.
//App.js가 root (루트 컴포넌트)
//여기서 화면 전체에 대한 설정을 한다.
function App() {
  /*return에 HTML을 작성하는 문법을 JSX(Javascropt Syntax Extension)
  => 자바스크립트를 확장한 문법

  1. 카멜 형식
  2. 부모태그가 무조건 있어야 합니다.
  3. 반드시 태그를 닫아야 합니다.
  4. 리액트에서 직접 css를 작성할 때 카멜 표기법을 이용해야 합니다.
  5. 삼항연산자를 권장합니다.

  */

  return (
    <div>
      {/* Main이라는 컴포넌트를 불러옴 */}
      <State></State>
    </div>
  );
}

export default App;
