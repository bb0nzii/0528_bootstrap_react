import {Container, Row, Col} from "react-bootstrap";

const Typo = () => {
    return(
        <>
        <Container>
            <Row>
                <p className="text-break">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p>
            </Row>
            <Row>
                <Col lg={3} className="border">
                    <h1>abbr(약어)</h1>
                    <p>마우스를 울리면 물음표가 있는 커서 모양을 지정</p>
                    <section>the <abbr title="world health group">WHO</abbr> was founded in 1948</section>
                </Col>
                <Col lg={3} className="border">
                    <h1>blockquote</h1>
                    <p>인용문은 짧은 인용(q)과 긴 인용(blockQuote)이 있음</p>
                    <blockquote className="blockquote">
                        <p>사탄들의 학교에 루시퍼의 등장이라니...</p>
                        <footer className="blockquote-footer">From 상속자들</footer>
                    </blockquote>
                </Col>
                <Col lg={3} className="border">
                    <h1>And so on...</h1>
                    <p className="text-start">왼쪽</p>
                    <p className="text-end">오른쪽</p>
                    <p className="text-center">가운데</p>
                    <p className="text-nowrap">감싸지 않음</p>
                    <p>
                        .lead : 글씨들 사이에서 <span className="lead">크기변화</span>가 생겨 조금 더 돋보임 <br/>
                        .text-start : 왼쪽정렬 너낌<br/>
                        .text-end : 오른쪽정렬 너낌<br/>
                        .text-center : 가운데정렬 너낌<br/>
                        .text-break : 너비에 맞게 텍스트가 알아서 밑으로 내려감<br/>
                        .text-decoration-none : a태그 밑줄방지
                    </p>
                </Col>
                <Col lg={3} className="border">
                    <h1>And soso on...</h1>
                    <p>
                        .text-nowrap : 가공하지 않은 그 상태 그대로<br/>
                        .text-rowercase : 소문자<br/>
                        .text-uppercase : 대문자<br/>
                        .text-capitalize : 첫글자만 대문자로<br/>
                        .initialism : 폰트를 좀 더 작게<br/>
                        .list-unstyled : 클래스 바로 아래 부분 목록에 여백을 제거<br/>
                        .list-inline : ul, ol 태그를 인라인으로 설정
                    </p>
                </Col>
            </Row>

            <Row>
                <Col lg={3} className="border">
                    <h1 className="mt-5 mb-3">Typography</h1>
                    <div className="d-flex">
                        <p className="h1">h1</p>
                        <p className="h2">h2</p>
                        <p className="h3">h3</p>
                        <p className="h4">h4</p>
                        <p className="h5">h5</p>
                        <p className="h6">h6</p>
                    </div>
                </Col>
                <Col lg={3} className="border">
                    <p>h시리즈보다 조금 더 큰 글씨를 사용하고 싶을 때는 .display</p>
                    <div className="">
                        <h1 className="display-1">Display-1</h1>
                        <h1 className="display-2">Display-2</h1>
                        <h1 className="display-3">Display-3</h1>
                        <h1 className="display-4">Display-4</h1>
                        <h1 className="display-5">Display-5</h1>
                        <h1 className="display-6">Display-6</h1>
                    </div>
                </Col>
                <Col lg={3} className="border">
                    <h1 className="mt-5 mb-3">Keybord</h1>
                    <p>use <kbd>Ctrl+P</kbd> to open</p>
                </Col>
                <Col lg={3} className="border">
                    <h1 className="mt-5 mb-3">정의 리스트</h1>
                    <dl>
                        <dt>Coffee</dt>
                        <dd>커피는 아이스아메리카노</dd>
                    </dl>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Typo;