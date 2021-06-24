import React from 'react';
import { Row, Col, Icon, Card, CardTitle } from 'react-materialize';

const ContentBlogM = props => {
    return (
        <div className="content-blog-m">
            <h2>Conteudo do blog</h2>
            <Row>
                <Col
                    m={6}
                    s={12}
                >
                    <Card
                    actions={[
                        <a key="1" href="#">This is a Link</a>
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">{props.posts.TITULO}</CardTitle>}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                    Here is the standard card with an image thumbnail.
                    <p>{JSON.stringify(props)}</p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ContentBlogM;