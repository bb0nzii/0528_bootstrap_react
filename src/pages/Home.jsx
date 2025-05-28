import {Container, Row, Col} from "react-bootstrap";
import Cont from "./Cont";

const Home = () => {
    return(
        <>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={6}>
                    <h1 className="mt-3 mb-2">What is React?</h1>
<pre>
- 리액트는 js 라이브러리<br/>
- facebook 엔지니어 조던 워크가 개발<br/>
- reactjs와 네이티브 두 가지 종류가 있음<br/>
- UI 구성요소를 구축하기 위한 도구<br/>
- SPA<br/>
- 필요한 것만 변경하여 메모리 소요가 적음<br/>
- react를 사용하려면 npm(node package manager)이 필요<br/>
- react 18버전 설치 : npm i react@latest react-dom@latest(코드는 주석으로 씀)<br/>
</pre>
{/* 
<code>
import ReactDOM from 'react-dom';
ReactDOM.render(, document.getElementById('root'));
</code>
<code>
// After
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();
</code>
*/}

                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Home;